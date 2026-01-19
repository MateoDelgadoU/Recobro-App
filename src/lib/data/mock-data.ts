import type { Tenant, Project } from '../types';

export const tenants: Tenant[] = [
    {
        id: 'tenant-1',
        slug: 'acme',
        name: 'Acme Corporation',
    },
    {
        id: 'tenant-2',
        slug: 'umbrella',
        name: 'Umbrella Industries',
    },
];

export const projects: Project[] = [
    {
        id: 'proj-1',
        name: 'Website Redesign',
        status: 'active',
        tenantId: 'tenant-1',
        description: 'Complete overhaul of company website',
        createdAt: new Date('2026-01-01'),
    },
    {
        id: 'proj-2',
        name: 'Mobile App Development',
        status: 'active',
        tenantId: 'tenant-1',
        description: 'Native mobile application for iOS and Android',
        createdAt: new Date('2026-01-05'),
    },
    {
        id: 'proj-3',
        name: 'Legacy System Migration',
        status: 'archived',
        tenantId: 'tenant-1',
        description: 'Migration from legacy infrastructure',
        createdAt: new Date('2025-11-15'),
    },
    {
        id: 'proj-4',
        name: 'API Integration',
        status: 'active',
        tenantId: 'tenant-2',
        description: 'Third-party API integration project',
        createdAt: new Date('2026-01-10'),
    },
    {
        id: 'proj-5',
        name: 'Database Optimization',
        status: 'active',
        tenantId: 'tenant-2',
        description: 'Performance improvements for database queries',
        createdAt: new Date('2026-01-12'),
    },
    {
        id: 'proj-6',
        name: 'Security Audit',
        status: 'archived',
        tenantId: 'tenant-2',
        description: 'Comprehensive security review and improvements',
        createdAt: new Date('2025-12-01'),
    },
    {
        id: 'proj-7',
        name: 'Cloud Migration',
        status: 'active',
        tenantId: 'tenant-2',
        description: 'Migration to cloud infrastructure',
        createdAt: new Date('2026-01-08'),
    },
];
