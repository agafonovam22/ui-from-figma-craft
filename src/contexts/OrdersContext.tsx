import React, { createContext, useContext, useState, useEffect } from 'react';

export interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image_url: string;
}

export interface Order {
  id: string;
  date: string;
  status: 'Обрабатывается' | 'В пути' | 'Доставлен' | 'Отменен';
  total: number;
  items: OrderItem[];
  userEmail: string;
}

interface OrdersContextType {
  orders: Order[];
  addOrder: (order: Omit<Order, 'id' | 'date' | 'userEmail'>) => void;
  getUserOrders: (userEmail: string) => Order[];
}

const OrdersContext = createContext<OrdersContextType | undefined>(undefined);

export const OrdersProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    // Load orders from localStorage on app start
    const savedOrders = localStorage.getItem('userOrders');
    if (savedOrders) {
      try {
        const parsedOrders = JSON.parse(savedOrders);
        setOrders(parsedOrders);
      } catch (error) {
        console.error('Error parsing saved orders:', error);
        localStorage.removeItem('userOrders');
      }
    } else {
      // Initialize with some mock orders for different users
      const mockOrders: Order[] = [
        {
          id: 'ORD001',
          date: '2024-01-15',
          status: 'Доставлен',
          total: 125000,
          userEmail: 'buyer@example.com',
          items: [
            { id: '1', name: 'Тормозные колодки передние', price: 45000, quantity: 2, image_url: '/placeholder.svg' },
            { id: '2', name: 'Масляный фильтр', price: 15000, quantity: 1, image_url: '/placeholder.svg' },
            { id: '3', name: 'Свечи зажигания', price: 20000, quantity: 4, image_url: '/placeholder.svg' }
          ]
        },
        {
          id: 'ORD002',
          date: '2024-01-10',
          status: 'В пути',
          total: 89000,
          userEmail: 'buyer@example.com',
          items: [
            { id: '4', name: 'Амортизаторы задние', price: 67000, quantity: 2, image_url: '/placeholder.svg' },
            { id: '5', name: 'Тормозная жидкость', price: 22000, quantity: 1, image_url: '/placeholder.svg' }
          ]
        },
        {
          id: 'ORD003',
          date: '2024-01-05',
          status: 'Обрабатывается',
          total: 45000,
          userEmail: 'buyer@example.com',
          items: [
            { id: '6', name: 'Воздушный фильтр', price: 45000, quantity: 1, image_url: '/placeholder.svg' }
          ]
        }
      ];
      setOrders(mockOrders);
      localStorage.setItem('userOrders', JSON.stringify(mockOrders));
    }
  }, []);

  const addOrder = (orderData: Omit<Order, 'id' | 'date' | 'userEmail'>) => {
    const newOrder: Order = {
      ...orderData,
      id: `ORD${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
      userEmail: '' // Will be set when called with user context
    };

    const updatedOrders = [...orders, newOrder];
    setOrders(updatedOrders);
    localStorage.setItem('userOrders', JSON.stringify(updatedOrders));
  };

  const getUserOrders = (userEmail: string): Order[] => {
    return orders.filter(order => order.userEmail === userEmail);
  };

  return (
    <OrdersContext.Provider value={{ orders, addOrder, getUserOrders }}>
      {children}
    </OrdersContext.Provider>
  );
};

export const useOrders = () => {
  const context = useContext(OrdersContext);
  if (context === undefined) {
    throw new Error('useOrders must be used within an OrdersProvider');
  }
  return context;
};