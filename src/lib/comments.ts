import { fetchAPI } from '@/lib/api';
import { Comment, CommentsRes } from '@/types/comment';

export async function getCommentsById(id: number): Promise<Comment[]> {
  return fetchAPI<Comment[]>(`/posts/${id}/comments`, {
    revalidate: 60,
  });
}
