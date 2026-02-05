'use client';

import Link from 'next/link';

export default function AuthActions() {
  return (
    <nav className='flex h-22 w-53.5 flex-col items-center justify-between lg:h-11 lg:w-66.5 lg:flex-row'>
      <Link
        href='/login'
        className='text-primary-300 h-7 w-9 cursor-pointer text-sm font-semibold underline hover:scale-110'
      >
        Login
      </Link>
      <hr className='hidden rotate-90 border border-[#D5D7DA] lg:block lg:w-5.75' />
      <Link
        href='/register'
        className='text-neutral-25 flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#0093DD] p-2 text-sm font-semibold hover:scale-110 lg:w-45.5'
      >
        Register
      </Link>
    </nav>
  );
}
