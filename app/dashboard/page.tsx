import "./dashboard.css";
import Link from "next/link";
import { getBlogs, deleteBlog } from "@/services/blogs";
import { Table, Th, Td } from "@/components/ui/Table";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export default async function DashboardPage() {
  const blogs = await getBlogs();

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold">Blogs</h1>
        <Link href="/dashboard/blogs/new">
          <Button>+ New Blog</Button>
        </Link>
      </div>

      <Table>
        <thead>
          <tr>
            <Th>Title</Th>
            <Th>Category</Th>
            <Th>Status</Th>
            <Th>Created</Th>
            <Th>{""}</Th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => (
            <tr key={blog.id}>
              <Td>{blog.title}</Td>
              <Td>{blog.category ?? "—"}</Td>
              <Td>
                <Badge published={blog.published} />
              </Td>
              <Td>{new Date(blog.createdAt).toLocaleDateString()}</Td>
              <Td>
                <div className="flex gap-2">
                  <Link href={`/dashboard/blogs/${blog.id}/edit`}>
                    <Button variant="secondary">Edit</Button>
                  </Link>
                  <form action={deleteBlog.bind(null, blog.id)}>
                    <Button variant="danger" type="submit">
                      Delete
                    </Button>
                  </form>
                </div>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
