"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

function slugify(title: string) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

export async function getBlogs() {
  return prisma.blog.findMany({ orderBy: { createdAt: "desc" } });
}

export async function getBlogById(id: string) {
  return prisma.blog.findUnique({ where: { id } });
}

export async function createBlog(formData: FormData) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const category = (formData.get("category") as string) || null;
  const coverImage = (formData.get("coverImage") as string) || null;
  const published = formData.get("published") === "on";

  await prisma.blog.create({
    data: {
      title,
      content,
      category,
      coverImage,
      published,
      slug: slugify(title),
    },
  });

  revalidatePath("/dashboard");
  redirect("/dashboard");
}

export async function updateBlog(id: string, formData: FormData) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const category = (formData.get("category") as string) || null;
  const coverImage = (formData.get("coverImage") as string) || null;
  const published = formData.get("published") === "on";

  await prisma.blog.update({
    where: { id },
    data: {
      title,
      content,
      category,
      coverImage,
      published,
      slug: slugify(title),
    },
  });

  revalidatePath("/dashboard");
  redirect("/dashboard");
}

export async function deleteBlog(id: string) {
  await prisma.blog.delete({ where: { id } });
  revalidatePath("/dashboard");
}
