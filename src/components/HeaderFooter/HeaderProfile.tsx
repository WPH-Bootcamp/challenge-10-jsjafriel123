'use client';

import Link from 'next/link';
import { useState } from 'react';
import ProfileMenu from './ProfileMenu';

type Props = {
  onLogout: () => void;
};

export default function HeaderProfile({ onLogout }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className='flex h-22 w-20 items-center justify-between lg:h-10 lg:w-65'>
      <Link
        href='/writepost'
        className='flex h-7 w-7 cursor-pointer items-center gap-2 hover:scale-110 lg:w-24.75'
      >
        <img
          src='/assets/icon-Write-Post.svg'
          alt='Write Post'
          className='size-6'
        />
        <p className='text-primary-300 hidden text-sm font-semibold underline lg:block'>
          Write_Post
        </p>
      </Link>
      <hr className='hidden rotate-90 items-center border border-[#D5D7DA] lg:flex lg:w-5.75' />
      <button
        type='button'
        onClick={() => setOpen(true)}
        className='flex h-10 w-10 gap-3 hover:scale-110 lg:w-28.25'
      >
        <img
          src='/assets/avatar-user.svg'
          alt='User'
          className='size-10 object-cover'
        />
        <p className='hidden w-full items-center text-sm font-medium lg:flex'>
          name
        </p>
      </button>
      <ProfileMenu
        open={open}
        onClose={() => setOpen(false)}
        onLogout={onLogout}
      />
    </div>
  );
}
