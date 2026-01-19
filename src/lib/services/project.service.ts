import type { Project } from '../types';
import { projectRepository } from '../repositories/project.repository';
import { tenantService } from './tenant.service';

export class ProjectService {
    async getProjectsForTenant(tenantSlug: string): Promise<Project[]> {
        const tenant = await tenantService.validateTenant(tenantSlug);
        return projectRepository.getProjectsByTenant(tenant.id);
    }

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
