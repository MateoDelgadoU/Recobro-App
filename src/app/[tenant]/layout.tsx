import type { ReactNode } from 'react';
import { tenantService } from '@/services/tenant.service';
import { notFound } from 'next/navigation';
import TenantNav from '@/components/TenantNav';

interface TenantLayoutProps {
    children: ReactNode;
    params: Promise<{ tenant: string }>;
}

export default async function TenantLayout({
    children,
    params,
}: TenantLayoutProps) {
    const { tenant: tenantSlug } = await params;

    try {
        await tenantService.validateTenant(tenantSlug);
    } catch {
        notFound();
    }

    return (
        <div className="min-h-screen bg-white dark:bg-black">
            <TenantNav tenantSlug={tenantSlug} />
            <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                {children}
            </main>
        </div>
    );
}
