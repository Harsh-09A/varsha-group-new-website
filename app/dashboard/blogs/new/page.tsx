import { BlogForm } from "@/components/BlogForm";

export default function NewBlogPage() {
  return (
    <div className="p-6 mx-5">
      <h1 className="text-xl font-semibold mb-6">New Blog</h1>
      <BlogForm />
    </div>
  );
}
