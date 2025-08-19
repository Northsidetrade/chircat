import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">Featured Work</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            title="City Wedding"
            image="/portfolio1.jpg"
            link="/portfolio"
          />
          <ProjectCard
            title="Nature Documentary"
            image="/portfolio2.jpg"
            link="/portfolio"
          />
          <ProjectCard
            title="Urban Portraits"
            image="/portfolio3.jpg"
            link="/portfolio"
          />
        </div>
      </section>
    </>
  );
}
