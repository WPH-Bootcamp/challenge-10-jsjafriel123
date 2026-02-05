/**
 * API Utility
 *
 * Helper functions untuk fetch data dari backend API
 * Kamu bisa modify atau extend sesuai kebutuhan
 */

const API_BASE_URL = process.env.API_BASE_URL!;
type FetchOptions = {
  revalidate?: number;
  cache?: RequestCache;
};
/**
 * Generic fetch function dengan error handling
 */
async function fetchAPI<T>(
  endpoint: string,
  options?: FetchOptions,
): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    cache: options?.cache,
    next: options?.revalidate ? { revalidate: options.revalidate } : undefined,
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}
export { fetchAPI, API_BASE_URL };

// TODO: Implement API functions sesuai dengan endpoint yang tersedia
// Contoh:
// export async function getBlogPosts() {
//   return fetchAPI<BlogPost[]>('/posts');
// }
//
// export async function getBlogPost(id: string) {
//   return fetchAPI<BlogPost>(`/posts/${id}`);
// }
