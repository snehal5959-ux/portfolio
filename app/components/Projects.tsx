import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <article key={project.id} className="border border-slate-700 bg-slate-900/50 p-5">
          <h3 className="text-lg font-semibold text-white">{project.title}</h3>
          <p className="mt-2 text-sm text-slate-300">{project.description}</p>
          {project.github && (
            <a href={project.github} className="mt-4 inline-block text-sm text-cyan-300" target="_blank" rel="noopener noreferrer">
              View GitHub repository ↗
            </a>
          )}
        </article>
      ))}
    </div>
  );
}
