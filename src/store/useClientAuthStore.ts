import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Customer } from '@/types';

interface ClientAuthState {
  customer: Customer | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

interface ClientAuthActions {
  login: (email: string, password: string) => Promise<boolean>;
  register: (customerData: any) => Promise<boolean>;
  logout: () => void;
  setCustomer: (customer: Customer) => void;
  setToken: (token: string) => void;
  clearError: () => void;
  setLoading: (loading: boolean) => void;
}

type ClientAuthStore = ClientAuthState & ClientAuthActions;

export const useClientAuthStore = create<ClientAuthStore>()(
  persist(
    (set) => ({
      // Estado inicial
      customer: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      // Acciones
      login: async (email: string, _password: string) => {
        set({ isLoading: true, error: null });
        
        try {
          // Aquí iría la llamada real a la API
          // Por ahora simulamos un login exitoso
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          const mockCustomer: Customer = {
            id: '1',
            firstName: 'Juan',
            lastName: 'Pérez',
            email: email,
            phone: '+1 234 567 890',
            createdAt: new Date(),
            updatedAt: new Date(),
          };
          
          const mockToken = 'mock-jwt-token-' + Date.now();
          
          set({
            customer: mockCustomer,
            token: mockToken,
            isAuthenticated: true,
            isLoading: false,
            error: null,
          });
          
          return true;
        } catch (error) {
          set({
            error: 'Error al iniciar sesión',
            isLoading: false,
          });
          return false;
        }
      },

      register: async (customerData: any) => {
        set({ isLoading: true, error: null });
        
        try {
          // Aquí iría la llamada real a la API
          // Por ahora simulamos un registro exitoso
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          const mockCustomer: Customer = {
            id: '1',
            firstName: customerData.firstName,
            lastName: customerData.lastName,
            email: customerData.email,
            phone: customerData.phone,
            createdAt: new Date(),
            updatedAt: new Date(),
          };
          
          const mockToken = 'mock-jwt-token-' + Date.now();
          
          set({
            customer: mockCustomer,
            token: mockToken,
            isAuthenticated: true,
            isLoading: false,
            error: null,
          });
          
          return true;
        } catch (error) {
          set({
            error: 'Error al registrar usuario',
            isLoading: false,
          });
          return false;
        }
      },

      logout: () => {
        set({
          customer: null,
          token: null,
          isAuthenticated: false,
          error: null,
        });
      },

      setCustomer: (customer: Customer) => {
        set({ customer });
      },

      setToken: (token: string) => {
        set({ token, isAuthenticated: true });
      },

      clearError: () => {
        set({ error: null });
      },

      setLoading: (loading: boolean) => {
        set({ isLoading: loading });
      },
    }),
    {
      name: 'client-auth-storage',
      partialize: (state) => ({
        customer: state.customer,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);
