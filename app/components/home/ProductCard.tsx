"use client";

import Image from "next/image";
import { ShoppingCart, Check } from "lucide-react";
import { cn, formatPrice, formatInstallment } from "@/app/lib/utils";
import { useCart } from "@/app/context/CartContext";
import type { Product, ApiProduct } from "@/app/types";

type ProductType = Product | ApiProduct;

interface ProductCardProps {
  product: ProductType;
  className?: string;
}

function getProductName(product: ProductType): string {
  return "name" in product ? product.name : product.title;
}

function getProductId(product: ProductType): string {
  return String(product.id);
}

function getProductImage(product: ProductType): string {
  return product.image;
}

function getProductPrice(product: ProductType): number {
  return product.price;
}

function getProductOriginalPrice(product: ProductType): number | undefined {
  return "originalPrice" in product ? product.originalPrice : undefined;
}

function getProductDiscount(product: ProductType): number | undefined {
  return "discount" in product ? product.discount : undefined;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const { isInCart, addToCart, removeFromCart } = useCart();
  const productId = getProductId(product);
  const added = isInCart(productId);

  const handleToggle = () => {
    if (added) {
      removeFromCart(productId);
    } else {
      addToCart(productId);
    }
  };

  const productName = getProductName(product);
  const productImage = getProductImage(product);
  const price = getProductPrice(product);
  const originalPrice = getProductOriginalPrice(product);
  const discount = getProductDiscount(product);

  return (
    <div
      className={cn(
        "group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col",
        className
      )}
    >
      <div className="relative aspect-square bg-[var(--color-gray-100)] overflow-hidden">
        {discount && (
          <span className="absolute top-3 left-3 z-10 bg-[var(--color-gray-200)] text-[var(--color-gray-800)] text-xs font-medium px-2 py-1 rounded-full">
            {discount}% OFF
          </span>
        )}
        <Image
          src={productImage}
          alt={productName}
          fill
          className="object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-sm text-[var(--color-gray-600)] line-clamp-2 min-h-[2.5rem] mb-2">
          {productName}
        </h3>

        {originalPrice && (
          <p className="text-sm text-[var(--color-gray-400)] line-through mb-1">
            de {formatPrice(originalPrice)}
          </p>
        )}

        <p className="text-xl font-bold text-[var(--color-gray-800)]">
          {formatPrice(price)}
        </p>

        <p className="text-sm text-[var(--color-gray-600)] mt-1">
          {formatInstallment(price)}
        </p>

        <button
          onClick={handleToggle}
          className={cn(
            "mt-auto pt-4 flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-medium rounded-md transition-colors",
            added
              ? "bg-green-500 hover:bg-green-600 text-white"
              : "bg-[var(--color-gray-500)] hover:bg-[var(--color-gray-600)] text-white"
          )}
        >
          {added ? (
            <>
              <Check size={18} />
              Adicionado
            </>
          ) : (
            <>
              <ShoppingCart size={18} />
              Adicionar ao carrinho
            </>
          )}
        </button>
      </div>
    </div>
  );
}
