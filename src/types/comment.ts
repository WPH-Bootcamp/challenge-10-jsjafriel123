export type Author = {
  id: number;
  name: string;
  headline: string;
  avatarUrl: string;
};

export type Comment = {
  id: number;
  content: string;
  createdAt: string;
  author: Author;
};

export type CommentsRes<T> = {
  data: T[];
};
