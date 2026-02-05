import SearchResults from '@/components/Contents/SearchResults';
import FormSearch from '@/components/ui/formSearch';

type Props = {
  searchParams: Promise<{
    query?: string;
    page?: string;
  }>;
};

export default async function SearchPage({ searchParams }: Props) {
  const { query = '', page = '' } = await searchParams;
  const isSearch: boolean = page === '0';

  console.log('page=', page);
  console.log(isSearch);

  // if (!query && !isSearch) {
  //   return (
  //     <em className='text-primary-300 lg:text-md text-sm'>
  //       Start typing to search
  //     </em>
  //   );
  // }

  const currentPage = Number(page) || 1;
  return (
    <>
      <div className='my-4 flex w-full justify-center lg:hidden'>
        <FormSearch isSearch={isSearch} />
      </div>
      <SearchResults query={query} page={currentPage} isSearch={isSearch} />
    </>
  );
}
