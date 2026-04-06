import { ArrowRight } from "lucide-react";
import { Container, Button } from "@/app/components/ui";
import { ProductCard } from "./ProductCard";
import { fetchProducts } from "@/app/lib/api";

export const dynamic = 'force-dynamic';

export async function ProductGrid() {
  const products = await fetchProducts();

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[var(--color-background)]">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text)]">
            Mais Vendidos
          </h2>
          <Button variant="ghost" className="self-start sm:self-auto">
            Ver mais
            <ArrowRight size={18} />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
