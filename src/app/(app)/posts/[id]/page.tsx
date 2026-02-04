// import Recommended from "@/components/Contents/Recommended";
// import MostLiked from "@/components/Contents/MostLiked";
import PostDetail from '@/components/Contents/PostDetail';
import CommentForm from '@/components/ui/commentForm';
import PostComments from '@/components/Contents/PostComments';

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function DetailPage({ params }: PageProps) {
  const { id } = await params;
  const postId = Number(id);

  if (Number.isNaN(id)) {
    return <p>Page Not Found</p>;
  }
  return (
    <div className='container mx-auto min-h-screen px-4 py-6'>
      <div className='flex w-[393px] flex-col items-center gap-3 p-4 py-0 lg:w-[1440px] lg:gap-4 lg:px-[320px]'>
        <PostDetail id={postId} />
        <PostComments id={postId} />
        {/* <div className='h-[2px] w-full self-center bg-[#D5D7DA] lg:h-auto lg:w-[2px] lg:self-stretch' /> */}
        {/* <MostLiked /> */}
      </div>
    </div>
  );
}
