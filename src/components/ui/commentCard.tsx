import { format } from 'date-fns';
import { Comment } from '@/types/comment';

const CommentCard = ({ comment }: { comment: Comment }) => {
  return (
    <div className='flex min-h-19 w-full flex-col gap-3 lg:min-h-22'>
      {/* <div className='h-0 w-full border border-neutral-300' /> */}
      <div className='flex h-11 w-full flex-row gap-2 lg:h-13 lg:gap-3'>
        <img
          src={comment.author.avatarUrl || '/assets/user-avatar1.png'}
          alt='Author'
          className='lg:size-12'
        />
        <div className='flex h-full w-auto flex-col justify-evenly text-xs lg:text-sm'>
          <p className='font-semibold'>{comment.author.name}</p>
          <p className='text-neutral-600'>
            {format(new Date(comment.createdAt), 'dd-MM-yyyy')}
          </p>
        </div>
      </div>
      <p className='text-xs text-neutral-900 lg:text-sm'>{comment.content}</p>
    </div>
  );
};

export default CommentCard;
