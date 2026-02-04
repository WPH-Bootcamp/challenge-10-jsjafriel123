import type { Post } from '@/types/blog';
import { format } from 'date-fns';
import { stripInlineStyles } from '@/lib/sanitizeHtml';

const MostLikedCard = ({ post }: { post: Post }) => {
  const dateCreated = format(new Date(post.createdAt), 'dd-MM-yyyy');

  return (
    <div className='flex h-[152px] w-full flex-col gap-3 lg:h-[164px] lg:gap-3'>
      <h2 className='text-md max-h-[60px] w-full font-bold text-[#181D27]'>
        {post.title}
      </h2>
      <article
        className='line-clamp-2 h-[48px] w-full text-[12px]/[24px] text-[#181D27] lg:h-[56px] lg:text-[14px]/[28px]'
        dangerouslySetInnerHTML={{
          __html: stripInlineStyles(post.content),
        }}
      />
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
          <span>{post.likes}</span>
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
          <span>{post.comments}</span>
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
      </div>{' '}
    </div>
  );
};

export default MostLikedCard;
