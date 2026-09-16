"use server";
import prisma from "@/lib/prisma";

const PAGE_SIZE = 15;

export async function getAllBlogs(page: number = 1) {
  const currentPage = page > 0 ? page : 1;

  const [blogs, totalCount] = await Promise.all([
    prisma.blog.findMany({
      where: { published: true },
      orderBy: { createdAt: "desc" },
      skip: (currentPage - 1) * PAGE_SIZE,
      take: PAGE_SIZE,
    }),
    prisma.blog.count({ where: { published: true } }),
  ]);

  return {
    blogs,
    totalCount,
    totalPages: Math.ceil(totalCount / PAGE_SIZE),
    currentPage,
  };
}

export async function getHomeBlogs(count:number =6) {
  return prisma.blog.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
    take: count,
  });
}

export async function getBlogBySlug(slug: string) {
  return prisma.blog.findFirst({
    where: { slug, published: true },
  });
}