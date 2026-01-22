import { projectService } from '@/services/project.service';
import { notFound } from 'next/navigation';
import StatusBadge from '@/components/StatusBadge';
import Link from 'next/link';

interface ProjectDetailPageProps {
    params: Promise<{ tenant: string; id: string }>;
}

export default async function ProjectDetailPage({
    params,
}: ProjectDetailPageProps) {
    const { tenant: tenantSlug, id: projectId } = await params;

    let project;
    try {
        project = await projectService.getProjectDetails(projectId, tenantSlug);
    } catch {
        notFound();
    }

    return (
        <div className="space-y-8">
            <div>
                <Link
                    href={`/${tenantSlug}/projects`}
                    className="text-sm text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
                >
                    ← Back to Projects
                </Link>
            </div>

            <div className="space-y-6">
                <div className="flex items-start justify-between">
                    <div>
                        <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-white">
                            {project.name}
                        </h1>
                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                            ID: {project.id}
                        </p>
                    </div>
                    <StatusBadge status={project.status} />
                </div>

                <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-black">
                    <dl className="space-y-4">
                        <div>
                            <dt className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                Description
                            </dt>
                            <dd className="mt-1 text-base text-black dark:text-white">
                                {project.description || 'No description available'}
                            </dd>
                        </div>

                        <div>
                            <dt className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                Created
                            </dt>
                            <dd className="mt-1 text-base text-black dark:text-white">
                                {project.createdAt.toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })}
                            </dd>
                        </div>

                        <div>
                            <dt className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                Status
                            </dt>
                            <dd className="mt-1 text-base capitalize text-black dark:text-white">
                                {project.status}
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    );
}
