import type { Project } from '@/lib/types';
import Link from 'next/link';
import StatusBadge from './StatusBadge';

interface ProjectCardProps {
    /** The project data to display */
    project: Project;
    /** Current tenant context for linking to project details */
    tenantSlug: string;
}

/**
 * Server Component representing a single project in a grid or list.
 * Displays summary information including status, description, and creation date.
 * 
 * @param props - Component properties including project data and tenant context.
 */
export default function ProjectCard({ project, tenantSlug }: ProjectCardProps) {
    return (
        <Link
            href={`/${tenantSlug}/projects/${project.id}`}
            className="block rounded-lg border border-gray-200 bg-white p-6 transition-colors hover:border-gray-300 dark:border-gray-800 dark:bg-black dark:hover:border-gray-700"
        >
            <div className="flex items-start justify-between">
                <h3 className="text-lg font-medium text-black dark:text-white">
                    {project.name}
                </h3>
                <StatusBadge status={project.status} />
            </div>

            {project.description && (
                <p className="mt-2 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                    {project.description}
                </p>
            )}

            <div className="mt-4 text-xs text-gray-500 dark:text-gray-500">
                {project.createdAt.toLocaleDateString()}
            </div>
        </Link>
    );
}
