import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-center pt-6">

  <div className="flex gap-2 rounded-full border border-neutral-200 bg-white px-3 py-2 shadow-sm">
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

