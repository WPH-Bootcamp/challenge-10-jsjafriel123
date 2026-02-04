import { fetchAPI } from '@/lib/api';
import {
  Post,
  UserPost,
  PaginatedResponse,
  UserPaginatedResponse,
} from '@/types/blog';

// export async function getRecommendedPosts(page = 1, limit = 10) {
//   return fetchAPI<PaginatedResponse<Post>>(
//     `/posts/recommended?limit=${limit}&page=${page}`,
//     { revalidate: 60 }, // ISR: refresh every 60s
//   ).then((res) => res.data);
// }

export async function getRecommendedPosts(
  page = 1,
  limit = 5
): Promise<PaginatedResponse<Post>> {
  return fetchAPI<PaginatedResponse<Post>>(
    `/posts/recommended?limit=${limit}&page=${page}`,
    { revalidate: 60 }
  );
}

export async function getMostLikedPosts(
  page = 1,
  limit = 3
): Promise<PaginatedResponse<Post>> {
  return fetchAPI<PaginatedResponse<Post>>(
    `/posts/most-liked?limit=${limit}&page=${page}`,
    { revalidate: 60 }
  );
}

export async function getPostById(id: number): Promise<Post> {
  return fetchAPI<Post>(`/posts/${id}`, {
    revalidate: 60,
  });
}

export async function getPostsByUser(
  userId: number,
  page = 1,
  limit = 5
): Promise<UserPaginatedResponse<UserPost>> {
  return fetchAPI<UserPaginatedResponse<UserPost>>(`/posts/by-user/${userId}`, {
    revalidate: 60,
  });
}
