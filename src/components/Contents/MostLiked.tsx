// "use client";
import { getMostLikedPosts } from '@/lib/posts';
import { Fragment } from 'react';
import MostLikedCard from '../ui/mostlikedCard';

export default async function MostLiked() {
  const result = await getMostLikedPosts();
  const { data: posts, page: page2, lastPage } = result;
  // console.log('Page:', page2);
  // console.log('Last Page:', lastPage);
  // console.log(posts);

  return (
    <section className='h-max-[618px] flex w-[361px] flex-col items-center gap-4 pt-6 lg:w-[297px] lg:gap-5'>
      <div className='h-[34px] w-full'>
        <h1 className='w-full text-[20px]/[34px] font-bold lg:text-[24px]/[34px]'>
          Most liked
        </h1>
      </div>
      {/* Posting Card */}
      <div className='h-full w-full gap-4'>
        {posts.map((post) => (
          <Fragment key={post.id}>
            <MostLikedCard post={post} />
          </Fragment>
        ))}
      </div>
      <hr className='w-full border border-[#D5D7DA]' />
    </section>
  );
}
