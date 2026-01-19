import { tenantService } from '@/lib/services/tenant.service';
import { projectService } from '@/lib/services/project.service';

interface DashboardPageProps {
    params: Promise<{ tenant: string }>;
}

export default async function DashboardPage({ params }: DashboardPageProps) {
    const { tenant: tenantSlug } = await params;

    const tenant = await tenantService.validateTenant(tenantSlug);
    const projects = await projectService.getProjectsForTenant(tenantSlug);

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-white">
                    {tenant.name}
                </h1>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Organization Dashboard
                </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-black">
                    <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        Total Projects
                    </div>
                    <div className="mt-2 text-4xl font-semibold text-black dark:text-white">
                        {projects.length}
                    </div>
                </div>

                <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-black">
                    <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        Active Projects
                    </div>
                    <div className="mt-2 text-4xl font-semibold text-black dark:text-white">
                        {projects.filter((p) => p.status === 'active').length}
                    </div>
                </div>

                <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-black">
                    <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        Archived Projects
                    </div>
                    <div className="mt-2 text-4xl font-semibold text-black dark:text-white">
                        {projects.filter((p) => p.status === 'archived').length}
                    </div>
                </div>
            </div>
        </div>
    );
}
