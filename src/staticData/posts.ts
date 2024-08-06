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
    image: 'https://images.unsplash.com/photo-1522775417749-29284fb89f43?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    slug: 'the-art-of-simplicity-aesthetic-living',
  },
  {
    id: 2,
    title: 'Whispers of the Forest: Life in Harmony with Nature',
    description: 'Explore the symbiotic relationship between humans and nature. Learn how to live in harmony with the earth through ancient practices.',
    image: 'https://images.unsplash.com/photo-1488693161025-5f967b74de89?q=80&w=2059&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    slug: 'whispers-of-the-forest-life-in-harmony-with-nature',
  },
  {
    id: 3,
    title: 'Moonlit Spells: The Magic of Witchcraft',
    description: 'Delve into the world of witchcraft and lunar rituals. Uncover the mystical practices that connect us to the moon and stars.',
    image: 'https://images.unsplash.com/photo-1467991521834-fb8e202c7074?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    slug: 'moonlit-spells-the-magic-of-witchcraft',
  },
  {
    id: 4,
    title: 'The Aesthetic of Silence: Finding Peace in Stillness',
    description: 'In a world full of noise, discover the calming power of silence. Learn to find peace and beauty in the quiet moments of life.',
    image: 'https://images.unsplash.com/photo-1488841714725-bb4c32d1ac94?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    slug: 'the-aesthetic-of-silence-finding-peace-in-stillness',
  },
  {
    id: 5,
    title: 'Enchanted Paths: Walking Between Worlds',
    description: 'Journey through the veil between the physical and spiritual realms. Explore how walking in nature can connect us to the unseen.',
    image: 'https://plus.unsplash.com/premium_photo-1687864550351-6351804c91b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    slug: 'enchanted-paths-walking-between-worlds',
  },
  {
    id: 6,
    title: 'The Elegance of Shadows: Aesthetic Darkness',
    description: 'Explore the beauty found in darkness and shadow. Discover how aesthetic can be redefined by embracing the night.',
    image: 'https://images.unsplash.com/photo-1488654091480-0a2443430a4a?q=80&w=1779&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    slug: 'the-elegance-of-shadows-aesthetic-darkness',
  },
  {
    id: 7,
    title: 'Crafting a Life of Beauty and Mystery',
    description: 'Combine the elements of aesthetic design and ancient mysticism. Create a life filled with beauty, wonder, and a touch of the arcane.',
    image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    slug: 'crafting-a-life-of-beauty-and-mystery',
  },
];

export default posts;
