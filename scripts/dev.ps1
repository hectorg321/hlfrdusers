# Script de desarrollo para la aplicación del cliente (Windows PowerShell)
Write-Host "🚀 Iniciando desarrollo de Taller Cliente..." -ForegroundColor Green

# Verificar que Node.js esté instalado
try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js $nodeVersion detectado" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js no está instalado. Por favor instálalo primero." -ForegroundColor Red
    exit 1
}

# Verificar que npm esté instalado
try {
    $npmVersion = npm --version
    Write-Host "✅ npm $npmVersion detectado" -ForegroundColor Green
} catch {
    Write-Host "❌ npm no está instalado. Por favor instálalo primero." -ForegroundColor Red
    exit 1
}

# Verificar la versión de Node.js
$nodeMajorVersion = (node --version).Split('.')[0].Replace('v', '')
if ([int]$nodeMajorVersion -lt 18) {
    Write-Host "❌ Se requiere Node.js 18 o superior. Versión actual: $(node --version)" -ForegroundColor Red
    exit 1
}

# Instalar dependencias si no están instaladas
if (-not (Test-Path "node_modules")) {
    Write-Host "📦 Instalando dependencias..." -ForegroundColor Yellow
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Error al instalar dependencias" -ForegroundColor Red
        exit 1
    }
    Write-Host "✅ Dependencias instaladas" -ForegroundColor Green
} else {
    Write-Host "✅ Dependencias ya instaladas" -ForegroundColor Green
}

# Verificar tipos de TypeScript
Write-Host "🔍 Verificando tipos de TypeScript..." -ForegroundColor Yellow
npm run type-check
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Errores de TypeScript encontrados. Por favor corrígelos antes de continuar." -ForegroundColor Red
    exit 1
}
Write-Host "✅ Verificación de tipos exitosa" -ForegroundColor Green

# Iniciar servidor de desarrollo
Write-Host "🌐 Iniciando servidor de desarrollo en http://localhost:3001..." -ForegroundColor Green
Write-Host "📱 La aplicación del cliente estará disponible en: http://localhost:3001" -ForegroundColor Cyan
Write-Host "🔧 El admin estará disponible en: http://localhost:3000" -ForegroundColor Cyan
Write-Host ""
Write-Host "Presiona Ctrl+C para detener el servidor" -ForegroundColor Yellow
Write-Host ""

npm run dev
