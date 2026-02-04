import { searchPosts } from '@/lib/posts';
import Pagination from '@/components/Pagination/Pagination';
import Link from 'next/link';
import { Fragment } from 'react';
import PostCard from '../ui/postCard';

type Props = {
  query: string;
  page: number;
};

export default async function SearchResults({ query, page }: Props) {
  const res = await searchPosts(query, page);
  //   console.log(res);
  if (res.data.length === 0) {
    return (
      <section className='flex h-[calc(100vh-124px)] w-full lg:h-[calc(100vh-160px)]'>
        <div className='justify-evently mt-65.25 flex h-71.75 w-93 flex-col items-center gap-6 lg:mt-87'>
          <img
            src='/assets/logo-No-Result.svg'
            alt='No Result'
            className='lg:h-[135px] lg:w-[118.12px]'
          />
          <h2 className='text-sm font-semibold text-neutral-950'>
            No results found
          </h2>
          <p className='text-sm text-neutral-950'>
            Try using different keywords
          </p>
          <Link
            href='/'
            className='text-neutral-25 flex h-11 w-50 cursor-pointer items-center justify-center gap-2 rounded-full bg-[#0093DD] p-2 text-sm font-semibold hover:scale-110'
          >
            Back to Home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className='flex h-[calc(100vh-124px)] w-[393px] justify-center px-4 lg:h-[calc(100vh-160px)] lg:w-[1440px] lg:justify-start lg:px-30'>
      <div className='flex h-full w-[361px] flex-col items-center gap-4 py-4 lg:max-h-[1730px] lg:w-[807px] lg:gap-6'>
        <div className='hidden w-full lg:block lg:h-[38px]'>
          <h1 className='w-full text-[20px]/[34px] font-bold lg:text-[28px]/[38px]'>
            Results for "{query}"
          </h1>
        </div>
        <div className='h-full w-full overflow-y-auto'>
          {res.data.map((post) => (
            <Fragment key={post.id}>
              <Link href={`/posts/${post.id}`}>
                <PostCard post={post} />
              </Link>
            </Fragment>
          ))}
        </div>
        <hr className='w-full border border-[#D5D7DA]' />
        <Pagination
          currentPage={page}
          totalPages={res.lastPage}
          epoint='search'
        />
      </div>
    </section>
  );
}
