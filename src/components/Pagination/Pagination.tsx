'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';

type Props = {
  currentPage: number;
  totalPages: number;
};

function getPaginationWindow(currentPage: number, totalPages: number) {
  if (totalPages <= 3) {
    return {
      pages: Array.from({ length: totalPages }, (_, i) => i + 1),
      showLeftDots: false,
      showRightDots: false,
    };
  }

  let start = currentPage - 1;
  let end = currentPage + 1;

  if (start < 1) {
    start = 1;
    end = 3;
  }

  if (end > totalPages) {
    end = totalPages;
    start = totalPages - 2;
  }

  return {
    pages: Array.from({ length: end - start + 1 }, (_, i) => start + i),
    showLeftDots: start > 1,
    showRightDots: end < totalPages,
  };
}

export default function Pagination({
  currentPage,
  totalPages, // backend doesn’t return total yet
}: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { pages, showLeftDots, showRightDots } = getPaginationWindow(
    currentPage,
    totalPages
  );

  function goToPage(page: number) {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', String(page));
    router.push(`/?${params.toString()}`, { scroll: false });
  }

  return (
    <div className='bg-background flex h-[48px] w-full items-center justify-center gap-4 lg:w-[368px]'>
      <button
        type='button'
        disabled={currentPage === 1}
        onClick={() => goToPage(currentPage - 1)}
        className='flex h-[24px] w-[77px] cursor-pointer items-center gap-1.5 p-1 hover:scale-110 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100'
      >
        <img src='/assets/icon-Left.svg' alt='Previous' />
        <span>Previous</span>
      </button>

      {/* Left elipsis */}
      {showLeftDots && <span className='px-2 pb-2'>…</span>}

      <div className='flex h-full w-[180px] items-center justify-evenly'>
        {pages.map((page) => {
          const isActive = page === currentPage;

          return (
            <Button
              key={page}
              variant={isActive ? 'outline' : 'default'}
              onClick={() => goToPage(page)}
              className='bg-background] text-foreground flex size-12 items-center justify-center rounded-full'
            >
              {page}
            </Button>
          );
        })}
      </div>

      {/* Right elipsis */}
      {showRightDots && <span className='px-2 pb-2'>…</span>}

      <button
        type='button'
        disabled={currentPage === totalPages}
        onClick={() => goToPage(currentPage + 1)}
        className='flex h-[24px] w-[56px] cursor-pointer items-center gap-1.5 p-1 hover:scale-110 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100'
      >
        <span>Next</span>
        <img src='/assets/icon-Right.svg' alt='Next' />
      </button>
    </div>
  );
}
