import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';

export default function HomePage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-white dark:bg-black">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Radial gradient for focus */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_200px,#fbfbfb,transparent)] dark:bg-[radial-gradient(circle_800px_at_50%_200px,#111,transparent)]"></div>

      <div className="absolute top-6 right-6 z-50 sm:top-8 sm:right-8">
        <ThemeToggle />
      </div>

      {/* Main Container - Mobile First: Padding top instead of center alignment to prevent cut-off */}
      <main className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col justify-start px-4 pt-24 pb-12 sm:justify-center sm:px-6 sm:pt-0 sm:pb-0">

        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full border border-gray-200 bg-white/50 px-2.5 py-1 text-[10px] font-medium text-gray-600 backdrop-blur-sm sm:mb-8 sm:px-3 sm:text-xs dark:border-gray-800 dark:bg-black/50 dark:text-gray-400">
            <span>Production Ready Multi-tenant Architecture</span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl dark:text-white">
            Recobro Platform
          </h1>

          <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-gray-600 sm:mt-6 sm:max-w-none sm:text-lg sm:leading-8 dark:text-gray-400">
            A modern, scalable multi-tenant environment designed for enterprise project management.
            Experience true data isolation and clean architecture.
          </p>
        </div>

        <div className="mx-auto mt-10 w-full max-w-lg sm:mt-16 sm:max-w-2xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
            <Link
              href="/acme/dashboard"
              className="group relative flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-5 transition-all hover:border-black/10 hover:shadow-lg active:scale-[0.98] sm:rounded-2xl sm:p-6 dark:border-gray-800 dark:bg-black dark:hover:border-white/10 dark:hover:shadow-white/5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50 text-lg font-bold text-gray-900 transition-colors group-hover:bg-black group-hover:text-white dark:bg-gray-900 dark:text-white dark:group-hover:bg-white dark:group-hover:text-black">
                A
              </div>
              <div>
                <h3 className="text-base font-semibold leading-7 text-black dark:text-white">
                  Acme Corporation
                </h3>
                <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  Enterprise organization environment
                </p>
              </div>
              <div className="mt-auto flex items-center text-sm font-medium text-gray-600 group-hover:text-black dark:text-gray-400 dark:group-hover:text-white">
                Access Dashboard <span aria-hidden="true" className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </div>
            </Link>

            <Link
              href="/umbrella/dashboard"
              className="group relative flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-5 transition-all hover:border-black/10 hover:shadow-lg active:scale-[0.98] sm:rounded-2xl sm:p-6 dark:border-gray-800 dark:bg-black dark:hover:border-white/10 dark:hover:shadow-white/5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50 text-lg font-bold text-gray-900 transition-colors group-hover:bg-black group-hover:text-white dark:bg-gray-900 dark:text-white dark:group-hover:bg-white dark:group-hover:text-black">
                U
              </div>
              <div>
                <h3 className="text-base font-semibold leading-7 text-black dark:text-white">
                  Umbrella Industries
                </h3>
                <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  Research division portal
                </p>
              </div>
              <div className="mt-auto flex items-center text-sm font-medium text-gray-600 group-hover:text-black dark:text-gray-400 dark:group-hover:text-white">
                Access Dashboard <span aria-hidden="true" className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </div>
            </Link>
          </div>

          <div className="mt-8 text-center sm:mt-12">
            <p className="text-[10px] text-gray-500 sm:text-xs dark:text-gray-500">
              Technical Assessment • Built with Next.js 16 • TailwindCSS v4
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
