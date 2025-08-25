import Link from 'next/link';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">ハロー kazuma！</h1>
      <Link href="/dashboard" className="text-xl text-blue-500 hover:underline">
        ダッシュボードへ
      </Link>
    </main>
  );
}