/**
 * Represents the status of a project within the system.
 * - 'active': The project is currently in progress.
 * - 'archived': The project is completed or put on hold.
 */
export type ProjectStatus = 'active' | 'archived';

/**
 * Represents a project entity in the domain.
 * Projects belong to a specific tenant and hold business data.
 */
export interface Project {
  /** Unique identifier for the project */
  id: string;
  /** Display name of the project */
  name: string;
  /** Current lifecycle status of the project */
  status: ProjectStatus;
  /** ID of the tenant owning this project (Foreign Key) */
  tenantId: string;
  /** Optional detailed description */
  description?: string;
  /** Timestamp of project creation */
  createdAt: Date;
}

/**
 * Represents a tenant (organization) within the SaaS platform.
 * Tenants act as the primary boundary for data isolation.
 */
export interface Tenant {
  /** Unique identifier for the tenant */
  id: string;
  /** URL-friendly identifier used for routing (e.g., 'acme') */
  slug: string;
  /** Display name of the organization */
  name: string;
}
