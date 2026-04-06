"use client";

import { Search, Heart, ShoppingCart, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Container } from "@/app/components/ui";
import { useCart } from "@/app/context/CartContext";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <header className="bg-white sticky top-0 z-50">
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl md:text-3xl font-bold text-[var(--color-gray-800)]"
            >
              Catus
            </Link>
          </div>

          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="flex w-full">
              <input
                type="text"
                placeholder="O que você está buscando?"
                className="flex-1 px-4 py-2 border border-[var(--color-gray-300)] rounded-l-md text-sm focus:outline-none focus:border-[var(--color-gray-500)]"
              />
              <button className="px-4 py-2 bg-[var(--color-gray-500)] text-white rounded-r-md hover:bg-[var(--color-gray-600)] transition-colors text-sm font-medium">
                Buscar
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <button
              aria-label="Busca"
              className="p-2 text-[var(--color-gray-600)] hover:text-[var(--color-gray-800)] transition-colors md:hidden"
            >
              <Search size={20} />
            </button>

            <button
              aria-label="Favoritos"
              className="p-2 text-[var(--color-gray-600)] hover:text-[var(--color-gray-800)] transition-colors"
            >
              <Heart size={20} />
            </button>

            <button
              aria-label="Carrinho"
              className="p-2 text-[var(--color-gray-600)] hover:text-[var(--color-gray-800)] transition-colors relative"
            >
              <ShoppingCart size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[var(--color-gray-800)] text-white text-xs rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            <button
              aria-label="Menu"
              className="p-2 text-[var(--color-gray-600)] hover:text-[var(--color-gray-800)] transition-colors lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </Container>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[var(--color-gray-200)]">
          <Container>
            <div className="py-4">
              <div className="flex mb-4">
                <input
                  type="text"
                  placeholder="O que você está buscando?"
                  className="flex-1 px-4 py-2 border border-[var(--color-gray-300)] rounded-l-md text-sm focus:outline-none focus:border-[var(--color-gray-500)]"
                />
                <button className="px-4 py-2 bg-[var(--color-gray-500)] text-white rounded-r-md hover:bg-[var(--color-gray-600)] transition-colors text-sm font-medium">
                  Buscar
                </button>
              </div>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
