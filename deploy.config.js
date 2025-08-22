// Configuración para el despliegue
export default {
  // Configuración del servidor de producción
  production: {
    host: 'your-production-host.com',
    port: 443,
    protocol: 'https',
    basePath: '/',
    apiUrl: 'https://your-production-host.com/api'
  },
  
  // Configuración del servidor de staging
  staging: {
    host: 'your-staging-host.com',
    port: 443,
    protocol: 'https',
    basePath: '/',
    apiUrl: 'https://your-staging-host.com/api'
  },
  
  // Configuración del servidor de desarrollo
  development: {
    host: 'localhost',
    port: 3001,
    protocol: 'http',
    basePath: '/',
    apiUrl: 'http://localhost:3000/api'
  },
  
  // Configuración de build
  build: {
    outputDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: true,
    target: 'es2015'
  },
  
  // Configuración de CDN (si se usa)
  cdn: {
    enabled: false,
    baseUrl: 'https://your-cdn.com',
    version: '1.0.0'
  },
  
  // Configuración de monitoreo
  monitoring: {
    enabled: true,
    service: 'sentry', // o 'logrocket', 'mixpanel', etc.
    dsn: 'your-sentry-dsn'
  }
};
