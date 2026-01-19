import type { ProjectStatus } from '@/lib/types';

interface StatusBadgeProps {
    /** The current status of the project to render */
    status: ProjectStatus;
}

/**
 * Visual indicator for project status.
 * Renders a color-coded badge based on the status (active/archived).
 * 
 * @param props - Contains the status string.
 */
export default function StatusBadge({ status }: StatusBadgeProps) {
    const styles = {
        active:
            'bg-green-50 text-green-700 ring-green-600/20 dark:bg-green-500/10 dark:text-green-400 dark:ring-green-500/20',
        archived:
            'bg-gray-50 text-gray-600 ring-gray-500/10 dark:bg-gray-400/10 dark:text-gray-400 dark:ring-gray-400/20',
    };

    return (
        <span
            className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${styles[status]}`}
        >
            {status}
        </span>
    );
}
