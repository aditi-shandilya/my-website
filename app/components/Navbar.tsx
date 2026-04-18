import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex gap-6 p-4 border-b border-neutral-200 bg-white">
  <Link href="/" className="text-neutral-700 hover:text-pink-600 transition">
    Home
  </Link>
  <Link href="/about" className="text-neutral-700 hover:text-pink-600 transition">
    About
  </Link>
  <Link href="/projects" className="text-neutral-700 hover:text-pink-600 transition">
    Projects
  </Link>
  <Link href="/leetcode" className="text-neutral-700 hover:text-pink-600 transition">
    LeetCode
  </Link>
  <Link href="/playground" className="text-neutral-700 hover:text-pink-600 transition">
    Playground
  </Link>
</div>
  );
}