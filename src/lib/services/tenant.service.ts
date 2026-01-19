import type { Tenant } from '../types';
import { tenantRepository } from '../repositories/tenant.repository';

/**
 * Service layer for Tenant-related operations.
 * Handles business logic validation and orchestration for tenants.
 */
export class TenantService {
    /**
     * Validates that a tenant exists for the given slug.
     * This method is critical for tenant isolation, acting as a gatekeeper for routing.
     * 
     * @param slug - The tenant slug from the URL.
     * @returns A promise resolving to the Tenant object.
     * @throws {Error} If the tenant is not found (should be handled by 404 boundary).
     */
    async validateTenant(slug: string): Promise<Tenant> {
        const tenant = await tenantRepository.getTenantBySlug(slug);

        if (!tenant) {
            throw new Error(`Tenant not found: ${slug}`);
        }

        return tenant;
    }
}

export const tenantService = new TenantService();
