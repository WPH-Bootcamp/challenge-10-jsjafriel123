import { format } from 'date-fns';
import { getCommentsById } from '@/lib/comments';
import CommentForm from '../ui/commentForm';
import CommentCard from '../ui/commentCard';
import MoreComments from './MoreComments';
import { Fragment } from 'react';

type Props = {
  id: number;
};

export default async function PostComments({ id }: Props) {
  const comments = (await getCommentsById(id)) || [];
  const isMore = (comments?.length ?? 0) > 3;

  return (
    <section className='flex h-auto w-full flex-col items-center gap-4 lg:gap-6'>
      <CommentForm />

      {comments.length === 0 && <p>Be the first to comment!</p>}

      {comments.slice(0, 3).map((comment) => (
        <Fragment key={comment.id}>
          <div className='h-0 w-full border border-neutral-300' />
          <CommentCard key={comment.id} comment={comment} />
        </Fragment>
      ))}
      {/* <button
        disabled={!isMore}
        className={`text-primary-300 self-start text-sm font-semibold underline hover:scale-110 ${isMore ? '' : 'hidden'}`}
      >
        See_All_Comments
      </button> */}
      {isMore && <MoreComments comments={comments} />}
    </section>
  );
}
