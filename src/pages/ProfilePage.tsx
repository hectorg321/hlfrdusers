import React from 'react';
import { UserIcon } from '@heroicons/react/24/outline';

const ProfilePage: React.FC = () => {
  return (
    <div className="p-4">
             <div className="text-center mb-6">
         <h1 className="text-2xl font-bold text-primary mb-2">Mi Perfil</h1>
         <p className="text-secondary">Gestiona tu información personal</p>
       </div>
       
       <div className="card text-center">
         <UserIcon className="mx-auto h-12 w-12 text-light-400 mb-3" />
         <h3 className="text-lg font-medium text-primary mb-2">
           Página en desarrollo
         </h3>
         <p className="text-secondary">
           Aquí podrás editar tu información personal y configurar tu cuenta
         </p>
       </div>
    </div>
  );
};

export default ProfilePage;
