// "use client";
import { getRecommendedPosts } from '@/lib/posts';
import { Fragment } from 'react';
import PostCard from '../ui/postCard';
import Pagination from '../Pagination/Pagination';
import Link from 'next/link';

type Props = {
  page: number;
};

export default async function Recommended({ page }: Props) {
  const result = await getRecommendedPosts(page);
  const { data: posts, page: page2, lastPage } = result;

  return (
    <section className='flex max-h-[1476px] w-[361px] flex-col items-center gap-4 overflow-y-auto py-6 lg:max-h-[1730px] lg:w-[807px] lg:gap-6'>
      <div className='h-[34px] w-full lg:h-[38px]'>
        <h1 className='w-full text-[20px]/[34px] font-bold lg:text-[28px]/[38px]'>
          Recommended For You
        </h1>
      </div>
      {/* Posting Card */}
      {posts.map((post) => (
        <Fragment key={post.id}>
          <Link href={`/posts/${post.id}`}>
            <PostCard post={post} />
          </Link>
        </Fragment>
      ))}

      <hr className='w-full border border-[#D5D7DA]' />

      {/* Pagination */}
      <Pagination currentPage={page} totalPages={lastPage} />
    </section>
  );
}
