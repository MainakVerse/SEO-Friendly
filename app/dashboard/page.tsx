"use client";

import { SessionProvider, useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

function DashboardContent() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") return <p>Loading...</p>;
  if (!session) {
    router.push("/"); // redirect if not logged in
    return null;
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-3xl font-bold">Welcome, {session.user?.name}</h1>
      <p>Email: {session.user?.email}</p>
      <img
        src={session.user?.image ?? ""}
        alt="User Avatar"
        className="rounded-full w-24 h-24"
      />
      <button
        onClick={() => signOut({ callbackUrl: "/" })}
        className="px-6 py-3 bg-red-500 text-white rounded-md"
      >
        Sign Out
      </button>
    </main>
  );
}

export default function DashboardPageWrapper() {
  return (
    <SessionProvider>
      <DashboardContent />
    </SessionProvider>
  );
}
