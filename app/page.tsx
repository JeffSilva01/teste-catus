import { HeroSlider, ProductCarousel, ProductGrid, Newsletter } from "@/app/components/home";
import { fetchProducts } from "@/app/lib/api";

export const dynamic = 'force-dynamic';

export default async function Home() {
  const products = await fetchProducts();

  return (
    <>
      <HeroSlider />
      <ProductCarousel products={products} />
      <ProductGrid products={products} />
      <Newsletter />
    </>
  );
}
