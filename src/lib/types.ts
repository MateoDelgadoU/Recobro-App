export type ProjectStatus = 'active' | 'archived';

export interface Project {
  id: string;
  name: string;
  status: ProjectStatus;
  tenantId: string;
  description?: string;
  createdAt: Date;
}

export interface Tenant {
  id: string;
  slug: string;
  name: string;
}
