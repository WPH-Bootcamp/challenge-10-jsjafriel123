'use client';

import { useState, useEffect } from 'react';
import { Input } from '../ui/input';
import { useRouter, useSearchParams } from 'next/navigation';

const FormSearch = ({ isSearch }: { isSearch: boolean }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [value, setValue] = useState('');

  useEffect(() => {
    if (isSearch) setValue('');
    console.log('Condition: ', isSearch && !value);
    console.log('isSearch: ', isSearch);
    console.log('Value: ', value);
  }, [isSearch]);

  return (
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
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className='w-[361px] rounded-xl lg:h-[48px] lg:w-[373px] lg:rounded-2xl lg:px-2 lg:pl-10'
      />
      <button
        type='submit'
        className='absolute hidden size-6 hover:scale-105 lg:top-3 lg:left-2 lg:block'
      >
        <img
          src='/assets/icon-Search.svg'
          alt='Search'
          className='object-cover'
        />
      </button>
    </form>
  );
};

export default FormSearch;
