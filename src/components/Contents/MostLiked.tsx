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
      {/* <div className='flex h-[152px] w-full flex-col gap-3 lg:h-[164px] lg:gap-3'>
        <h2 className='h-[60px] w-full text-[16px]/[30px] font-bold text-[#181D27]'>
          5 Reasons to Learn Frontend Development in 2025
        </h2>

        <p className='line-clamp-2 h-[48px] w-full text-[12px]/[24px] text-[#181D27] lg:h-[56px] lg:text-[14px]/[28px]'>
          Frontend development is more than just building beautiful user
          interfaces — it's about crafting user experiences that are fast,
          accessible, and intuitive. As we move into 2025, the demand for
          skilled frontend developers continues to rise.
        </p>

        <div className='flex h-[28px] w-[149px] items-center justify-evenly gap-3 text-[12px]/[24px] text-[#535862] lg:text-[14px]/[28px]'>
          <div className='flex h-full w-[43px] items-center justify-between'>
            <button
              type='button'
              className='size-5 cursor-pointer hover:scale-110'
            >
              <img
                src='/assets/icon-Like.svg'
                alt='Like'
                className='object-cover'
              />
            </button>
            <span>20</span>
          </div>
          <div className='flex h-full w-[41px] items-center justify-between'>
            <button
              type='button'
              className='size-5 cursor-pointer hover:scale-110'
            >
              <img
                src='/assets/icon-Comment.svg'
                alt='Comments'
                className='object-cover'
              />
            </button>
            <span>20</span>
          </div>
          <div className='flex h-full w-[43px] items-center justify-between opacity-0'>
            <button
              type='button'
              className='size-5 cursor-pointer hover:scale-110'
            >
              <img
                src='/assets/icon-Share.svg'
                alt='Share'
                className='object-cover'
              />
            </button>
          </div>
        </div>
      </div> */}
      {/* Posting Card */}
      {posts.map((post) => (
        <Fragment key={post.id}>
          <MostLikedCard post={post} />
        </Fragment>
      ))}

      <hr className='w-full border border-[#D5D7DA]' />
    </section>
  );
}
