# Taller Cliente - Aplicación Móvil

Aplicación móvil para clientes del taller mecánico, desarrollada con React, TypeScript y Tailwind CSS.

## 🚀 Características

- **Autenticación de clientes**: Login y registro de usuarios
- **Catálogo de servicios**: Explorar y buscar servicios disponibles
- **Gestión de citas**: Programar y gestionar citas de servicio
- **Historial de servicios**: Revisar servicios realizados
- **Perfil de usuario**: Gestionar información personal
- **Diseño responsive**: Optimizado para dispositivos móviles
- **Navegación intuitiva**: Interfaz fácil de usar

## 🛠️ Tecnologías

- **Frontend**: React 18 + TypeScript
- **Estilos**: Tailwind CSS
- **Estado**: Zustand
- **Rutas**: React Router DOM
- **Formularios**: React Hook Form + Zod
- **Iconos**: Heroicons
- **Build**: Vite
- **Linting**: ESLint

## 📱 Funcionalidades Principales

### 1. Autenticación
- Login con email y contraseña
- Registro de nuevos usuarios
- Persistencia de sesión
- Rutas protegidas

### 2. Dashboard Principal
- Saludo personalizado
- Próxima cita programada
- Servicios populares
- Ofertas especiales
- Acceso rápido a funcionalidades

### 3. Catálogo de Servicios
- Lista completa de servicios
- Filtros por categoría
- Búsqueda por nombre
- Ordenamiento por precio, calificación, etc.
- Detalles completos de cada servicio

### 4. Gestión de Citas
- Ver citas programadas
- Programar nuevas citas
- Cancelar o reprogramar citas
- Historial de servicios

### 5. Perfil de Usuario
- Información personal
- Vehículos registrados
- Preferencias
- Configuración de cuenta

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### 1. Clonar el repositorio
```bash
git clone <repository-url>
cd taller-cliente
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar variables de entorno
```bash
cp .env.example .env
# Editar .env con las configuraciones necesarias
```

### 4. Ejecutar en desarrollo
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3001`

### 5. Construir para producción
```bash
npm run build
```

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── auth/           # Componentes de autenticación
│   ├── layout/         # Layouts y navegación
│   └── ui/             # Componentes de UI básicos
├── pages/              # Páginas de la aplicación
├── store/              # Estado global (Zustand)
├── types/              # Tipos TypeScript
├── services/           # Servicios y APIs
├── hooks/              # Hooks personalizados
├── utils/              # Utilidades y helpers
├── App.tsx             # Componente principal
└── main.tsx            # Punto de entrada
```

## 🔧 Configuración

### Puerto de Desarrollo
La aplicación se ejecuta en el puerto 3001 por defecto para evitar conflictos con el admin.

### Variables de Entorno
```env
VITE_API_URL=http://localhost:3000/api
VITE_APP_NAME=Taller Cliente
```

## 📱 Diseño Responsive

La aplicación está optimizada para dispositivos móviles con:
- Navegación inferior tipo app móvil
- Componentes adaptados a pantallas pequeñas
- Gestos táctiles optimizados
- Diseño mobile-first

## 🎨 Paleta de Colores

- **Primario**: Azul (#3B82F6)
- **Secundario**: Gris (#64748B)
- **Éxito**: Verde (#10B981)
- **Error**: Rojo (#EF4444)
- **Advertencia**: Amarillo (#F59E0B)
- **Fondo**: Gris claro (#F8FAFC)

## 🔒 Seguridad

- Rutas protegidas para usuarios autenticados
- Validación de formularios con Zod
- Sanitización de inputs
- Tokens JWT para autenticación
- Persistencia segura de sesión

## 🧪 Testing

```bash
# Ejecutar tests
npm test

# Tests en modo watch
npm run test:watch

# Coverage
npm run test:coverage
```

## 📦 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Construcción para producción
- `npm run preview` - Vista previa de producción
- `npm run lint` - Linting del código
- `npm run type-check` - Verificación de tipos TypeScript

## 🌐 Navegadores Soportados

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📱 Dispositivos Soportados

- iOS 12+
- Android 8+
- Dispositivos móviles modernos
- Tablets (responsive)

## 🤝 Contribución

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 📞 Soporte

Para soporte técnico o preguntas:
- Email: soporte@taller.com
- Documentación: [docs.taller.com](https://docs.taller.com)
- Issues: [GitHub Issues](https://github.com/taller/issues)

## 🔄 Actualizaciones

Mantén tu aplicación actualizada:
```bash
npm update
npm audit fix
```

## 📊 Estado del Proyecto

- ✅ Autenticación básica
- ✅ Navegación principal
- ✅ Página de inicio
- ✅ Catálogo de servicios
- 🔄 Gestión de citas (en desarrollo)
- 🔄 Historial de servicios (en desarrollo)
- 🔄 Perfil de usuario (en desarrollo)

---

**Desarrollado con ❤️ para el Taller Mecánico**
# hlfrdusers
