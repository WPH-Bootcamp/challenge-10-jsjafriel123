'use client';

import { useState, Fragment } from 'react';
import Overlay from '../HeaderFooter/Overlay';
import { Comment } from '@/types/comment';
import CommentForm from '../ui/commentForm';
import CommentCard from '../ui/commentCard';

const ModalComments = ({
  data,
  open,
  onClose,
}: {
  data: Comment[];
  open: boolean;
  onClose: () => void;
}) => {
  console.log(data);

  return (
    <>
      <Overlay show={open} onClick={onClose} />

      <section className='flex items-center justify-center'>
        <div
          className={`bg-background fixed top-20 left-1/2 z-50 flex max-h-[658px] w-[345px] -translate-x-1/2 transform flex-col items-center gap-4 rounded-2xl px-4 py-6 transition-transform duration-500 ease-in-out lg:top-16 lg:max-h-[902px] lg:w-[613px] ${open ? '' : 'hidden'}`}
        >
          <div className='bg-background flex h-[30px] w-full flex-row items-center justify-between'>
            <p className='text-md font-bold text-neutral-950 lg:text-xl'>
              Comments({data.length})
            </p>
            <button
              type='button'
              onClick={() => onClose()}
              className='flex size-6 cursor-pointer hover:scale-120'
            >
              <img
                src='/assets/x-close.svg'
                alt='Close'
                className='object-cover'
              />
            </button>
          </div>
          <CommentForm />
          {/* <p>LIST OF MORE COMMENTS HERE...</p> */}
          <div className='max-h-[324px] w-full overflow-y-auto lg:max-h-[448px]'>
            {data.map((comment) => (
              <Fragment key={comment.id}>
                <div className='h-0 w-full border border-neutral-300' />
                <CommentCard key={comment.id} comment={comment} />
              </Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default function MoreComments({ comments }: { comments: Comment[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type='button'
        onClick={() => setIsOpen(true)}
        className='text-primary-300 self-start text-sm font-semibold underline hover:scale-110'
      >
        See_All_Comments
      </button>
      <ModalComments
        data={comments}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      />{' '}
    </>
  );
}
