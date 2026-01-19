import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white dark:bg-black">
      <div className="max-w-2xl px-4 text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-white">
          Recobro
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Multi-tenant Project Management Platform
        </p>

        <div className="mt-8 space-y-3">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Available Organizations:
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/acme/dashboard"
              className="rounded-lg border border-gray-200 bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:border-gray-300 dark:border-gray-800 dark:bg-black dark:text-white dark:hover:border-gray-700"
            >
              Acme Corporation
            </Link>
            <Link
              href="/umbrella/dashboard"
              className="rounded-lg border border-gray-200 bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:border-gray-300 dark:border-gray-800 dark:bg-black dark:text-white dark:hover:border-gray-700"
            >
              Umbrella Industries
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
