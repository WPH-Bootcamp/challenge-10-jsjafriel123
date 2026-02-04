import { getPostsByUser } from '@/lib/posts';
import { User, UserPost } from '@/types/blog';
import { Fragment } from 'react';
import PostCard from '../ui/postCard';
import Link from 'next/link';

type Props = {
  authorId: number;
};

export default async function PostByUser({ authorId }: Props) {
  const result = await getPostsByUser(authorId);
  const { data: posts, total, page, lastPage, user } = result;

  return (
    <section className='flex h-auto w-full flex-col items-center'>
      <h2 className='lg:text-display-xs h-8.5 w-full text-xl font-bold text-neutral-900 lg:h-9'>
        Another Post
      </h2>
      {posts.length === 0 && (
        <em className='text-primary-300 lg:text-md text-sm'>
          No more Post by Author
        </em>
      )}
      {posts.map((post) => (
        <Fragment key={post.id}>
          <Link href={`/posts/${post.id}`}>
            <div className='h-0 w-full border border-neutral-300' />
            <PostCard post={post} />
          </Link>
        </Fragment>
      ))}
    </section>
  );
}
