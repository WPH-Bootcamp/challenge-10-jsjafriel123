/**
 * Home Page
 *
 * TODO: Implement homepage sesuai dengan design Figma
 * - Tampilkan daftar artikel blog
 * - Implement search/filter jika diperlukan
 * - Handle loading dan error states
 */

import Recommended from '@/components/Contents/Recommended';
import MostLiked from '@/components/Contents/MostLiked';
type PageProps = {
  searchParams: Promise<{
    page?: string;
  }>;
};

export default async function Home({ searchParams }: PageProps) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;

  return (
    <div className='container mx-auto min-h-screen px-4 py-6'>
      <div className='flex w-[393px] flex-col items-center py-0 lg:h-[1730px] lg:w-[1440px] lg:flex-row lg:items-start lg:justify-evenly lg:gap-12 lg:px-28'>
        <Recommended page={currentPage} />
        <div className='h-[2px] w-full self-center bg-[#D5D7DA] lg:h-auto lg:w-[2px] lg:self-stretch' />
        <MostLiked />
      </div>
    </div>
  );
}
