import type { Project } from '../types';
import { projects } from '../data/mock-data';

/**
 * Repository class for accessing Project data.
 * Enforces data isolation by requiring tenant contexts for queries.
 */
export class ProjectRepository {
    /**
     * Retrieves all projects belonging to a specific tenant.
     * @param tenantId - The internal ID of the tenant.
     * @returns A promise resolving to an array of Projects.
     */
    async getProjectsByTenant(tenantId: string): Promise<Project[]> {
        return projects.filter((p) => p.tenantId === tenantId);
    }

    /**
     * Retrieves a specific project by ID, ensuring it belongs to the given tenant.
     * This method enforces tenant isolation by preventing access to a project if the tenantId doesn't match.
     * 
     * @param id - The ID of the project to fetch.
     * @param tenantId - The ID of the context tenant (to verify ownership).
     * @returns A promise resolving to the Project if found and owned by tenant, or null.
     */
    async getProjectById(id: string, tenantId: string): Promise<Project | null> {
        const project = projects.find((p) => p.id === id && p.tenantId === tenantId);
        return project || null;
    }
}

export const projectRepository = new ProjectRepository();
