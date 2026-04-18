import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex gap-6 p-4 border-b">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/leetcode">LeetCode</Link>
      <Link href="/playground">Playground</Link>
    </div>
  );
}