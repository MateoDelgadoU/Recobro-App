import { tenantService } from '@/lib/services/tenant.service';
import { projectService } from '@/lib/services/project.service';
import Link from 'next/link';

interface DashboardPageProps {
    params: Promise<{ tenant: string }>;
}

export default async function DashboardPage({ params }: DashboardPageProps) {
    const { tenant: tenantSlug } = await params;

    const tenant = await tenantService.validateTenant(tenantSlug);
    const projects = await projectService.getProjectsForTenant(tenantSlug);

    const activeCount = projects.filter((p) => p.status === 'active').length;
    const archivedCount = projects.filter((p) => p.status === 'archived').length;

    // Sort projects by createdAt descending to show "Recent Activity"
    const recentProjects = [...projects]
        .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
        .slice(0, 3);

    return (
        <div className="space-y-12">
            <div className="flex flex-col gap-2">
                <div className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500">
                    <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    <span>Operational</span>
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white">
                    {tenant.name}
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                    Welcome back. Here is your organization overview.
                </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
                {/* Total Projects Card */}
                <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:border-black/10 hover:shadow-lg dark:border-gray-800 dark:bg-black dark:hover:border-white/10 dark:hover:shadow-white/5">
                    <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-gray-50 blur-xl transition-all group-hover:bg-gray-100 dark:bg-zinc-900 dark:group-hover:bg-zinc-800"></div>
                    <div className="relative">
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-500">Total Projects</p>
                        <p className="mt-2 font-mono text-5xl font-semibold tracking-tighter text-black dark:text-white">
                            {projects.length}
                        </p>
                        <div className="mt-4 flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                                <path fillRule="evenodd" d="M2 3.75A.75.75 0 012.75 3h14.5a.75.75 0 01.75.75v11.5a.75.75 0 01-.75.75H2.75A.75.75 0 012 15.25V3.75zM17 12h-2.25a.75.75 0 01-.75-.75V8h3v4zm-3.75-5.25a.75.75 0 00-.75.75v5.75H8.25V7.5a.75.75 0 00-.75-.75H3.5v9h13v-1.5h-2.25a.75.75 0 01-.75-.75V6.75z" clipRule="evenodd" />
                            </svg>
                            All time projects
                        </div>
                    </div>
                </div>

                {/* Active Projects Card */}
                <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:border-black/10 hover:shadow-lg dark:border-gray-800 dark:bg-black dark:hover:border-white/10 dark:hover:shadow-white/5">
                    <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-green-50 blur-xl transition-all group-hover:bg-green-100 dark:bg-green-900/20 dark:group-hover:bg-green-900/30"></div>
                    <div className="relative">
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-500">Active</p>
                        <p className="mt-2 font-mono text-5xl font-semibold tracking-tighter text-black dark:text-white">
                            {activeCount}
                        </p>
                        <div className="mt-4 flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                            <span className="flex h-1.5 w-1.5 rounded-full bg-green-500"></span>
                            Currently in progress
                        </div>
                    </div>
                </div>

                {/* Archived Projects Card */}
                <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:border-black/10 hover:shadow-lg dark:border-gray-800 dark:bg-black dark:hover:border-white/10 dark:hover:shadow-white/5">
                    <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-gray-50 blur-xl transition-all group-hover:bg-gray-100 dark:bg-zinc-900 dark:group-hover:bg-zinc-800"></div>
                    <div className="relative">
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-500">Archived</p>
                        <p className="mt-2 font-mono text-5xl font-semibold tracking-tighter text-black dark:text-white">
                            {archivedCount}
                        </p>
                        <div className="mt-4 flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                                <path d="M10 2a.75.75 0 01.75.75v12.59l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V2.75A.75.75 0 0110 2z" />
                            </svg>
                            Completed or paused
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent Activity Section */}
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-black dark:text-white">Recent Projects</h2>
                    <Link
                        href={`/${tenantSlug}/projects`}
                        className="text-sm font-medium text-gray-500 hover:text-black dark:hover:text-white transition-colors"
                    >
                        View all →
                    </Link>
                </div>

                <div className="divide-y divide-gray-100 rounded-2xl border border-gray-200 bg-white dark:divide-gray-800 dark:border-gray-800 dark:bg-black">
                    {recentProjects.length > 0 ? (
                        recentProjects.map((project) => (
                            <div key={project.id} className="flex items-center justify-between p-6 transition-colors hover:bg-gray-50 dark:hover:bg-zinc-900/50">
                                <div className="flex flex-col gap-1">
                                    <span className="font-medium text-black dark:text-white">{project.name}</span>
                                    <span className="text-xs text-gray-500">ID: {project.id} • Created {project.createdAt.toLocaleDateString()}</span>
                                </div>
                                <div className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${project.status === 'active'
                                        ? 'bg-green-50 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800'
                                        : 'bg-gray-50 text-gray-600 border-gray-200 dark:bg-zinc-800 dark:text-gray-400 dark:border-zinc-700'
                                    }`}>
                                    {project.status}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="p-12 text-center text-gray-500">
                            No recent activity found.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
