'use client';

import { useEffect } from 'react';
import Overlay from './Overlay';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AuthActions from './AuthActions';
// import { useLogout } from "@/features/auth/useLogout";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: Props) {
  const location = usePathname();
  // const logout = useLogout();
  // console.log(location.pathname);
  // Close menu on route change
  useEffect(() => {
    if (open) onClose();
  }, [location]); //close when navigate

  return (
    <>
      <Overlay show={open} onClick={onClose} />

      <section
        className={`fixed top-0 right-0 z-50 flex h-[852px] w-[393px] transform flex-col items-center gap-6 bg-white transition-transform duration-500 ease-in-out lg:right-41 ${open ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className='bg-background flex h-[64px] w-full flex-row items-center justify-between border-b border-[#D5D7DA] px-4'>
          <img
            src='/assets/logo-Your-Logo.svg'
            alt='Your Logo'
            className='flex h-[24px] w-[106px]'
          />
          <button
            type='button'
            onClick={onClose}
            className='flex size-6 cursor-pointer hover:scale-120'
          >
            <img
              src='/assets/x-close.svg'
              alt='Close'
              className='object-cover'
            />
          </button>
        </div>
        <div className='mt-9.75 flex'>
          <AuthActions />
        </div>
      </section>
    </>
  );
}
