import type { Tenant } from '../types';
import { tenants } from '../data/mock-data';

/**
 * Repository class for accessing Tenant data.
 * Abstracts the underlying data source (currently mock data) from the business logic.
 */
export class TenantRepository {
    /**
     * Retrieves a tenant by their URL slug.
     * @param slug - The unique URL identifier for the tenant (e.g., 'acme').
     * @returns A promise resolving to the Tenant object if found, or null otherwise.
     */
    async getTenantBySlug(slug: string): Promise<Tenant | null> {
        const tenant = tenants.find((t) => t.slug === slug);
        return tenant || null;
    }

    /**
     * Retrieves a tenant by their unique internal ID.
     * @param id - The UUID of the tenant.
     * @returns A promise resolving to the Tenant object if found, or null otherwise.
     */
    async getTenantById(id: string): Promise<Tenant | null> {
        const tenant = tenants.find((t) => t.id === id);
        return tenant || null;
    }
}

export const tenantRepository = new TenantRepository();
