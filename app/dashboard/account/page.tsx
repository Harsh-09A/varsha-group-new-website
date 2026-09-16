"use client";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "@/lib/auth-client";
import { Button } from "@/components/ui/Button";

export default function AccountPage() {
  const router = useRouter();
  const { data: session } = useSession();

  async function handleLogout() {
    await signOut();
    router.push("/login");
    router.refresh();
  }

  return (
    <div className="p-6 max-w-md">
      <h1 className="text-xl font-semibold mb-4">Account</h1>
      <p className="text-sm text-neutral-500 mb-4">
        Logged in as: {session?.user?.email ?? "..."}
      </p>
      <Button variant="danger" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
}
