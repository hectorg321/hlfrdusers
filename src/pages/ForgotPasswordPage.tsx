import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  WrenchScrewdriverIcon, 
  EnvelopeIcon, 
  ArrowLeftIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError('El correo electrónico es requerido');
      return false;
    }
    if (!emailRegex.test(email)) {
      setEmailError('Ingresa un correo electrónico válido');
      return false;
    }
    setEmailError('');
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!validateEmail(email)) {
      return;
    }

    setIsLoading(true);
    
    try {
      // Simular envío de correo de recuperación
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simular éxito
      setIsSubmitted(true);
    } catch (err) {
      setError('Ocurrió un error al enviar el correo. Intenta nuevamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (emailError) {
      validateEmail(value);
    }
  };

  const handleBackToLogin = () => {
    setIsSubmitted(false);
    setEmail('');
    setError('');
    setEmailError('');
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-accent-50 flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          {/* Logo y título */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4 shadow-lg">
              <WrenchScrewdriverIcon className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-primary mb-2">
              ¡Correo enviado!
            </h1>
            <p className="text-secondary">
              Revisa tu bandeja de entrada
            </p>
          </div>

          {/* Mensaje de confirmación */}
          <div className="card shadow-xl p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <CheckCircleIcon className="w-8 h-8 text-green-600" />
            </div>
            
            <h3 className="text-lg font-medium text-primary mb-3">
              Instrucciones enviadas
            </h3>
            
            <p className="text-secondary mb-6">
              Hemos enviado un enlace de recuperación a{' '}
              <span className="font-medium text-primary">{email}</span>
            </p>
            
            <div className="space-y-3">
              <button
                onClick={handleBackToLogin}
                className="w-full btn-primary py-3 px-4 text-lg font-medium"
              >
                Volver al inicio de sesión
              </button>
              
              <button
                onClick={() => window.location.reload()}
                className="w-full btn-secondary py-3 px-4 text-lg font-medium"
              >
                Enviar a otro correo
              </button>
            </div>
          </div>

          {/* Información adicional */}
          <div className="text-center mt-6">
            <p className="text-sm text-light-500">
              ¿No recibiste el correo? Revisa tu carpeta de spam o{' '}
              <button
                onClick={handleBackToLogin}
                className="text-primary-500 hover:text-primary-600 font-medium"
              >
                intenta con otro correo
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-accent-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo y título */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4 shadow-lg">
            <WrenchScrewdriverIcon className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-primary mb-2">
            Recuperar contraseña
          </h1>
          <p className="text-secondary">
            Te enviaremos un enlace para restablecer tu contraseña
          </p>
        </div>

        {/* Formulario */}
        <div className="card shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                Correo electrónico
              </label>
              <div className="relative">
                <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-light-500" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  className={`input-field pl-10 ${emailError ? 'border-red-300 focus:ring-red-500 focus:border-red-300' : ''}`}
                  placeholder="tu@email.com"
                  required
                />
              </div>
              {emailError && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <ExclamationTriangleIcon className="w-4 h-4 mr-1" />
                  {emailError}
                </p>
              )}
            </div>

            {/* Error general */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-sm text-red-600 flex items-center">
                  <ExclamationTriangleIcon className="w-4 h-4 mr-2" />
                  {error}
                </p>
              </div>
            )}

            {/* Botón de envío */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full btn-primary py-3 px-4 text-lg font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Enviando...</span>
                </div>
              ) : (
                'Enviar enlace de recuperación'
              )}
            </button>
          </form>
        </div>

        {/* Enlaces adicionales */}
        <div className="text-center mt-6 space-y-3">
          <Link
            to="/login"
            className="inline-flex items-center text-sm text-primary-500 hover:text-primary-600 font-medium"
          >
            <ArrowLeftIcon className="w-4 h-4 mr-1" />
            Volver al inicio de sesión
          </Link>
          
          <div className="text-sm text-light-500">
            ¿No tienes una cuenta?{' '}
            <Link
              to="/register"
              className="text-primary-500 hover:text-primary-600 font-medium"
            >
              Regístrate aquí
            </Link>
          </div>
        </div>

        {/* Información adicional */}
        <div className="text-center mt-6">
          <p className="text-sm text-light-500">
            Al continuar, aceptas nuestros{' '}
            <Link to="/terms" className="text-primary-500 hover:text-primary-600">
              Términos de Servicio
            </Link>{' '}
            y{' '}
            <Link to="/privacy" className="text-primary-500 hover:text-primary-600">
              Política de Privacidad
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
