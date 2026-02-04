/**
 * Home Page
 *
 * TODO: Implement homepage sesuai dengan design Figma
 * - Tampilkan daftar artikel blog
 * - Implement search/filter jika diperlukan
 * - Handle loading dan error states
 */

import Recommended from "@/components/Contents/Recommended";
import MostLiked from "@/components/Contents/MostLiked";
type PageProps = {
  searchParams: Promise<{
    page?: string;
  }>;
};

export default async function Home({ searchParams }: PageProps) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;

  return (
    <div className="container min-h-screen mx-auto px-4 py-6">
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-evenly w-[393px] lg:w-[1440px] lg:h-[1730px] lg:px-28 py-0 lg:gap-12">
        <Recommended page={currentPage} />
        <div className="w-full h-[2px] lg:w-[2px] lg:h-auto lg:self-stretch bg-[#D5D7DA] self-center" />
        <MostLiked />
      </div>
    </div>
  );
}
