export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  category: string;
  readTime: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  tags: string[];
  stats: {
    views: number;
    likes: number;
    shares: number;
  };
}