import type { Post } from '@/types/blog';
import { format } from 'date-fns';
import { stripInlineStyles } from '@/lib/sanitizeHtml';

const PostCard = ({ post }: { post: Post }) => {
  const dateCreated = format(new Date(post.createdAt), 'dd-MM-yyyy');

  return (
    <div className='flex h-[240px] w-full flex-row items-center gap-4 lg:h-[276px] lg:gap-6'>
      <img
        src={post.imageUrl}
        alt='Blog Picture'
        className='hidden h-[258px] w-[340px] rounded-[6px] lg:block'
      />
      <div className='flex h-full w-full flex-col'>
        <div className='flex h-[152px] w-full flex-col gap-2 lg:h-[176px]'>
          <h2 className='text-md max-h-[60px] w-full font-bold text-[#181D27] lg:max-h-[68px] lg:text-xl'>
            {post.title}
          </h2>
          {/* Skill Cards */}
          <div className='flex h-[28px] flex-row gap-2 overflow-hidden'>
            {post.tags.map((tag, index) => (
              <p
                key={index}
                className='flex items-center gap-2 rounded-xl border border-[#D5D7DA] p-1 text-[12px]/[20px] text-[#181D27] lg:text-[12px]/[24px]'
              >
                {tag}
              </p>
            ))}
          </div>
          <div className='h-[48px] w-full lg:h-[56px]'>
            <article
              className='line-clamp-2 text-[12px]/[24px] text-[#181D27] lg:text-[14px]/[28px]'
              dangerouslySetInnerHTML={{
                __html: stripInlineStyles(post.content),
              }}
            />
          </div>
        </div>

        <div className='flex h-[30px] w-full items-center gap-3 text-[12px]/[24px] lg:h-[40px] lg:text-[14px]/[28px]'>
          <img
            src='/assets/avatar-User.svg'
            alt='Avatar'
            className='size-[30px] lg:size-[40px]'
          />
          <p className='text-[#181D27]'>{post.author.name}</p>
          <div className='size-1 rounded-full bg-[#A4A7AE]'></div>
          <p className='text-[#535862]'>{dateCreated}</p>
        </div>
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
        </div>
      </div>
    </div>
  );
};

export default PostCard;
