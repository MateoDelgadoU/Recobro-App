import { projectService } from '@/lib/services/project.service';
import ProjectCard from '@/components/ProjectCard';

interface ProjectsPageProps {
    params: Promise<{ tenant: string }>;
}

export default async function ProjectsPage({ params }: ProjectsPageProps) {
    const { tenant: tenantSlug } = await params;
    const projects = await projectService.getProjectsForTenant(tenantSlug);

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-white">
                    Projects
                </h1>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Manage and view all your projects
                </p>
            </div>

            {projects.length === 0 ? (
                <div className="rounded-lg border border-gray-200 bg-white p-12 text-center dark:border-gray-800 dark:bg-black">
                    <p className="text-gray-600 dark:text-gray-400">
                        No projects found
                    </p>
                </div>
            ) : (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            tenantSlug={tenantSlug}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
