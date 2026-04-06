import { HeroSlider, ProductCarousel, ProductGrid, Newsletter } from "@/app/components/home";

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <>
      <HeroSlider />
      <ProductCarousel />
      <ProductGrid />
      <Newsletter />
    </>
  );
}
