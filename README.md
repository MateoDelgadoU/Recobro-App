# Recobro - Dashboard Multi-tenant SaaS

Un dashboard moderno y listo para producción de gestión de proyectos multi-tenant construido con Next.js 16 (App Router), TypeScript y TailwindCSS v4.

## Demo en Vivo
- **URL de producción**: https://recobro-app.vercel.app
- **Repositorio**: https://github.com/MateoDelgadoU/Recobro-App

Tenants disponibles:
- `/acme/dashboard` - Acme Corporation
- `/umbrella/dashboard` - Umbrella Industries

## Decisiones Técnicas

### Patrón de Arquitectura: Clean Architecture con Separación por Capas

La aplicación sigue un **enfoque de clean architecture** con clara separación de responsabilidades:

```
src/
├── lib/
│   ├── types.ts                    # Tipos de dominio
│   ├── data/
│   │   └── mock-data.ts           # Capa de datos (fácilmente reemplazable)
│   ├── repositories/
│   │   ├── tenant.repository.ts   # Abstracción de acceso a datos
│   │   └── project.repository.ts
│   └── services/
│       ├── tenant.service.ts      # Lógica de negocio
│       └── project.service.ts
├── components/                     # Componentes de presentación
└── app/                           # Rutas y páginas
```

**¿Por qué este enfoque?**
- **Mantenibilidad**: Cada capa tiene una única responsabilidad
- **Testeabilidad**: La lógica de negocio está desacoplada de UI y datos
- **Escalabilidad**: Fácil intercambiar datos mock por base de datos real
- **Type Safety**: Tipado fuerte en todas las capas

### Implementación Multi-tenant

**Resolución de tenant basada en URL**: `/[tenant]/dashboard`

La arquitectura multi-tenant asegura aislamiento completo de datos:

1. **Validación de tenant a nivel de layout**: El `[tenant]/layout.tsx` valida que el tenant exista antes de renderizar páginas hijas
2. **Aislamiento a nivel de repositorio**: Todas las consultas de datos filtran por `tenantId`
3. **Enforcement a nivel de servicio**: Los servicios validan que los recursos pertenezcan al tenant
4. **404 en acceso inválido**: Intentar acceder al proyecto de otro tenant retorna 404

**Ejemplo de flujo**:
```
Usuario visita: /acme/projects/proj-4
                ↓
Layout valida que "acme" existe
                ↓
Servicio valida que proyecto proj-4 pertenece a "acme"
                ↓
Retorna 404 (proj-4 pertenece a "umbrella")
```

### Estrategia de Server vs Client Components

**Todas las páginas son Server Components** - la obtención de datos ocurre del lado del servidor:
- `[tenant]/dashboard/page.tsx` - obtiene estadísticas de tenant y proyectos
- `[tenant]/projects/page.tsx` - obtiene lista de proyectos
- `[tenant]/projects/[id]/page.tsx` - obtiene detalles del proyecto con validación

**Todos los componentes UI son Server Components** - no se necesita JavaScript del lado del cliente para contenido estático:
- `TenantNav.tsx` - enlaces de navegación
- `ProjectCard.tsx` - visualización de proyectos
- `StatusBadge.tsx` - indicadores de estado

**Sin directivas "use client"** en la implementación actual porque:
- No se necesita manejo de estado interactivo todavía
- Toda la navegación usa Next.js Link (server-side)
- Features interactivas futuras (filtros, modales) usarían Client Components

Este enfoque:
- Mejora el rendimiento (menor tamaño de bundle)
- Mejor SEO
- Carga inicial de página más rápida
- Clara separación de responsabilidades

### Filosofía de Diseño

**Minimalismo Profesional**:
- Paleta de colores limpia en negro/blanco/gris
- Bordes y espaciado sutiles
- Tipografía profesional (Geist Sans)
- Sin emojis, sin console logs
- Diseño responsivo para todos los tamaños de pantalla
- Soporte de modo oscuro mediante preferencias del sistema

## Desarrollo Local

```bash
# Instalar dependencias
pnpm install

# Ejecutar servidor de desarrollo
pnpm run dev

# Build para producción
pnpm run build

# Ejecutar servidor de producción
pnpm run start
```

## ¿Qué Mejoraría con Más Tiempo?

1. **Integración con Base de Datos**
   - Reemplazar datos mock con PostgreSQL/Prisma
   - Agregar connection pooling y optimización de queries
   - Implementar migraciones apropiadas

2. **Autenticación y Autorización**
   - NextAuth.js para manejo de usuarios por tenant
   - Control de acceso basado en roles (admin, member, viewer)
   - Sistema de invitaciones a tenants

3. **Gestión de Proyectos Mejorada**
   - Operaciones CRUD para proyectos
   - Filtrado y búsqueda de proyectos
   - Paginación para listas grandes de proyectos
   - Tags y categorías de proyectos

4. **Optimizaciones de Rendimiento**
   - Implementar streaming de React Server Components
   - Agregar estrategias de caching apropiadas (Redis)
   - Optimización de imágenes para avatares de proyectos
   - Optimización de queries de base de datos

5. **Testing**
   - Tests unitarios para servicios y repositorios
   - Tests de integración para rutas de API
   - Tests E2E con Playwright
   - Testing de regresión visual

6. **Monitoreo y Analíticas**
   - Seguimiento de errores (Sentry)
   - Monitoreo de rendimiento
   - Analíticas de usuarios
   - Logs de auditoría para acciones de tenants

## Qué se Dejó Intencionalmente Fuera

1. **Autenticación**: Fuera del alcance para demostración de arquitectura
2. **Base de Datos**: Usando datos mock para enfocarse en patrones de arquitectura
3. **Operaciones CRUD**: Solo lectura para demostrar flujo de datos
4. **Client Components**: Sin features interactivas para mantener el bundle mínimo
5. **API Routes**: Llamadas directas a servicios desde Server Components (patrón válido)
6. **Variables de Entorno**: Configuración hardcodeada por simplicidad
7. **Error Boundaries**: Manejo básico de errores con notFound() de Next.js
8. **Estados de Carga**: Se podrían agregar archivos loading.tsx para mejor UX
9. **Metadata por Página**: Se podría agregar metadata dinámica para SEO
10. **Internacionalización**: Un solo idioma para mantener el foco en arquitectura

## Justificación de la Estructura del Proyecto

### Patrón Repository
Abstrae el acceso a datos, haciendo trivial intercambiar datos mock por base de datos real:
```typescript
// Hoy: datos mock
export const projectRepository = new ProjectRepository();

// Mañana: base de datos
export const projectRepository = new PrismaProjectRepository();
```

### Capa de Servicio
Encapsula lógica de negocio y cross-cutting concerns:
- Validación de tenant
- Verificaciones de autorización (cuando se agregue)
- Queries complejas que abarcan múltiples repositorios
- Enforcement de reglas de negocio

### Sin API Routes
Los Server Components pueden llamar servicios directamente - no se necesita capa de API:
- Código más simple
- Type-safe end-to-end
- Mejor rendimiento (sin salto HTTP extra)
- Aún ejecutado del lado del servidor

Las API routes se agregarían cuando:
- Se construyan features client-side que necesiten mutaciones
- Se cree API pública para terceros
- Se integren webhooks

## Stack Tecnológico

- **Framework**: Next.js 16 (App Router)
- **Lenguaje**: TypeScript 5
- **Estilos**: TailwindCSS 4
- **Package Manager**: pnpm

## Nota sobre el Idioma del Código

**El código fuente de este proyecto está escrito completamente en inglés** siguiendo las mejores prácticas de la industria del software:

- **Estándar internacional**: El inglés es el idioma universal en desarrollo de software, facilitando la colaboración en equipos globales
- **Legibilidad universal**: Permite que cualquier desarrollador, independientemente de su idioma nativo, pueda entender y contribuir al código
- **Compatibilidad con herramientas**: Frameworks, librerías y documentación técnica están en inglés, manteniendo consistencia
- **Profesionalismo**: Los nombres de variables, funciones y clases en inglés son más naturales y siguen convenciones establecidas
- **Escalabilidad del equipo**: Facilita la incorporación de desarrolladores de cualquier nacionalidad sin barreras de idioma
- **Calidad del código**: Evita problemas de encoding, caracteres especiales y inconsistencias en diferentes entornos

Esta práctica no solo es recomendada sino esperada en proyectos profesionales, especialmente en aplicaciones SaaS destinadas a mercados internacionales.
