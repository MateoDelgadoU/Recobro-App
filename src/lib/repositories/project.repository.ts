import type { Project } from '../types';
import { projects } from '../data/mock-data';

export class ProjectRepository {
    async getProjectsByTenant(tenantId: string): Promise<Project[]> {
        return projects.filter((p) => p.tenantId === tenantId);
    }

    async getProjectById(id: string, tenantId: string): Promise<Project | null> {
        const project = projects.find((p) => p.id === id && p.tenantId === tenantId);
        return project || null;
    }
}

export const projectRepository = new ProjectRepository();
