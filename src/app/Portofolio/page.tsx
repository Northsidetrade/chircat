import Image from "next/image";

type Item = { id: string; type: "image" | "video"; src: string; alt: string };
const items: Item[] = [
  { id: "city-1", type: "image", src: "/portfolio1.jpg", alt: "City Wedding" },
  { id: "city-2", type: "image", src: "/portfolio1b.jpg", alt: "City Couple" },
  { id: "reel",  type: "video", src: "/reel.mp4",        alt: "Showreel" },
  { id: "urban", type: "image", src: "/portfolio3.jpg",  alt: "Urban Portrait" },
];

export default function Portfolio() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      <h1 className="text-3xl font-bold mb-8">Portfolio</h1>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map(it => (
          <div key={it.id} className="overflow-hidden rounded-xl border">
            {it.type === "image" ? (
              <Image src={it.src} alt={it.alt} width={800} height={600} className="h-48 w-full object-cover" />
            ) : (
              <video src={it.src} className="h-48 w-full object-cover" controls preload="metadata" />
            )}
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm text-gray-500">
        Want a custom shoot? <a href="/contact" className="underline">Get in touch →</a>
      </p>
    </section>
  );
}
