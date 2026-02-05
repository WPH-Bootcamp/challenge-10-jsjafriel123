'use client';

import { useState, useEffect } from 'react';
import MobileButtons from './MobileButtons';
import AuthActions from './AuthActions';
import HeaderProfile from './HeaderProfile';

export default function HeaderButtons() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  function handleLogout() {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  }

  if (isLoggedIn) {
    return <HeaderProfile onLogout={handleLogout} />;
  }

  return (
    <>
      <div className='hidden lg:block'>
        <AuthActions />
      </div>
      <div className='block lg:hidden'>
        <MobileButtons />
      </div>
    </>
  );
}
