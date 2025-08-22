import React from 'react';
import { ClockIcon } from '@heroicons/react/24/outline';

const ServiceHistoryPage: React.FC = () => {
  return (
    <div className="p-4">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-primary mb-2">Historial de Servicios</h1>
        <p className="text-secondary">Revisa todos los servicios realizados</p>
      </div>
      
      <div className="card text-center">
        <ClockIcon className="mx-auto h-12 w-12 text-light-400 mb-3" />
        <h3 className="text-lg font-medium text-primary mb-2">
          Página en desarrollo
        </h3>
        <p className="text-secondary">
          Aquí podrás ver el historial completo de todos los servicios realizados en tu vehículo
        </p>
      </div>
    </div>
  );
};

export default ServiceHistoryPage;
