import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

interface TenantNavProps {
    /** The unique identifier (slug) of the current tenant to build correct URLs */
    tenantSlug: string;
}

/**
 * Navigation bar for tenant-specific pages.
 * Appears at the top of the dashboard and project pages.
 * Includes links to main sections and the global theme toggle.
 * 
 * @param props - Contains the tenant slug for routing.
 */
export default function TenantNav({ tenantSlug }: TenantNavProps) {
    return (
        <nav className="border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-black">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center space-x-8">
                        <Link
                            href={`/${tenantSlug}/dashboard`}
                            className="text-sm font-medium text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
                        >
                            Dashboard
                        </Link>
                        <Link
                            href={`/${tenantSlug}/projects`}
                            className="text-sm font-medium text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
                        >
                            Projects
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </nav>
    );
}
