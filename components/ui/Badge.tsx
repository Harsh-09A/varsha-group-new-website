export function Badge({ published }: { published: boolean }) {
  return (
    <span
      className={`px-2 py-0.5 rounded-full text-xs font-medium ${
        published ? "bg-green-100 text-green-700" : "bg-neutral-100 text-neutral-600"
      }`}
    >
      {published ? "Published" : "Draft"}
    </span>
  );
}