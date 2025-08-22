import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  BellIcon, 
  CalendarIcon, 
  WrenchIcon, 
  StarIcon,
  ChevronRightIcon,
  ClockIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';
import { useClientAuthStore } from '@/store/useClientAuthStore';
import { ServiceClient, ClientAppointment } from '@/types';

// Mock data para demostración
const mockServices: ServiceClient[] = [
  {
    id: '1',
    name: 'Cambio de Aceite',
    description: 'Cambio completo de aceite y filtro con lubricante de alta calidad',
    shortDescription: 'Mantenimiento preventivo del motor',
    duration: 45,
    price: 45.00,
    category: { id: '1', name: 'Mantenimiento', description: '', color: '#3B82F6', icon: 'wrench' },
    imageUrl: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400',
    gallery: [],
    features: ['Aceite sintético', 'Filtro nuevo', 'Inspección general'],
    requirements: [],
    isPopular: true,
    rating: 4.8,
    reviewCount: 127,
    estimatedTime: '30-45 min'
  },
  {
    id: '2',
    name: 'Revisión de Frenos',
    description: 'Inspección completa del sistema de frenos y cambio de pastillas si es necesario',
    shortDescription: 'Seguridad en la conducción',
    duration: 60,
    price: 80.00,
    category: { id: '2', name: 'Seguridad', description: '', color: '#EF4444', icon: 'stop' },
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
    gallery: [],
    features: ['Inspección de discos', 'Cambio de pastillas', 'Líquido de frenos'],
    requirements: [],
    isPopular: true,
    rating: 4.9,
    reviewCount: 89,
    estimatedTime: '45-60 min'
  },
  {
    id: '3',
    name: 'Limpieza Interior',
    description: 'Limpieza profunda del interior del vehículo con productos profesionales',
    shortDescription: 'Higiene y confort',
    duration: 90,
    price: 65.00,
    category: { id: '3', name: 'Limpieza', description: '', color: '#10B981', icon: 'sparkles' },
    imageUrl: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400',
    gallery: [],
    features: ['Aspirado profundo', 'Limpieza de tapicería', 'Aromatización'],
    requirements: [],
    isPopular: false,
    rating: 4.7,
    reviewCount: 56,
    estimatedTime: '1-1.5 horas'
  }
];

const mockUpcomingAppointment: ClientAppointment | null = {
  id: '1',
  service: mockServices[0],
  scheduledDate: '2025-01-20',
  startTime: '10:00',
  endTime: '10:45',
  status: 'confirmed',
  vehicle: {
    id: '1',
    customerId: '1',
    brand: 'Toyota',
    model: 'Corolla',
    year: 2020,
    plate: 'ABC-123',
    color: 'Blanco',
    isDefault: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  notes: 'Recordar traer el manual del vehículo',
  price: 45.00,
  confirmationCode: 'ABC123',
  canCancel: true,
  canReschedule: true,
  createdAt: new Date(),
  updatedAt: new Date(),
  workshop: {
    name: 'Taller Mecánico Premium',
    address: 'Av. Principal 123, Ciudad',
    phone: '+1 234 567 890',
    whatsapp: '+1 234 567 890',
    coordinates: [0, 0],
    workingHours: {
      monday: { isOpen: true, start: '08:00', end: '18:00' },
      tuesday: { isOpen: true, start: '08:00', end: '18:00' },
      wednesday: { isOpen: true, start: '08:00', end: '18:00' },
      thursday: { isOpen: true, start: '08:00', end: '18:00' },
      friday: { isOpen: true, start: '08:00', end: '18:00' },
      saturday: { isOpen: true, start: '08:00', end: '14:00' },
      sunday: { isOpen: false, start: '', end: '' }
    }
  }
};

// Componente Hero Section
const HeroSection: React.FC<{ onQuickBook: () => void }> = ({ onQuickBook }) => {
  const { customer } = useClientAuthStore();
  
  return (
         <div className="relative bg-gradient-primary text-white px-4 py-8">
       {/* Background Pattern */}
       <div className="absolute inset-0 opacity-10">
         <div className="absolute inset-0" style={{
           backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
         }} />
       </div>
       
       <div className="relative z-10">
         <div className="flex items-center justify-between mb-6">
           <div>
             <h1 className="text-2xl font-bold mb-1">
               ¡Hola, {customer?.firstName || 'Cliente'}! 👋
             </h1>
             <p className="text-primary-100">
               ¿Tu vehículo necesita atención?
             </p>
           </div>
           <button className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors">
             <BellIcon className="w-6 h-6" />
           </button>
         </div>
         
         <div className="space-y-3">
           <button
             onClick={onQuickBook}
             className="w-full bg-white text-primary-500 font-semibold py-3 px-4 rounded-xl hover:bg-primary-50 transition-colors flex items-center justify-center space-x-2 shadow-lg"
           >
             <WrenchIcon className="w-5 h-5" />
             <span>Reservar Servicio</span>
           </button>
           
           <div className="flex space-x-2">
             <button className="flex-1 bg-white/20 text-white py-2 px-3 rounded-lg hover:bg-white/30 transition-colors text-sm">
               Ver Horarios
             </button>
             <button className="flex-1 bg-white/20 text-white py-2 px-3 rounded-lg hover:bg-white/30 transition-colors text-sm">
               Contactar
             </button>
           </div>
         </div>
       </div>
     </div>
  );
};

// Componente de Próxima Cita
const UpcomingAppointment: React.FC<{ 
  appointment: ClientAppointment | null; 
  onViewAll: () => void 
}> = ({ appointment, onViewAll }) => {
  if (!appointment) {
    return (
             <div className="card mx-4 mb-6">
         <div className="text-center py-6">
           <CalendarIcon className="mx-auto h-12 w-12 text-light-400 mb-3" />
           <h3 className="text-lg font-medium text-primary mb-2">
             No tienes citas programadas
           </h3>
           <p className="text-secondary mb-4">
             Agenda tu próximo servicio para mantener tu vehículo en óptimas condiciones
           </p>
           <button
             onClick={onViewAll}
             className="btn-primary"
           >
             Ver Servicios
           </button>
         </div>
       </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', { 
      weekday: 'long', 
      day: 'numeric', 
      month: 'long' 
    });
  };

  return (
         <div className="card mx-4 mb-6">
       <div className="flex items-center justify-between mb-3">
         <h3 className="text-lg font-semibold text-primary">Próxima Cita</h3>
         <button
           onClick={onViewAll}
           className="text-primary-500 text-sm font-medium hover:text-primary-600"
         >
           Ver todas
         </button>
       </div>
       
       <div className="space-y-3">
         <div className="flex items-center space-x-3">
           <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
             <WrenchIcon className="w-6 h-6 text-primary-500" />
           </div>
           <div className="flex-1 min-w-0">
             <h4 className="font-medium text-primary truncate">
               {appointment.service.name}
             </h4>
             <p className="text-sm text-secondary">
               {appointment.vehicle.brand} {appointment.vehicle.model} {appointment.vehicle.plate}
             </p>
           </div>
         </div>
         
         <div className="grid grid-cols-2 gap-3 text-sm">
           <div className="flex items-center space-x-2 text-secondary">
             <CalendarIcon className="w-4 h-4" />
             <span>{formatDate(appointment.scheduledDate)}</span>
           </div>
           <div className="flex items-center space-x-2 text-secondary">
             <ClockIcon className="w-4 h-4" />
             <span>{appointment.startTime}</span>
           </div>
         </div>
         
         <div className="flex items-center justify-between pt-2 border-t border-light-300">
           <div className="flex items-center space-x-2 text-sm text-secondary">
             <MapPinIcon className="w-4 h-4" />
             <span className="truncate">{appointment.workshop.name}</span>
           </div>
           <span className="text-lg font-bold text-primary-500">
             ${appointment.price}
           </span>
         </div>
         
         <div className="flex space-x-2">
           <button className="flex-1 btn-secondary">
             Reprogramar
           </button>
           <button className="flex-1 bg-red-100 text-red-700 py-2 px-3 rounded-lg hover:bg-red-200 transition-colors text-sm">
             Cancelar
           </button>
         </div>
       </div>
     </div>
  );
};

// Componente de Servicios Populares
const PopularServices: React.FC<{ 
  services: ServiceClient[]; 
  onServiceSelect: (service: ServiceClient) => void; 
  onViewAll: () => void 
}> = ({ services, onServiceSelect, onViewAll }) => {
  return (
    <div className="mb-6">
             <div className="px-4 mb-3">
         <div className="flex items-center justify-between">
           <div>
             <h2 className="text-xl font-bold text-primary">Servicios Populares</h2>
             <p className="text-sm text-secondary">Los más solicitados por nuestros clientes</p>
           </div>
           <button
             onClick={onViewAll}
             className="text-primary-500 text-sm font-medium hover:text-primary-600 flex items-center space-x-1"
           >
             <span>Ver todos</span>
             <ChevronRightIcon className="w-4 h-4" />
           </button>
         </div>
       </div>
       
       <div className="px-4 space-y-3">
         {services.map((service) => (
           <div
             key={service.id}
             onClick={() => onServiceSelect(service)}
             className="card cursor-pointer hover:shadow-md transition-shadow"
           >
             <div className="flex items-center space-x-3">
               <div className="w-16 h-16 bg-light-200 rounded-lg flex-shrink-0">
                 {service.imageUrl && (
                   <img 
                     src={service.imageUrl} 
                     alt={service.name}
                     className="w-full h-full object-cover rounded-lg"
                   />
                 )}
               </div>
               <div className="flex-1 min-w-0">
                 <h3 className="font-semibold text-primary mb-1">{service.name}</h3>
                 <p className="text-sm text-secondary mb-2">{service.shortDescription}</p>
                 <div className="flex items-center justify-between">
                   <div className="flex items-center space-x-2">
                     <StarIcon className="w-4 h-4 text-accent-400" />
                     <span className="text-sm text-secondary">{service.rating}</span>
                     <span className="text-sm text-light-500">({service.reviewCount})</span>
                   </div>
                   <span className="text-lg font-bold text-primary-500">${service.price}</span>
                 </div>
               </div>
             </div>
           </div>
         ))}
       </div>
    </div>
  );
};

// Componente de Ofertas Especiales
const PromotionsSection: React.FC = () => {
  return (
    <div className="mb-6">
             <div className="px-4 mb-3">
         <h2 className="text-xl font-bold text-primary">Ofertas Especiales</h2>
         <p className="text-sm text-secondary">Descuentos y promociones por tiempo limitado</p>
       </div>
       
       <div className="px-4">
         <div className="bg-gradient-to-r from-accent-500 to-accent-600 rounded-xl p-4 text-white shadow-lg">
           <div className="flex items-center justify-between mb-3">
             <div>
               <h3 className="font-bold text-lg">¡20% OFF!</h3>
               <p className="text-accent-100">En cambio de aceite</p>
             </div>
             <div className="text-right">
               <span className="text-2xl font-bold">$36</span>
               <p className="text-accent-100 text-sm line-through">$45</p>
             </div>
           </div>
           <p className="text-accent-100 text-sm mb-3">
             Válido hasta el 31 de enero
           </p>
           <button className="w-full bg-white text-accent-600 font-semibold py-2 px-4 rounded-lg hover:bg-accent-50 transition-colors shadow-sm">
             Aprovechar Oferta
           </button>
         </div>
       </div>
    </div>
  );
};

// Página Principal
const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleQuickBook = () => {
    navigate('/services');
  };

  const handleServiceSelect = (service: ServiceClient) => {
    navigate(`/services/${service.id}`);
  };

  const handleViewAllServices = () => {
    navigate('/services');
  };

  const handleViewAllAppointments = () => {
    navigate('/appointments');
  };

  return (
    <div>
      <HeroSection onQuickBook={handleQuickBook} />
      
      <UpcomingAppointment 
        appointment={mockUpcomingAppointment}
        onViewAll={handleViewAllAppointments}
      />
      
      <PopularServices 
        services={mockServices}
        onServiceSelect={handleServiceSelect}
        onViewAll={handleViewAllServices}
      />
      
      <PromotionsSection />
    </div>
  );
};

export default HomePage;
