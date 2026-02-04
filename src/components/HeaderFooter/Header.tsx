'use client';

import { useState } from 'react';
import MobileMenu from './MobileMenu';
import Link from 'next/link';
import { Input } from '../ui/input';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Header() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [value, setValue] = useState('');

  return (
    <header className='bg-background fixed z-30 flex h-[64px] w-[393px] items-center justify-between border-b border-[#D5D7DA] px-4 lg:h-[80px] lg:w-[1440px] lg:justify-between lg:px-30'>
      <Link href='/' className='hover:scale-110'>
        <img
          src='/assets/logo-Your-Logo.svg'
          alt='Your Logo'
          className='flex h-[24px] w-[106px] lg:h-[36px] lg:w-[159px]'
        />
      </Link>

      {/* Mobile Section */}
      <div className='flex h-[24px] w-[72px] justify-between lg:hidden'>
        <button type='button' className='size-6 cursor-pointer hover:scale-120'>
          <img
            src='/assets/icon-Search.svg'
            alt='Search'
            className='object-cover'
          />
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
      {/* Desktop Section */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const params = new URLSearchParams(searchParams.toString());
          params.set('query', value);
          params.set('page', '1'); // reset pagination

          router.push(`/search?${params.toString()}`);
        }}
        className='relative size-auto'
      >
        <Input
          id='search'
          type='search'
          placeholder='Search'
          onChange={(e) => setValue(e.target.value)}
          className='hidden lg:block lg:h-[48px] lg:w-[373px] lg:px-2 lg:pl-10'
        />
        <button className='absolute hidden size-6 lg:top-3 lg:left-2 lg:block'>
          <img
            src='/assets/icon-Search.svg'
            alt='Search'
            className='object-cover'
          />
        </button>
      </form>
      <nav className='lg: hidden items-center lg:flex lg:h-[44px] lg:w-[266px] lg:justify-evenly'>
        <Link
          href='/login'
          className='h-[28px] w-[36px] cursor-pointer text-[14px]/[28px] font-semibold text-[#0093DD] underline hover:scale-110'
        >
          Login
        </Link>
        <hr className='w-[23px] rotate-90 border border-[#D5D7DA]' />
        <Link
          href='/register'
          className='text-neutral-25 flex h-11 w-45.5 cursor-pointer items-center justify-center gap-2 rounded-full bg-[#0093DD] p-2 text-sm font-semibold hover:scale-110'
        >
          Register
        </Link>
      </nav>
    </header>
  );
}
