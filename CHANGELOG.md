# Changelog

Todos los cambios notables en este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto adhiere a [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Sin publicar]

### Añadido
- Sistema de autenticación completo con Redux Toolkit
  - Implementación de registro de usuarios
  - Implementación de inicio de sesión
  - Implementación de cierre de sesión
  - Manejo de tokens JWT (mock)
  - Validación de formularios
  - Manejo de errores
  - Feedback visual para el usuario

- Componentes de UI
  - Navbar responsive con menú de usuario
  - Formularios de login y registro
  - Componente de ruta protegida
  - Indicadores de carga
  - Mensajes de error
  - Avatar de usuario

- Gestión de Estado
  - Configuración de Redux Store
  - Slice de autenticación
  - Selectores para estado de autenticación
  - Manejo asíncrono de acciones

- Routing
  - Configuración de React Router
  - Rutas públicas y protegidas
  - Redirecciones basadas en autenticación

### Modificado
- Actualización de dependencias a versiones estables
- Mejora en la estructura del proyecto
- Implementación de manejo de errores global
- Mejora en la experiencia de usuario en formularios

### Técnico
- Migración de Context API a Redux Toolkit
- Implementación de sistema de mock para autenticación
- Mejora en la gestión de tokens
- Implementación de lazy loading para rutas
- Añadido manejo de errores con Error Boundary

## [0.1.0] - 2025-01-09
### Añadido
- Configuración inicial del proyecto con Vite
- Implementación de Material-UI
- Estructura base del proyecto
- Configuración de ESLint y Prettier

### Próximos Pasos
- [ ] Implementar backend con Node.js y Express
- [ ] Añadir base de datos MongoDB
- [ ] Implementar autenticación real con JWT
- [ ] Añadir funcionalidades de Web3
- [ ] Implementar integración con TensorFlow.js
- [ ] Añadir tests unitarios y de integración
- [ ] Configurar CI/CD
- [ ] Mejorar documentación técnica
