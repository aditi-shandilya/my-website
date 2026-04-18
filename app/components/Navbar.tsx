import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-white">
      <div className="font-semibold text-neutral-900">
        Aditi
      </div>

      <div className="flex gap-2">
        <Link href="/" className="px-3 py-1.5 rounded-md text-neutral-700 hover:bg-pink-50 hover:text-neutral-900 transition">
          Home
        </Link>
        <Link href="/about" className="px-3 py-1.5 rounded-md text-neutral-700 hover:bg-pink-50 hover:text-neutral-900 transition">
          About
        </Link>
        <Link href="/projects" className="px-3 py-1.5 rounded-md text-neutral-700 hover:bg-pink-50 hover:text-neutral-900 transition">
          Projects
        </Link>
        <Link href="/leetcode" className="px-3 py-1.5 rounded-md text-neutral-700 hover:bg-pink-50 hover:text-neutral-900 transition">
          LeetCode
        </Link>
        <Link href="/playground" className="px-3 py-1.5 rounded-md text-neutral-700 hover:bg-pink-50 hover:text-neutral-900 transition">
          Playground
        </Link>
      </div>
    </div>
  );
}