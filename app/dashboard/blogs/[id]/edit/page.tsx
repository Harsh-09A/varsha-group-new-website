import { notFound } from "next/navigation";
import { getBlogById } from "@/services/blogs";
import { BlogForm } from "@/components/BlogForm";

export default async function EditBlogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const blog = await getBlogById(id);

  if (!blog) notFound();

  return (
    <div className="p-6 mx-5">
      <h1 className="text-xl font-semibold mb-6">Edit Blog</h1>
      <BlogForm blog={blog} />
    </div>
  );
}
