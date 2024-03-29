import ProjectPreview from './ProjectPreview'
import type { Project } from 'lib/sanity.queries'

export default function ProjectGallery({ projects }: { projects: Project[] }) {
  return (
    <section>
      <div className="mb-32 grid grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-16 md:gap-y-32 lg:gap-x-32">
        {projects.map((project) => (
          <ProjectPreview
            key={project._id}
            title={project.title}
            coverImage={project.coverImage}
            content={project.content}
            excerpt={project.excerpt}
            authors={project.authors}
            tags={project.tags}
            technos={project.technos}
            gitUrl={project.gitUrl}
            productionUrl={project.productionUrl}
            slug={`/projects/${project.slug}`}
          />
        ))}
      </div>
    </section>
  ) //TODO: make 'intro' a proper props of projects in sanity (similar to excerpt for posts)
}
