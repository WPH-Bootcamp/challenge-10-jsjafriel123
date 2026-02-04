/**
 * Blog Types
 *
 * TODO: Define types sesuai dengan response dari API
 * Contoh structure (sesuaikan dengan API response yang sebenarnya):
 */

// export interface BlogPost {
//   id: string;
//   title: string;
//   content: string;
//   author: string;
//   createdAt: string;
//   image?: string;
//   category?: string;
//   // ... tambahkan fields lainnya sesuai API
// }

// export interface BlogPostListResponse {
//   posts: BlogPost[];
//   total: number;
//   page: number;
//   // ... tambahkan fields lainnya
// }

export type Author = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export type Post = {
  id: number;
  title: string;
  content: string;
  tags: string[];
  imageUrl: string;
  imagePublicId: string;
  createdAt: string;
  likes: number;
  comments: number;
  author: Author;
};

export type PaginatedResponse<T> = {
  data: T[];
  total: number;
  page: number;
  lastPage: number;
};
