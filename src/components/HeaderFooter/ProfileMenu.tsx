'use client';

import { useEffect } from 'react';
import Overlay from './Overlay';
import { usePathname } from 'next/navigation';

type Props = {
  open: boolean;
  onClose: () => void;
  onLogout: () => void;
};

export default function ProfileMenu({ open, onClose, onLogout }: Props) {
  const location = usePathname();

  useEffect(() => {
    if (open) onClose();
  }, [location]); //close when navigate ... later

  return (
    <>
      <Overlay show={open} onClick={onClose} />

      <section
        className={`bg-background fixed top-15.25 left-50.25 z-50 flex h-20 w-45.5 transform flex-col rounded-md border border-neutral-300 transition-transform duration-500 ease-in-out lg:top-19 lg:left-295.75 lg:h-22 ${open ? 'translate-y-0' : '-translate-y-42'}`}
      >
        <button className='flex h-10 w-full cursor-pointer items-center gap-2 px-4 py-2 lg:h-11'>
          <img
            src='/assets/icon-User.svg'
            alt='Profile'
            className='size-4 lg:size-5'
          />
          <p className='text-xs text-neutral-950 lg:text-sm'>Profile</p>
        </button>
        <button
          onClick={() => {
            onLogout();
          }}
          className='flex h-10 w-full cursor-pointer items-center gap-2 px-4 py-2 lg:h-11'
        >
          <img
            src='/assets/icon-Logout.svg'
            alt='Logout'
            className='size-4 lg:size-5'
          />
          <p className='text-xs text-neutral-950 lg:text-sm'>Logout</p>
        </button>
      </section>
    </>
  );
}
