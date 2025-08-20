// src/components/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[70vh] sm:h-[80vh]">
      {/* The image fills the section and is cropped, anchored to the TOP */}
      <Image
        src="/hero.jpg"
        alt="Hero"
        fill
        priority
        className="object-cover object-top"  // <— top focus
      />

      {/* Overlay content */}
      <div className="absolute inset-0 flex items-center">
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
      </div>
    </section>
  );
}
