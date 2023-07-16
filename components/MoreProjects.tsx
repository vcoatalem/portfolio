import PostPreview from 'components/PostPreview'
import type { Project } from 'lib/sanity.queries'
import ProjectPreview from './ProjectPreview'


export default function MoreProjects({ projects }: { projects: Project[] }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl font-bold leading-tight tracking-tighter md:text-7xl">
        More Projects
      </h2>
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
  )
}
