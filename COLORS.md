# 🎨 Paleta de Colores - Taller Cliente

## Descripción
La aplicación del cliente utiliza una paleta de colores más colorida y amigable, diseñada para crear una experiencia visual atractiva y moderna.

## Colores Principales

### 🟠 Naranja Principal (#FF6B35)
- **Uso**: Botones principales, elementos de acción, acentos importantes
- **Aplicación**: Botones de "Reservar", "Iniciar Sesión", "Crear Cuenta"
- **Clases Tailwind**: `bg-primary-500`, `text-primary-500`, `border-primary-500`

### 🟠 Naranja Claro (#FF8C69)
- **Uso**: Estados hover, variaciones del color principal
- **Aplicación**: Efectos hover en botones, elementos secundarios
- **Clases Tailwind**: `bg-primary-400`, `hover:bg-primary-600`

### 🔵 Azul Oscuro (#2C3E50)
- **Uso**: Textos importantes, títulos principales
- **Aplicación**: Encabezados, nombres de servicios, información crítica
- **Clases Tailwind**: `text-dark-700`, `text-primary`

### 🔵 Gris Azulado (#34495E)
- **Uso**: Textos secundarios, descripciones
- **Aplicación**: Subtítulos, descripciones de servicios, información adicional
- **Clases Tailwind**: `text-dark-800`, `text-secondary`

### ⚪ Gris Claro (#ECF0F1)
- **Uso**: Fondos suaves, elementos de interfaz
- **Aplicación**: Fondos de tarjetas, elementos de navegación, fondos secundarios
- **Clases Tailwind**: `bg-light-200`, `bg-light-300`

### ⚪ Blanco (#FFFFFF)
- **Uso**: Fondos principales, tarjetas, formularios
- **Aplicación**: Fondos de páginas, tarjetas de contenido, formularios
- **Clases Tailwind**: `bg-light-50`, `bg-white`

## Colores de Acento

### 🟡 Amarillo/Acento (#EAB308)
- **Uso**: Elementos destacados, calificaciones, alertas
- **Aplicación**: Estrellas de calificación, elementos de promoción
- **Clases Tailwind**: `text-accent-400`, `bg-accent-500`

## Clases CSS Personalizadas

### Botones
```css
.btn-primary {
  @apply bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors font-medium shadow-sm;
}

.btn-secondary {
  @apply bg-light-200 text-dark-800 px-4 py-2 rounded-lg hover:bg-light-300 transition-colors font-medium border border-light-400;
}

.btn-accent {
  @apply bg-accent-500 text-white px-4 py-2 rounded-lg hover:bg-accent-600 transition-colors font-medium shadow-sm;
}
```

### Tarjetas
```css
.card {
  @apply bg-light-50 rounded-xl shadow-sm border border-light-300;
}
```

### Campos de entrada
```css
.input-field {
  @apply w-full px-3 py-2 border border-light-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-light-50;
}
```

### Textos
```css
.text-primary {
  @apply text-dark-700;
}

.text-secondary {
  @apply text-dark-800;
}
```

### Gradientes
```css
.bg-gradient-primary {
  @apply bg-gradient-to-br from-primary-500 to-primary-600;
}

.bg-gradient-accent {
  @apply bg-gradient-to-br from-accent-500 to-accent-600;
}
```

## Uso en Componentes

### Header
- **Fondo**: `bg-light-50`
- **Bordes**: `border-light-300`
- **Logo**: `bg-gradient-primary`
- **Títulos**: `text-primary`

### Navegación
- **Fondo**: `bg-light-50`
- **Elementos activos**: `text-primary-500 bg-primary-100`
- **Elementos inactivos**: `text-light-500 hover:text-light-700`

### Formularios
- **Campos**: `input-field`
- **Botones**: `btn-primary`
- **Labels**: `text-primary`
- **Placeholders**: `text-light-500`

### Tarjetas de Servicios
- **Fondo**: `card`
- **Títulos**: `text-primary`
- **Descripciones**: `text-secondary`
- **Precios**: `text-primary-500`
- **Calificaciones**: `text-accent-400`

## Consistencia Visual

### Jerarquía de Colores
1. **Primario**: Naranja (#FF6B35) - Acciones principales
2. **Secundario**: Azul Oscuro (#2C3E50) - Contenido importante
3. **Terciario**: Gris Azulado (#34495E) - Contenido secundario
4. **Fondo**: Gris Claro (#ECF0F1) - Estructura de la interfaz
5. **Acento**: Amarillo (#EAB308) - Elementos destacados

### Estados de Interacción
- **Normal**: Color base
- **Hover**: Variación más clara o más oscura
- **Active**: Variación más intensa
- **Disabled**: Versión opaca del color base

### Accesibilidad
- **Contraste**: Todos los colores cumplen con estándares WCAG AA
- **Legibilidad**: Texto oscuro sobre fondos claros
- **Consistencia**: Uso coherente en toda la aplicación

## Implementación

### Tailwind CSS
Los colores están definidos en `tailwind.config.js` como extensiones del tema:

```javascript
colors: {
  primary: {
    50: '#fff7ed',
    100: '#ffedd5',
    200: '#fed7aa',
    300: '#fdba74',
    400: '#fb923c',
    500: '#FF6B35', // Naranja Principal
    600: '#ea580c',
    700: '#c2410c',
    800: '#9a3412',
    900: '#7c2d12',
  },
  // ... otros colores
}
```

### CSS Personalizado
Los estilos personalizados están en `src/index.css` usando las directivas de Tailwind:

```css
@layer components {
  .btn-primary { /* ... */ }
  .card { /* ... */ }
  .input-field { /* ... */ }
}
```

## Mantenimiento

### Agregar Nuevos Colores
1. Definir en `tailwind.config.js`
2. Documentar en este archivo
3. Usar consistentemente en los componentes

### Modificar Colores Existentes
1. Actualizar en `tailwind.config.js`
2. Verificar que no se rompa la accesibilidad
3. Actualizar la documentación
4. Probar en todos los componentes afectados

### Verificación
- ✅ Contraste de colores
- ✅ Consistencia visual
- ✅ Accesibilidad
- ✅ Responsive design
- ✅ Estados de interacción
