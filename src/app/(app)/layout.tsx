import Header from '@/components/HeaderFooter/Header';
import Footer from '@/components/HeaderFooter/Footer';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className='pt-15 lg:pt-20'>{children}</main>
      <Footer />
    </>
  );
}
