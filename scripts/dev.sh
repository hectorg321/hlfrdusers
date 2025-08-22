#!/bin/bash

# Script de desarrollo para la aplicación del cliente
echo "🚀 Iniciando desarrollo de Taller Cliente..."

# Verificar que Node.js esté instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js no está instalado. Por favor instálalo primero."
    exit 1
fi

# Verificar que npm esté instalado
if ! command -v npm &> /dev/null; then
    echo "❌ npm no está instalado. Por favor instálalo primero."
    exit 1
fi

# Verificar la versión de Node.js
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Se requiere Node.js 18 o superior. Versión actual: $(node -v)"
    exit 1
fi

echo "✅ Node.js $(node -v) detectado"

# Instalar dependencias si no están instaladas
if [ ! -d "node_modules" ]; then
    echo "📦 Instalando dependencias..."
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ Error al instalar dependencias"
        exit 1
    fi
    echo "✅ Dependencias instaladas"
else
    echo "✅ Dependencias ya instaladas"
fi

# Verificar tipos de TypeScript
echo "🔍 Verificando tipos de TypeScript..."
npm run type-check
if [ $? -ne 0 ]; then
    echo "❌ Errores de TypeScript encontrados. Por favor corrígelos antes de continuar."
    exit 1
fi
echo "✅ Verificación de tipos exitosa"

# Iniciar servidor de desarrollo
echo "🌐 Iniciando servidor de desarrollo en http://localhost:3001..."
echo "📱 La aplicación del cliente estará disponible en: http://localhost:3001"
echo "🔧 El admin estará disponible en: http://localhost:3000"
echo ""
echo "Presiona Ctrl+C para detener el servidor"
echo ""

npm run dev
