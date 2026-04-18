import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex gap-6 p-4 border-b border-neutral-200 bg-white">
  <Link href="/" className="px-3 py-1.5 rounded-md text-neutral-700 hover:text-pink-600 hover:bg-pink-50 transition">
    Home
  </Link>
  <Link href="/about" className="px-3 py-1.5 rounded-md text-neutral-700 hover:text-pink-600 hover:bg-pink-50 transition">
    About
  </Link>
  <Link href="/projects" className="px-3 py-1.5 rounded-md text-neutral-700 hover:text-pink-600 hover:bg-pink-50 transition">
    Projects
  </Link>
  <Link href="/leetcode" className="px-3 py-1.5 rounded-md text-neutral-700 hover:text-pink-600 hover:bg-pink-50 transition">
    LeetCode
  </Link>
  <Link href="/playground" className="px-3 py-1.5 rounded-md text-neutral-700 hover:text-pink-600 hover:bg-pink-50 transition">
    Playground
  </Link>
</div>
  );
}

