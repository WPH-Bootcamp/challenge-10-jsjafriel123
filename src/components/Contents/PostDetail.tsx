import { format } from 'date-fns';
import { getPostById } from '@/lib/posts';

type Props = {
  id: number;
};

export default async function PostDetail({ id }: Props) {
  const post = await getPostById(id);
  console.log(post);
  const dateCreated = format(new Date(post.createdAt), 'dd-MM-yyyy');

  return (
    <section className='flex h-auto w-full flex-col items-center gap-4 lg:max-h-[1730px] lg:w-[800px] lg:gap-6'>
      {/* Title */}
      <div className='flex h-[154px] w-full flex-col gap-3 lg:h-[132px]'>
        <h2 className='lg:text-display-lg text-display-sm max-h-[114px] w-full font-bold text-neutral-900 lg:max-h-[88px]'>
          {post.title}
        </h2>
        {/* Skill Cards */}
        <div className='flex h-[28px] flex-row gap-2 overflow-hidden'>
          {post.tags.map((tag, index) => (
            <p
              key={index}
              className='flex items-center rounded-xl border border-[#D5D7DA] p-1 text-xs text-neutral-900'
            >
              {tag}
            </p>
          ))}
        </div>
      </div>
      {/* Author */}
      <div className='flex h-[30px] w-full items-center gap-3 text-xs lg:h-[40px] lg:text-sm'>
        <img
          src='/assets/avatar-User.svg'
          alt='Avatar'
          className='size-[30px] lg:size-[40px]'
        />
        <p className='text-neutral-900'>{post.author.name}</p>
        <div className='size-1 rounded-full bg-[#A4A7AE]'></div>
        <p className='text-neutral-600'>{dateCreated}</p>
      </div>
      <div className='h-0 w-full border border-neutral-300' />
      {/* Likes - Comments */}
      <div className='flex h-[28px] w-full items-center gap-3 text-xs text-neutral-600 lg:text-sm'>
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
      <div className='h-0 w-full border border-neutral-300' />
      {/* Image */}
      <img
        src={post.imageUrl}
        alt='Blog Picture'
        className='aspect-auto w-full rounded-[6px]'
      />
      {/* Content */}
      <div className='max-h-[1142px] w-full lg:max-h-[922px]'>
        <p className='lg:text-md text-sm text-neutral-950'>{post.content}</p>
      </div>

      <div className='h-0 w-full border border-neutral-300' />
      {/* Comment Title */}
      <h2 className='w-full text-xl font-bold text-neutral-900'>
        Comments({post.comments})
      </h2>
    </section>
  );
}
