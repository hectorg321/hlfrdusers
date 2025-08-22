// Tipos de usuario y autenticación
export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CustomerLoginRequest {
  email: string;
  password: string;
}

export interface CustomerRegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

// Tipos de vehículos
export interface Vehicle {
  id: string;
  customerId: string;
  brand: string;
  model: string;
  year: number;
  plate: string;
  color: string;
  vin?: string;
  isDefault: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Tipos de servicios
export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  color: string;
  icon: string;
}

export interface ServiceClient {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  duration: number; // en minutos
  price: number;
  category: ServiceCategory;
  imageUrl?: string;
  gallery: string[];
  features: string[];
  requirements: string[];
  isPopular: boolean;
  rating: number;
  reviewCount: number;
  estimatedTime: string;
}

// Tipos de citas
export interface ClientAppointment {
  id: string;
  service: ServiceClient;
  scheduledDate: string; // YYYY-MM-DD
  startTime: string; // HH:MM
  endTime: string; // HH:MM
  status: 'pending' | 'confirmed' | 'in-progress' | 'completed' | 'cancelled';
  vehicle: Vehicle;
  notes?: string;
  price: number;
  confirmationCode: string;
  canCancel: boolean;
  canReschedule: boolean;
  createdAt: Date;
  updatedAt: Date;
  workshop: {
    name: string;
    address: string;
    phone: string;
    whatsapp: string;
    coordinates: [number, number];
    workingHours: {
      monday: { isOpen: boolean; start: string; end: string };
      tuesday: { isOpen: boolean; start: string; end: string };
      wednesday: { isOpen: boolean; start: string; end: string };
      thursday: { isOpen: boolean; start: string; end: string };
      friday: { isOpen: boolean; start: string; end: string };
      saturday: { isOpen: boolean; start: string; end: string };
      sunday: { isOpen: boolean; start: string; end: string };
    };
  };
}

// Tipos de navegación
export interface NavigationItem {
  id: string;
  label: string;
  icon: string;
  path: string;
  badge?: number;
}

// Tipos de respuesta de API
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
