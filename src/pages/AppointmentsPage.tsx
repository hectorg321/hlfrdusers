import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CalendarIcon, PlusIcon } from '@heroicons/react/24/outline';

const AppointmentsPage: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="p-4">
             <div className="text-center mb-6">
         <h1 className="text-2xl font-bold text-primary mb-2">Mis Citas</h1>
         <p className="text-secondary">Gestiona tus citas programadas</p>
       </div>
       
       <div className="card text-center">
         <CalendarIcon className="mx-auto h-12 w-12 text-light-400 mb-3" />
         <h3 className="text-lg font-medium text-primary mb-2">
           Página en desarrollo
         </h3>
         <p className="text-secondary mb-4">
           Aquí podrás ver y gestionar todas tus citas programadas
         </p>
         <button
           onClick={() => navigate('/test-book')}
           className="btn-primary flex items-center mx-auto"
         >
           <PlusIcon className="w-4 h-4 mr-2" />
           Reservar Nuevo Servicio
         </button>
       </div>
    </div>
  );
};

export default AppointmentsPage;
