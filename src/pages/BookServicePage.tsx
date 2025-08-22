import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  CalendarIcon, 
  ClockIcon, 
  WrenchScrewdriverIcon,
  TruckIcon,
  UserIcon,
  PhoneIcon,
  EnvelopeIcon,
  CheckCircleIcon,
  ArrowLeftIcon,
  StarIcon
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

interface BookingForm {
  selectedService: ServiceClient | null;
  selectedDate: string;
  selectedTime: string;
  vehicleInfo: {
    brand: string;
    model: string;
    year: string;
    plate: string;
    color: string;
  };
  customerNotes: string;
  contactInfo: {
    name: string;
    phone: string;
    email: string;
  };
}

const BookServicePage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log('BookServicePage renderizada, location state:', location.state);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Verificar si hay un servicio preseleccionado
  useEffect(() => {
    console.log('useEffect ejecutado, location.state:', location.state);
    if (location.state?.selectedService) {
      const selectedService = location.state.selectedService as ServiceClient;
      console.log('Servicio preseleccionado encontrado:', selectedService);
      setBookingForm(prev => ({ ...prev, selectedService }));
      setCurrentStep(2); // Ir directamente al paso 2
    }
  }, [location.state]);
  
  const [bookingForm, setBookingForm] = useState<BookingForm>({
    selectedService: null,
    selectedDate: '',
    selectedTime: '',
    vehicleInfo: {
      brand: '',
      model: '',
      year: '',
      plate: '',
      color: ''
    },
    customerNotes: '',
    contactInfo: {
      name: '',
      phone: '',
      email: ''
    }
  });

  // Horarios disponibles
  const availableTimes = [
    '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
    '11:00', '11:30', '12:00', '12:30', '13:00', '13:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
    '17:00', '17:30'
  ];

  // Filtrar servicios
  const filteredServices = mockServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category.id === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleServiceSelection = (service: ServiceClient) => {
    setBookingForm(prev => ({ ...prev, selectedService: service }));
    setCurrentStep(2);
  };

  const handleDateSelection = (date: string) => {
    setBookingForm(prev => ({ ...prev, selectedDate: date }));
  };

  const handleTimeSelection = (time: string) => {
    setBookingForm(prev => ({ ...prev, selectedTime: time }));
  };

  const handleVehicleInfoChange = (field: keyof typeof bookingForm.vehicleInfo, value: string) => {
    setBookingForm(prev => ({
      ...prev,
      vehicleInfo: { ...prev.vehicleInfo, [field]: value }
    }));
  };

  const handleContactInfoChange = (field: keyof typeof bookingForm.contactInfo, value: string) => {
    setBookingForm(prev => ({
      ...prev,
      contactInfo: { ...prev.contactInfo, [field]: value }
    }));
  };

  const handleSubmit = () => {
    // Aquí se enviaría la reserva al backend
    console.log('Reserva enviada:', bookingForm);
    setCurrentStep(4); // Mostrar confirmación
  };

  const canProceedToStep3 = () => {
    return bookingForm.selectedService && bookingForm.selectedDate && bookingForm.selectedTime;
  };

  const canSubmit = () => {
    return Object.values(bookingForm.vehicleInfo).every(value => value.trim() !== '') &&
           Object.values(bookingForm.contactInfo).every(value => value.trim() !== '');
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      {[1, 2, 3, 4].map((step) => (
        <div key={step} className="flex items-center">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
            currentStep >= step 
              ? 'bg-primary-500 text-white' 
              : 'bg-light-300 text-light-600'
          }`}>
            {step}
          </div>
          {step < 4 && (
            <div className={`w-16 h-0.5 mx-2 ${
              currentStep > step ? 'bg-primary-500' : 'bg-light-300'
            }`} />
          )}
        </div>
      ))}
    </div>
  );

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-primary mb-2">Selecciona un Servicio</h2>
        <p className="text-secondary">Elige el servicio que necesitas para tu vehículo</p>
      </div>

      {/* Filtros */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Buscar servicios..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-field"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="input-field sm:w-48"
          >
            <option value="all">Todas las categorías</option>
            {mockCategories.map(category => (
              <option key={category.id} value={category.id}>{category.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Lista de servicios */}
      <div className="grid gap-4">
        {filteredServices.map(service => (
          <div
            key={service.id}
            className="card p-4 hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => handleServiceSelection(service)}
          >
            <div className="flex items-start space-x-4">
              <img
                src={service.imageUrl}
                alt={service.name}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-1">{service.name}</h3>
                    <p className="text-secondary text-sm mb-2">{service.shortDescription}</p>
                    <div className="flex items-center space-x-4 text-sm text-light-600">
                      <span className="flex items-center">
                        <ClockIcon className="w-4 h-4 mr-1" />
                        {service.estimatedTime}
                      </span>
                      <span className="flex items-center">
                        <StarIcon className="w-4 h-4 mr-1 text-yellow-500" />
                        {service.rating} ({service.reviewCount})
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">${service.price}</div>
                    <div className="text-sm text-light-600">Precio fijo</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-primary mb-2">Selecciona Fecha y Hora</h2>
        <p className="text-secondary">Elige cuándo quieres que se realice el servicio</p>
      </div>

      {/* Servicio seleccionado */}
      {bookingForm.selectedService && (
        <div className="card p-4 mb-6">
          <div className="flex items-center space-x-3">
            <img
              src={bookingForm.selectedService.imageUrl}
              alt={bookingForm.selectedService.name}
              className="w-16 h-16 object-cover rounded-lg"
            />
            <div>
              <h3 className="text-lg font-semibold text-primary">{bookingForm.selectedService.name}</h3>
              <p className="text-secondary">{bookingForm.selectedService.shortDescription}</p>
              <div className="text-lg font-bold text-primary">${bookingForm.selectedService.price}</div>
            </div>
          </div>
        </div>
      )}

      {/* Selector de fecha */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-primary mb-2">
            <CalendarIcon className="w-5 h-5 inline mr-2" />
            Fecha del servicio
          </label>
          <input
            type="date"
            value={bookingForm.selectedDate}
            onChange={(e) => handleDateSelection(e.target.value)}
            min={new Date().toISOString().split('T')[0]}
            className="input-field"
          />
        </div>

        {/* Selector de hora */}
        <div>
          <label className="block text-sm font-medium text-primary mb-2">
            <ClockIcon className="w-5 h-5 inline mr-2" />
            Hora del servicio
          </label>
          <div className="grid grid-cols-4 gap-2">
            {availableTimes.map(time => (
              <button
                key={time}
                onClick={() => handleTimeSelection(time)}
                className={`p-3 text-center rounded-lg border transition-colors ${
                  bookingForm.selectedTime === time
                    ? 'border-primary-500 bg-primary-50 text-primary-700'
                    : 'border-light-300 hover:border-primary-300'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Botones de navegación */}
      <div className="flex justify-between pt-6">
        <button
          onClick={() => setCurrentStep(1)}
          className="btn-secondary flex items-center"
        >
          <ArrowLeftIcon className="w-4 h-4 mr-2" />
          Atrás
        </button>
        <button
          onClick={() => setCurrentStep(3)}
          disabled={!canProceedToStep3()}
          className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continuar
        </button>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-primary mb-2">Información del Vehículo y Contacto</h2>
        <p className="text-secondary">Completa los datos para confirmar tu reserva</p>
      </div>

      {/* Información del vehículo */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-primary mb-4 flex items-center">
          <TruckIcon className="w-5 h-5 mr-2" />
          Información del Vehículo
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-primary mb-2">Marca</label>
            <input
              type="text"
              value={bookingForm.vehicleInfo.brand}
              onChange={(e) => handleVehicleInfoChange('brand', e.target.value)}
              placeholder="Ej: Toyota, Honda, Ford..."
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-primary mb-2">Modelo</label>
            <input
              type="text"
              value={bookingForm.vehicleInfo.model}
              onChange={(e) => handleVehicleInfoChange('model', e.target.value)}
              placeholder="Ej: Corolla, Civic, Fiesta..."
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-primary mb-2">Año</label>
            <input
              type="text"
              value={bookingForm.vehicleInfo.year}
              onChange={(e) => handleVehicleInfoChange('year', e.target.value)}
              placeholder="Ej: 2020"
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-primary mb-2">Placa</label>
            <input
              type="text"
              value={bookingForm.vehicleInfo.plate}
              onChange={(e) => handleVehicleInfoChange('plate', e.target.value)}
              placeholder="Ej: ABC-123"
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-primary mb-2">Color</label>
            <input
              type="text"
              value={bookingForm.vehicleInfo.color}
              onChange={(e) => handleVehicleInfoChange('color', e.target.value)}
              placeholder="Ej: Rojo, Azul, Blanco..."
              className="input-field"
            />
          </div>
        </div>
      </div>

      {/* Información de contacto */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-primary mb-4 flex items-center">
          <UserIcon className="w-5 h-5 mr-2" />
          Información de Contacto
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-primary mb-2">Nombre Completo</label>
            <input
              type="text"
              value={bookingForm.contactInfo.name}
              onChange={(e) => handleContactInfoChange('name', e.target.value)}
              placeholder="Tu nombre completo"
              className="input-field"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-primary mb-2">Teléfono</label>
              <input
                type="tel"
                value={bookingForm.contactInfo.phone}
                onChange={(e) => handleContactInfoChange('phone', e.target.value)}
                placeholder="Tu número de teléfono"
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-primary mb-2">Email</label>
              <input
                type="email"
                value={bookingForm.contactInfo.email}
                onChange={(e) => handleContactInfoChange('email', e.target.value)}
                placeholder="Tu correo electrónico"
                className="input-field"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Notas adicionales */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-primary mb-4">Notas Adicionales</h3>
        <textarea
          value={bookingForm.customerNotes}
          onChange={(e) => setBookingForm(prev => ({ ...prev, customerNotes: e.target.value }))}
          placeholder="Describe cualquier detalle especial o problema específico de tu vehículo..."
          rows={4}
          className="input-field"
        />
      </div>

      {/* Botones de navegación */}
      <div className="flex justify-between pt-6">
        <button
          onClick={() => setCurrentStep(2)}
          className="btn-secondary flex items-center"
        >
          <ArrowLeftIcon className="w-4 h-4 mr-2" />
          Atrás
        </button>
        <button
          onClick={handleSubmit}
          disabled={!canSubmit()}
          className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Confirmar Reserva
        </button>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="text-center space-y-6">
      <CheckCircleIcon className="w-20 h-20 text-green-500 mx-auto" />
      <div>
        <h2 className="text-2xl font-bold text-primary mb-2">¡Reserva Confirmada!</h2>
        <p className="text-secondary mb-6">
          Tu cita ha sido programada exitosamente. Recibirás una confirmación por email.
        </p>
      </div>

      {/* Resumen de la reserva */}
      <div className="card p-6 max-w-md mx-auto">
        <h3 className="text-lg font-semibold text-primary mb-4">Resumen de la Reserva</h3>
        <div className="space-y-3 text-left">
          <div className="flex justify-between">
            <span className="text-secondary">Servicio:</span>
            <span className="font-medium">{bookingForm.selectedService?.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-secondary">Fecha:</span>
            <span className="font-medium">{bookingForm.selectedDate}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-secondary">Hora:</span>
            <span className="font-medium">{bookingForm.selectedTime}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-secondary">Precio:</span>
            <span className="font-medium text-primary">${bookingForm.selectedService?.price}</span>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <button
          onClick={() => navigate('/appointments')}
          className="btn-primary w-full sm:w-auto"
        >
          Ver Mis Citas
        </button>
        <button
          onClick={() => navigate('/services')}
          className="btn-secondary w-full sm:w-auto"
        >
          Reservar Otro Servicio
        </button>
      </div>
    </div>
  );

  return (
    <div className="p-4 max-w-4xl mx-auto">
      {/* Header con botón de regreso */}
      <div className="mb-6">
        <button
          onClick={() => navigate(-1)}
          className="btn-secondary flex items-center mb-4"
        >
          <ArrowLeftIcon className="w-4 h-4 mr-2" />
          Volver
        </button>
        <h1 className="text-3xl font-bold text-primary">Reservar Servicio</h1>
      </div>

      {/* Versión simplificada temporal para testing */}
      <div className="card p-6 text-center">
        <h2 className="text-2xl font-bold text-primary mb-4">¡Página de Reserva Funcionando!</h2>
        <p className="text-secondary mb-4">
          Esta es una versión simplificada para probar la navegación.
        </p>
        {location.state?.selectedService && (
          <div className="bg-light-200 p-4 rounded-lg mb-4">
            <h3 className="font-semibold text-primary">Servicio Seleccionado:</h3>
            <p>{location.state.selectedService.name}</p>
            <p className="text-lg font-bold text-primary">${location.state.selectedService.price}</p>
          </div>
        )}
        <button
          onClick={() => navigate('/services')}
          className="btn-primary"
        >
          Volver a Servicios
        </button>
      </div>
    </div>
  );
};

export default BookServicePage;
