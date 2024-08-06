// Define the type for a Post
export type Post = {
  id: number;
  title: string;
  description: string;
  image: string;
  slug: string;
};

// Create an array of posts with the defined type
const posts: Post[] = [
  {
    id: 1,
    title: 'The Art of Simplicity: Aesthetic Living',
    description: 'Embrace the beauty of minimalism in everyday life. Discover how simplicity can transform your surroundings and inner peace.',
    image: '/image1.jpg',
    slug: 'the-art-of-simplicity-aesthetic-living',
  },
  {
    id: 2,
    title: 'Whispers of the Forest: Life in Harmony with Nature',
    description: 'Explore the symbiotic relationship between humans and nature. Learn how to live in harmony with the earth through ancient practices.',
    image: '/image2.jpg',
    slug: 'whispers-of-the-forest-life-in-harmony-with-nature',
  },
  {
    id: 3,
    title: 'Moonlit Spells: The Magic of Witchcraft',
    description: 'Delve into the world of witchcraft and lunar rituals. Uncover the mystical practices that connect us to the moon and stars.',
    image: '/image3.jpg',
    slug: 'moonlit-spells-the-magic-of-witchcraft',
  },
  {
    id: 4,
    title: 'The Aesthetic of Silence: Finding Peace in Stillness',
    description: 'In a world full of noise, discover the calming power of silence. Learn to find peace and beauty in the quiet moments of life.',
    image: '/image4.jpg',
    slug: 'the-aesthetic-of-silence-finding-peace-in-stillness',
  },
  {
    id: 5,
    title: 'Enchanted Paths: Walking Between Worlds',
    description: 'Journey through the veil between the physical and spiritual realms. Explore how walking in nature can connect us to the unseen.',
    image: '/image5.jpg',
    slug: 'enchanted-paths-walking-between-worlds',
  },
  {
    id: 6,
    title: 'The Elegance of Shadows: Aesthetic Darkness',
    description: 'Explore the beauty found in darkness and shadow. Discover how aesthetic can be redefined by embracing the night.',
    image: '/image6.jpg',
    slug: 'the-elegance-of-shadows-aesthetic-darkness',
  },
  {
    id: 7,
    title: 'Crafting a Life of Beauty and Mystery',
    description: 'Combine the elements of aesthetic design and ancient mysticism. Create a life filled with beauty, wonder, and a touch of the arcane.',
    image: '/image7.jpg',
    slug: 'crafting-a-life-of-beauty-and-mystery',
  },
];

export default posts;
