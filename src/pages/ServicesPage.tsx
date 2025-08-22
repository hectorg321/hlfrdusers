import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  MagnifyingGlassIcon, 
  StarIcon,
  ClockIcon,
  WrenchScrewdriverIcon,
  PlusIcon
} from '@heroicons/react/24/outline';
import { ServiceClient, ServiceCategory } from '@/types';

// Mock data para demostración
const mockCategories: ServiceCategory[] = [
  { id: '1', name: 'Mantenimiento', description: 'Servicios de mantenimiento preventivo', color: '#3B82F6', icon: 'wrench' },
  { id: '2', name: 'Seguridad', description: 'Sistema de frenos y seguridad', color: '#EF4444', icon: 'stop' },
  { id: '3', name: 'Limpieza', description: 'Limpieza interior y exterior', color: '#10B981', icon: 'sparkles' },
  { id: '4', name: 'Diagnóstico', description: 'Diagnóstico computarizado', color: '#8B5CF6', icon: 'computer' },
];

const mockServices: ServiceClient[] = [
  {
    id: '1',
    name: 'Cambio de Aceite',
    description: 'Cambio completo de aceite y filtro con lubricante de alta calidad',
    shortDescription: 'Mantenimiento preventivo del motor',
    duration: 45,
    price: 45.00,
    category: mockCategories[0],
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
    category: mockCategories[1],
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
    category: mockCategories[2],
    imageUrl: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400',
    gallery: [],
    features: ['Aspirado profundo', 'Limpieza de tapicería', 'Aromatización'],
    requirements: [],
    isPopular: false,
    rating: 4.7,
    reviewCount: 56,
    estimatedTime: '1-1.5 horas'
  },
  {
    id: '4',
    name: 'Diagnóstico Computarizado',
    description: 'Análisis completo del sistema electrónico del vehículo',
    shortDescription: 'Identificación de problemas',
    duration: 30,
    price: 35.00,
    category: mockCategories[3],
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
    gallery: [],
    features: ['Escaneo completo', 'Reporte detallado', 'Recomendaciones'],
    requirements: [],
    isPopular: false,
    rating: 4.6,
    reviewCount: 42,
    estimatedTime: '20-30 min'
  },
];

const ServicesPage: React.FC = () => {
  const navigate = useNavigate();
  console.log('ServicesPage renderizada, navigate function:', !!navigate);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating'>('name');

  // Filtrar servicios
  const filteredServices = mockServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category.id === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Ordenar servicios
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.price - b.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return a.name.localeCompare(b.name);
    }
  });

  const handleServiceSelect = (service: ServiceClient) => {
    navigate(`/services/${service.id}`);
  };

  const handleBookService = (service: ServiceClient) => {
    console.log('Intentando navegar a test-book con servicio:', service);
    navigate(`/test-book`, { 
      state: { selectedService: service } 
    });
  };

  return (
    <div className="p-4 space-y-6">
             {/* Header */}
       <div className="text-center">
         <h1 className="text-2xl font-bold text-primary mb-2">Nuestros Servicios</h1>
         <p className="text-secondary mb-4">Encuentra el servicio perfecto para tu vehículo</p>
         <button
           onClick={() => {
             console.log('Botón principal Reservar Servicio clickeado');
             navigate('/test-book');
           }}
           className="btn-primary flex items-center mx-auto"
         >
           <PlusIcon className="w-4 h-4 mr-2" />
           Reservar Servicio
         </button>
       </div>

       {/* Barra de búsqueda */}
       <div className="relative">
         <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-light-500" />
         <input
           type="text"
           placeholder="Buscar servicios..."
           value={searchTerm}
           onChange={(e) => setSearchTerm(e.target.value)}
           className="input-field"
         />
       </div>

      {/* Filtros */}
      <div className="space-y-4">
                 {/* Categorías */}
         <div>
           <h3 className="text-sm font-medium text-primary mb-3">Categorías</h3>
           <div className="flex flex-wrap gap-2">
             <button
               onClick={() => setSelectedCategory('all')}
               className={`px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                 selectedCategory === 'all'
                   ? 'bg-primary-500 text-white'
                   : 'bg-light-200 text-secondary hover:bg-light-300'
               }`}
             >
               Todos
             </button>
             {mockCategories.map((category) => (
               <button
                 key={category.id}
                 onClick={() => setSelectedCategory(category.id)}
                 className={`px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                   selectedCategory === category.id
                     ? 'bg-primary-500 text-white'
                     : 'bg-light-200 text-secondary hover:bg-light-300'
                 }`}
               >
                 {category.name}
               </button>
             ))}
           </div>
         </div>

         {/* Ordenamiento */}
         <div className="flex items-center justify-between">
           <h3 className="text-sm font-medium text-primary">Ordenar por</h3>
           <select
             value={sortBy}
             onChange={(e) => setSortBy(e.target.value as 'name' | 'price' | 'rating')}
             className="input-field"
           >
            <option value="name">Nombre</option>
            <option value="price">Precio</option>
            <option value="rating">Calificación</option>
          </select>
        </div>
      </div>

      {/* Lista de servicios */}
      <div className="space-y-4">
                 {sortedServices.length === 0 ? (
           <div className="text-center py-8">
             <WrenchScrewdriverIcon className="mx-auto h-12 w-12 text-light-400 mb-3" />
             <h3 className="text-lg font-medium text-primary mb-2">
               No se encontraron servicios
             </h3>
             <p className="text-secondary">
               Intenta ajustar los filtros de búsqueda
             </p>
           </div>
         ) : (
           sortedServices.map((service) => (
             <div
               key={service.id}
               className="card hover:shadow-md transition-shadow"
             >
               <div className="flex items-start space-x-4">
                 {/* Imagen del servicio */}
                 <div className="w-20 h-20 bg-light-200 rounded-lg flex-shrink-0">
                   {service.imageUrl && (
                     <img 
                       src={service.imageUrl} 
                       alt={service.name}
                       className="w-full h-full object-cover rounded-lg"
                     />
                   )}
                 </div>

                 {/* Información del servicio */}
                 <div className="flex-1 min-w-0">
                   <div className="flex items-start justify-between mb-2">
                     <div>
                       <h3 className="font-semibold text-primary mb-1">{service.name}</h3>
                       <p className="text-sm text-secondary mb-2">{service.shortDescription}</p>
                     </div>
                     <span className="text-lg font-bold text-primary-500">${service.price}</span>
                   </div>

                   {/* Categoría y calificación */}
                   <div className="flex items-center justify-between mb-3">
                     <div className="flex items-center space-x-2">
                       <span
                         className="px-2 py-1 rounded-full text-xs font-medium"
                         style={{
                           backgroundColor: `${service.category.color}20`,
                           color: service.category.color
                         }}
                       >
                         {service.category.name}
                       </span>
                       <div className="flex items-center space-x-1">
                         <StarIcon className="w-4 h-4 text-accent-400" />
                         <span className="text-sm text-secondary">{service.rating}</span>
                         <span className="text-sm text-light-500">({service.reviewCount})</span>
                       </div>
                     </div>
                     <div className="flex items-center space-x-1 text-sm text-light-500">
                       <ClockIcon className="w-4 h-4" />
                       <span>{service.estimatedTime}</span>
                     </div>
                   </div>

                   {/* Características */}
                   <div className="mb-3">
                     <div className="flex flex-wrap gap-1">
                       {service.features.slice(0, 3).map((feature, index) => (
                         <span
                           key={index}
                           className="px-2 py-1 bg-light-200 text-xs text-secondary rounded"
                         >
                           {feature}
                         </span>
                       ))}
                       {service.features.length > 3 && (
                         <span className="px-2 py-1 bg-light-200 text-xs text-secondary rounded">
                           +{service.features.length - 3} más
                         </span>
                       )}
                     </div>
                   </div>

                   {/* Botones de acción */}
                   <div className="flex space-x-2">
                     <button
                       onClick={() => handleServiceSelect(service)}
                       className="flex-1 btn-secondary"
                     >
                       Ver Detalles
                     </button>
                     <button
                       onClick={() => handleBookService(service)}
                       className="flex-1 btn-primary"
                     >
                       Reservar
                     </button>
                   </div>
                 </div>
               </div>
             </div>
           ))
         )}
      </div>
    </div>
  );
};

export default ServicesPage;
