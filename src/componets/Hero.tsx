export default function Hero() {
  return (
    <section className="h-[80vh] bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/hero.jpg')" }}>
      <div className="text-center bg-black/40 p-8 rounded-xl">
        <h1 className="text-5xl font-bold mb-4">Capturing Moments, Telling Stories</h1>
        <p className="text-lg">Professional Photography & Videography</p>
      </div>
    </section>
  );
}
