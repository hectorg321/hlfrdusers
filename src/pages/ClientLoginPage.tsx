import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { useClientAuthStore } from '@/store/useClientAuthStore';
import { WrenchScrewdriverIcon } from '@heroicons/react/24/outline';

const ClientLoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { login, isLoading, error, clearError } = useClientAuthStore();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (error) {
      clearError();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      return;
    }

    const success = await login(formData.email, formData.password);
    if (success) {
      navigate('/');
    }
  };

  return (
         <div className="min-h-screen bg-gradient-to-br from-primary-50 to-accent-50 flex items-center justify-center px-4">
       <div className="w-full max-w-md">
         {/* Logo y título */}
         <div className="text-center mb-8">
           <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4 shadow-lg">
             <WrenchScrewdriverIcon className="w-8 h-8 text-white" />
           </div>
           <h1 className="text-2xl font-bold text-primary mb-2">
             Bienvenido de vuelta
           </h1>
           <p className="text-secondary">
             Inicia sesión en tu cuenta de cliente
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
               <input
                 type="email"
                 id="email"
                 name="email"
                 value={formData.email}
                 onChange={handleInputChange}
                 className="input-field"
                 placeholder="tu@email.com"
                 required
               />
             </div>

             {/* Contraseña */}
             <div>
               <label htmlFor="password" className="block text-sm font-medium text-primary mb-2">
                 Contraseña
               </label>
               <div className="relative">
                 <input
                   type={showPassword ? 'text' : 'password'}
                   id="password"
                   name="password"
                   value={formData.password}
                   onChange={handleInputChange}
                   className="input-field pr-12"
                   placeholder="••••••••"
                   required
                 />
                 <button
                   type="button"
                   onClick={() => setShowPassword(!showPassword)}
                   className="absolute inset-y-0 right-0 pr-3 flex items-center text-light-500 hover:text-light-600"
                 >
                   {showPassword ? (
                     <EyeSlashIcon className="w-5 h-5" />
                   ) : (
                     <EyeIcon className="w-5 h-5" />
                   )}
                 </button>
               </div>
             </div>

             {/* Error */}
             {error && (
               <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                 <p className="text-sm text-red-600">{error}</p>
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
                   <span>Iniciando sesión...</span>
                 </div>
               ) : (
                 'Iniciar Sesión'
               )}
             </button>

             {/* Enlaces adicionales */}
             <div className="text-center space-y-3">
               <Link
                 to="/forgot-password"
                 className="block text-sm text-primary-500 hover:text-primary-600 font-medium"
               >
                 ¿Olvidaste tu contraseña?
               </Link>
               
               <div className="text-sm text-secondary">
                 ¿No tienes una cuenta?{' '}
                 <Link
                   to="/register"
                   className="text-primary-500 hover:text-primary-600 font-medium"
                 >
                   Regístrate aquí
                 </Link>
               </div>
             </div>
           </form>
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

export default ClientLoginPage;
