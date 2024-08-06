import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import axios from 'axios';

export async function generateOgImage(post: {
    id: number;
    title: string;
    description: string;
    slug: string;
    image?: string;
}) {
    const width = 1200;
    const height = 630;

    const ogImageDir = path.join(process.cwd(), 'public', 'og-images');
    if (!fs.existsSync(ogImageDir)) {
        fs.mkdirSync(ogImageDir, { recursive: true });
    }

    const outputPath = path.join(ogImageDir, `${post.id}.png`);

    // Create base image
    const baseImage = sharp({
        create: {
            width: width,
            height: height,
            channels: 4,
            background: { r: 255, g: 255, b: 255, alpha: 1 }
        }
    });

    // Add text
    const svgText = `
    <svg width="${width}" height="${height}">
      <text x="50%" y="20%" font-family="Arial, sans-serif" font-size="60" font-weight="bold" fill="black" text-anchor="middle">${post.title}</text>
      <text x="50%" y="40%" font-family="Arial, sans-serif" font-size="30" fill="black" text-anchor="middle">${post.description.substring(0, 100)}...</text>
    </svg>
  `;

    let composite: sharp.OverlayOptions[] = [
        { input: Buffer.from(svgText), top: 0, left: 0 }
    ];

    // Add post image if exists
    if (post.image) {
        try {
            const response = await axios.get(post.image, { responseType: 'arraybuffer' });
            const imageBuffer = Buffer.from(response.data, 'binary');

            composite.push({
                input: await sharp(imageBuffer)
                    .resize(400, 250, { fit: 'cover' })
                    .toBuffer(),
                top: 350,
                left: 400
            });
        } catch (error) {
            console.error('Error fetching or processing post image:', error);
        }
    }

    // Generate final image
    await baseImage
        .composite(composite)
        .png()
        .toFile(outputPath);

    return `/og-images/${post.id}.png`;
}