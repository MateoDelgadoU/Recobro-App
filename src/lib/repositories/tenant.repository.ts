import type { Tenant } from '../types';
import { tenants } from '../data/mock-data';

export class TenantRepository {
    async getTenantBySlug(slug: string): Promise<Tenant | null> {
        const tenant = tenants.find((t) => t.slug === slug);
        return tenant || null;
    }

    async getTenantById(id: string): Promise<Tenant | null> {
        const tenant = tenants.find((t) => t.id === id);
        return tenant || null;
    }
}

export const tenantRepository = new TenantRepository();
