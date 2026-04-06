"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  useEffect,
  type ReactNode,
} from "react";
import type { CartItem } from "@/app/types";

const CART_COOKIE_NAME = "catus_cart";
const COOKIE_EXPIRY_DAYS = 30;

interface CartContextType {
  items: CartItem[];
  totalItems: number;
  isHydrated: boolean;
  addToCart: (productId: string) => void;
  removeFromCart: (productId: string) => void;
  isInCart: (productId: string) => boolean;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    const cookieValue = parts.pop();
    return cookieValue ? cookieValue.split(";").shift() || null : null;
  }
  return null;
}

function setCookie(name: string, value: string, days: number): void {
  if (typeof document === "undefined") return;
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
}

function deleteCookie(name: string): void {
  if (typeof document === "undefined") return;
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
}

function parseCartCookie(): CartItem[] {
  const cookieValue = getCookie(CART_COOKIE_NAME);
  if (!cookieValue) return [];
  try {
    const parsed = JSON.parse(cookieValue);
    if (parsed.items && Array.isArray(parsed.items)) {
      return parsed.items;
    }
    return [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const cookieItems = parseCartCookie();
    setItems(cookieItems);
    setIsHydrated(true);
  }, []);

  const saveToCookie = useCallback((newItems: CartItem[]) => {
    if (newItems.length === 0) {
      deleteCookie(CART_COOKIE_NAME);
    } else {
      setCookie(CART_COOKIE_NAME, JSON.stringify({ items: newItems }), COOKIE_EXPIRY_DAYS);
    }
  }, []);

  const addToCart = useCallback(
    (productId: string) => {
      setItems((prev) => {
        if (prev.some((item) => item.productId === productId)) {
          return prev;
        }
        const newItems = [...prev, { productId, addedAt: new Date().toISOString() }];
        saveToCookie(newItems);
        return newItems;
      });
    },
    [saveToCookie]
  );

  const removeFromCart = useCallback(
    (productId: string) => {
      setItems((prev) => {
        const newItems = prev.filter((item) => item.productId !== productId);
        saveToCookie(newItems);
        return newItems;
      });
    },
    [saveToCookie]
  );

  const isInCart = useCallback(
    (productId: string) => {
      return items.some((item) => item.productId === productId);
    },
    [items]
  );

  const clearCart = useCallback(() => {
    setItems([]);
    saveToCookie([]);
  }, [saveToCookie]);

  const value = useMemo<CartContextType>(
    () => ({
      items,
      totalItems: items.length,
      isHydrated,
      addToCart,
      removeFromCart,
      isInCart,
      clearCart,
    }),
    [items, isHydrated, addToCart, removeFromCart, isInCart, clearCart]
  );

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextType {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
