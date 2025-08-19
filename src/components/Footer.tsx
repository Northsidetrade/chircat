export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="mx-auto max-w-6xl px-4 py-6 text-xs text-gray-500 flex items-center justify-between">
        <p>© {new Date().getFullYear()} Chircat Photography & Videography</p>
        <p>Based in Denmark • Available worldwide</p>
      </div>
    </footer>
  );
}
