'use client';

import MobileMenu from './MobileMenu';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function MobileButtons() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('query', '');
    params.set('page', '0'); // send Indicator for Mobile Search Mode
    router.push(`/search?${params.toString()}`);
  };

  return (
    <div className='flex h-6 w-18 justify-between'>
      <button type='button' className='size-6 cursor-pointer hover:scale-120'>
        <img
          src='/assets/icon-Search.svg'
          alt='Search'
          onClick={() => handleSearch()}
          className='object-cover'
        />
        {/* </Link> */}
      </button>
      <button
        type='button'
        onClick={() => setOpen(true)}
        className='size-6 cursor-pointer hover:scale-120'
      >
        <img
          src='/assets/icon-hamburger.svg'
          alt='Menu'
          className='object-cover'
        />
      </button>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
