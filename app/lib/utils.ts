import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

export function formatInstallment(price: number, installments: number = 5): string {
  const installmentValue = price / installments;
  return `${installments}x de ${formatPrice(installmentValue)} sem juros`;
}
