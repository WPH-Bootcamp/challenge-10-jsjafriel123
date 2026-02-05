import PostDetail from '@/components/Contents/PostDetail';
import PostComments from '@/components/Contents/PostComments';
import PostByUser from '@/components/Contents/PostByUser';
import { getPostById } from '@/lib/posts';

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function DetailPage({ params }: PageProps) {
  const { id } = await params;

  if (Number.isNaN(id)) {
    return (
      <em className='text-primary-300 lg:text-md text-sm'>Page Not Found</em>
    );
  }
  const postId = Number(id);
  const post = await getPostById(postId);

  return (
    <div className='container mx-auto min-h-screen px-4 py-6'>
      <div className='flex w-[393px] flex-col items-center gap-3 p-4 py-0 lg:w-[1440px] lg:gap-4 lg:px-[320px]'>
        <PostDetail post={post} />
        <PostComments id={post.id} />
        <PostByUser postId={post.id} authorId={post.author.id} />
      </div>
    </div>
  );
}
