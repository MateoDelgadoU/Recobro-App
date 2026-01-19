import type { Project } from '../types';
import { projectRepository } from '../repositories/project.repository';
import { tenantService } from './tenant.service';

/**
 * Service layer for Project-related business logic.
 * Orchestrates fetching data by first validating the tenant context.
 */
export class ProjectService {
    /**
     * Retrieves all projects for a given tenant slug.
     * First validates the tenant existence, then fetches their projects.
     * 
     * @param tenantSlug - The slug of the tenant from the URL.
     * @returns A promise resolving to an array of projects owned by the tenant.
     */
    async getProjectsForTenant(tenantSlug: string): Promise<Project[]> {
        const tenant = await tenantService.validateTenant(tenantSlug);
        return projectRepository.getProjectsByTenant(tenant.id);
    }

    /**
     * Retrieves details of a specific project within a tenant context.
     * Enforces strict check that the project belongs to the validated tenant.
     * 
     * @param projectId - The unique ID of the project.
     * @param tenantSlug - The slug of the tenant context.
     * @returns A promise resolving to the Project.
     * @throws {Error} If project is not found or does not belong to the tenant.
     */
    async getProjectDetails(projectId: string, tenantSlug: string): Promise<Project> {
        const tenant = await tenantService.validateTenant(tenantSlug);
        const project = await projectRepository.getProjectById(projectId, tenant.id);

        if (!project) {
            throw new Error(`Project not found or does not belong to tenant: ${projectId}`);
        }

        return project;
    }
}

export const projectService = new ProjectService();
