import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';

export default function HomePage() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white dark:bg-black">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Radial gradient for focus */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_200px,#fbfbfb,transparent)] dark:bg-[radial-gradient(circle_800px_at_50%_200px,#111,transparent)]"></div>

      <div className="absolute top-8 right-8 z-10">
        <ThemeToggle />
      </div>

      <main className="relative z-10 w-full max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-8 inline-flex items-center rounded-full border border-gray-200 bg-white/50 px-3 py-1 text-xs font-medium text-gray-600 backdrop-blur-sm dark:border-gray-800 dark:bg-black/50 dark:text-gray-400">
            <span>Production Ready Multi-tenant Architecture</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl dark:text-white">
            Recobro Platform
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            A modern, scalable multi-tenant environment designed for enterprise project management.
            Experience true data isolation and clean architecture.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl">
          <div className="grid gap-6 sm:grid-cols-2">
            <Link
              href="/acme/dashboard"
              className="group relative flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:border-black/10 hover:shadow-lg dark:border-gray-800 dark:bg-black dark:hover:border-white/10 dark:hover:shadow-white/5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50 text-xl font-bold text-gray-900 group-hover:bg-black group-hover:text-white transition-colors dark:bg-gray-900 dark:text-white dark:group-hover:bg-white dark:group-hover:text-black">
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
              className="group relative flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:border-black/10 hover:shadow-lg dark:border-gray-800 dark:bg-black dark:hover:border-white/10 dark:hover:shadow-white/5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50 text-xl font-bold text-gray-900 group-hover:bg-black group-hover:text-white transition-colors dark:bg-gray-900 dark:text-white dark:group-hover:bg-white dark:group-hover:text-black">
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

          <div className="mt-12 text-center">
            <p className="text-xs text-gray-500 dark:text-gray-500">
              Technical Assessment • Built with Next.js 16 • TailwindCSS v4
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
