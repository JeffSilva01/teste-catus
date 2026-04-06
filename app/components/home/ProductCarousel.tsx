"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/app/components/ui";
import { ProductCard } from "./ProductCard";
import { fetchProducts } from "@/app/lib/api";
import type { ApiProduct } from "@/app/types";

export function ProductCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [products, setProducts] = useState<ApiProduct[]>([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 280;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-12 md:py-16 bg-white">
      <Container>
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-gray-800)]">
            Oportunidades para economizar
          </h2>
          <div className="mt-3 w-16 h-0.5 bg-[var(--color-gray-400)] mx-auto" />
        </div>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 z-10 p-2 bg-white hover:bg-[var(--color-gray-100)] rounded-full shadow-md transition-colors hidden md:flex items-center justify-center"
            aria-label="Produtos anteriores"
          >
            <ChevronLeft size={24} className="text-[var(--color-gray-700)]" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4 px-2"
          >
            {products.map((product) => (
              <div key={product.id} className="flex-shrink-0 w-[220px] md:w-[260px]">
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 z-10 p-2 bg-white hover:bg-[var(--color-gray-100)] rounded-full shadow-md transition-colors hidden md:flex items-center justify-center"
            aria-label="Próximos produtos"
          >
            <ChevronRight size={24} className="text-[var(--color-gray-700)]" />
          </button>
        </div>
      </Container>
    </section>
  );
}
