import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  image: string;
  link: string;
}

export default function ProjectCard({ title, image, link }: Props) {
  return (
    <Link href={link} className="block group">
      <div className="overflow-hidden rounded-lg shadow-md">
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform"
        />
      </div>
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
    </Link>
  );
}
