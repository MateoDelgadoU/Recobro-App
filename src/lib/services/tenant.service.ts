import type { Tenant } from '../types';
import { tenantRepository } from '../repositories/tenant.repository';

export class TenantService {
    async validateTenant(slug: string): Promise<Tenant> {
        const tenant = await tenantRepository.getTenantBySlug(slug);

        if (!tenant) {
            throw new Error(`Tenant not found: ${slug}`);
        }

        return tenant;
    }
}

export const tenantService = new TenantService();
