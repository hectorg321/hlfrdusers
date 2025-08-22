// Configuración para el build de producción
export default {
  // Configuración de la aplicación
  appName: 'Taller Cliente',
  appVersion: '1.0.0',
  
  // Configuración de la API
  apiUrl: process.env.VITE_API_URL || 'http://localhost:3000/api',
  
  // Configuración de autenticación
  authStorageKey: 'client-auth-storage',
  
  // Configuración de desarrollo
  devMode: process.env.NODE_ENV === 'development',
  
  // Configuración de puertos
  clientPort: 3001,
  adminPort: 3000,
  
  // Configuración de build
  buildDir: 'dist',
  publicDir: 'public',
  
  // Configuración de Tailwind
  tailwindConfig: 'tailwind.config.js',
  
  // Configuración de TypeScript
  tsConfig: 'tsconfig.json',
  tsConfigNode: 'tsconfig.node.json'
};
