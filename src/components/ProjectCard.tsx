import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({
  title,
  image,
  link,
}: {
  title: string;
  image: string;
  link: string;
}) {
  return (
    <Link href={link} className="group block">
      <div className="overflow-hidden rounded-xl shadow-sm border">
        <Image
          src={image}
          alt={title}
          width={800}
          height={600}
          className="h-56 w-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <h3 className="mt-2 font-medium">{title}</h3>
    </Link>
  );
}
