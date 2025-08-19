"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md bg-white sticky top-0 z-50">
      <Link href="/" className="text-2xl font-bold">Chircat</Link>
      <div className="space-x-6">
        <Link href="/portfolio" className="hover:underline">Portfolio</Link>
        <Link href="/about" className="hover:underline">About</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
      </div>
    </nav>
  );
}
