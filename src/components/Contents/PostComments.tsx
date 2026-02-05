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

      {comments.length === 0 && (
        <em className='text-primary-300 lg:text-md text-sm'>
          Be the first to comment!
        </em>
      )}

      {comments.slice(0, 3).map((comment) => (
        <Fragment key={comment.id}>
          <div className='h-0 w-full border border-neutral-300' />
          <CommentCard key={comment.id} comment={comment} />
        </Fragment>
      ))}

      {isMore && <MoreComments comments={comments} />}
    </section>
  );
}
