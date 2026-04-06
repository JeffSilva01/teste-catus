import type { ApiProduct } from "@/app/types";

const API_BASE_URL = "https://fakestoreapi.com";

export async function fetchProducts(): Promise<ApiProduct[]> {
  const res = await fetch(`${API_BASE_URL}/products`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}
