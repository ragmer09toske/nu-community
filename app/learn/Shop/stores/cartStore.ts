import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, Product } from '../../types';

interface CartState {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: (product: Product) => {
        const existingCartItem = get().cart.find(item => item.id === product.id);

        if (existingCartItem) {
          set(state => ({
            cart: state.cart.map(item =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }));
        } else {
          set(state => ({
            cart: [...state.cart, { ...product, quantity: 1 }],
          }));
        }
      },

      removeFromCart: (productId: string) => {
        set(state => ({
          cart: state.cart.filter(item => item.id !== productId),
        }));
      },

      clearCart: () => {
        set({ cart: [] });
      },

      getTotalItems: () => {
        return get().cart.reduce((acc, item) => acc + item.quantity, 0);
      },

      getTotalPrice: () => {
        return get().cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
      },
    }),
    {
      name: 'cart-storage', // Name of the item in storage (localStorage key)
      getStorage: () => localStorage, // You can change this to sessionStorage if you prefer
    }
  )
);
