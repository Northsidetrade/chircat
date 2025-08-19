export default function Hero() {
  return (
    <section
      className="h-[70vh] sm:h-[80vh] bg-cover bg-center flex items-center"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="bg-black/50 text-white w-fit px-6 py-5 rounded-xl">
          <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
            Capturing Moments. Crafting Stories.
          </h1>
          <p className="mt-3 text-sm sm:text-base opacity-90">
            Photography • Videography • Editing
          </p>
        </div>
      </div>
    </section>
  );
}
