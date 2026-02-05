// 'use client';

import Link from 'next/link';
import FormSearch from '../ui/formSearch';
import HeaderButtons from './HeaderButtons';

export default function Header() {
  return (
    <header className='bg-background fixed z-30 flex h-[64px] w-[393px] items-center justify-between border-b border-[#D5D7DA] px-4 lg:h-[80px] lg:w-[1440px] lg:justify-between lg:px-30'>
      <Link href='/' className='hover:scale-110'>
        <img
          src='/assets/logo-Your-Logo.svg'
          alt='Your Logo'
          className='flex h-[24px] w-[106px] lg:h-[36px] lg:w-[159px]'
        />
      </Link>

      <div className='hidden lg:block'>
        <FormSearch isSearch={false} />
      </div>

      <HeaderButtons />
    </header>
  );
}
