import Link from 'next/link';

interface TenantNavProps {
    tenantSlug: string;
}

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
                </div>
            </div>
        </nav>
    );
}
