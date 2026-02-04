import SearchResults from '@/components/Contents/SearchResults';

type Props = {
  searchParams: Promise<{
    query?: string;
    page?: string;
  }>;
};

export default async function SearchPage({ searchParams }: Props) {
  const { query = '', page = '1' } = await searchParams;

  const currentPage = Number(page) || 1;

  if (!query) {
    return (
      <em className='text-primary-300 lg:text-md text-sm'>
        Start typing to search
      </em>
    );
  }

  return <SearchResults query={query} page={currentPage} />;
}
