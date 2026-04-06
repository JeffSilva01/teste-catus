import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container, Button, Section } from "@/app/components/ui";

export function Hero() {
  return (
    <Section background="primary" className="relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <Container className="relative">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
              O melhor para seu gato você encontra aqui
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/80 max-w-xl mx-auto lg:mx-0">
              Rações de qualidade, medicamentos, camas confortáveis, arranhadores
              e muito mais para o bem-estar do seu felino.
            </p>
            <div className="mt-8">
              <Button
                size="lg"
                variant="secondary"
                className="shadow-lg hover:shadow-xl"
              >
                Ver produtos
                <ArrowRight size={20} />
              </Button>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="relative w-full max-w-md mx-auto aspect-square">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl" />
              <Image
                src="/hero-cat.png"
                alt="Gato feliz"
                fill
                className="object-contain relative z-10"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
