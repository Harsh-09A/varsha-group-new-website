"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createBlog, updateBlog } from "@/services/blogs";
import { getUploadUrl } from "@/services/upload";
import { getImageUrl } from "@/lib/image-url";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { BlogEditor } from "./ui/BlogEditor";

interface BlogFormProps {
  blog?: {
    id: string;
    title: string;
    content: string;
    category: string | null;
    coverImage: string | null;
    published: boolean;
  };
}

export function BlogForm({ blog }: BlogFormProps) {
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(
    blog?.coverImage ? getImageUrl(blog.coverImage) : null,
  );
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const [content, setContent] = useState(blog?.content ?? "");

  // File select pe sirf local preview — R2 upload yahan nahi hoga
  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const selected = e.target.files?.[0];
    if (!selected) return;
    setFile(selected);
    setPreview(URL.createObjectURL(selected));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const formData = new FormData(e.currentTarget);
      formData.delete("imageFile");

      // Upload sirf yahan hota hai — form submit ke waqt
      if (file) {
        const { uploadUrl, key } = await getUploadUrl(file.name, file.type);
        const res = await fetch(uploadUrl, {
          method: "PUT",
          body: file,
          headers: { "Content-Type": file.type },
        });
        if (!res.ok) throw new Error("Upload failed");
        formData.set("coverImage", key);
      } else if (blog?.coverImage) {
        formData.set("coverImage", blog.coverImage); // edit mein purani image retain
      }

      if (blog) {
        await updateBlog(blog.id, formData);
      } else {
        await createBlog(formData);
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Input label="Title" name="title" defaultValue={blog?.title} required />

      <Input
        label="Category"
        name="category"
        defaultValue={blog?.category ?? ""}
        placeholder="e.g. Tech, Lifestyle"
      />

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-neutral-700">
          Featured Image
        </label>
        {preview && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={preview}
            alt="Cover preview"
            className="w-40 h-24 object-cover rounded-md border border-neutral-200"
          />
        )}
        <input
          type="file"
          name="imageFile"
          accept="image/*"
          onChange={handleFileChange}
          className="text-sm"
        />
        <p className="text-xs text-neutral-400">
          Image uploads only when you save the blog.
        </p>
      </div>

      {/* <Textarea
        label="Content"
        name="content"
        rows={12}
        defaultValue={blog?.content}
        required
      /> */}

      <BlogEditor content={content} onChange={setContent} />
      <input type="hidden" name="content" value={content} />

      <label className="flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          name="published"
          defaultChecked={blog?.published}
        />{" "}
        Publish immediately
      </label>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <div className="flex gap-2">
        <Button type="submit" disabled={submitting}>
          {submitting ? "Saving..." : blog ? "Update Blog" : "Create Blog"}
        </Button>
        <Button
          type="button"
          variant="secondary"
          onClick={() => router.push("/dashboard")}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}
