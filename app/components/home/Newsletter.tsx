"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import { Container } from "@/app/components/ui";

export function Newsletter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", { name, email });
    setName("");
    setEmail("");
  };

  return (
    <section className="py-12 md:py-16 bg-[var(--color-gray-100)]">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex items-center gap-4 md:w-1/3">
            <div className="flex-shrink-0 p-3 bg-[var(--color-gray-200)] rounded-full">
              <Mail size={32} className="text-[var(--color-gray-600)]" />
            </div>
            <p className="text-lg text-[var(--color-gray-700)]">
              Fique por dentro das novidades e descontos!
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 md:flex-1"
          >
            <input
              type="text"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="flex-1 px-4 py-3 border border-[var(--color-gray-300)] rounded-md text-sm focus:outline-none focus:border-[var(--color-gray-500)]"
              required
            />
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 border border-[var(--color-gray-300)] rounded-md text-sm focus:outline-none focus:border-[var(--color-gray-500)]"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[var(--color-gray-800)] hover:bg-[var(--color-gray-900)] text-white font-medium rounded-md transition-colors whitespace-nowrap"
            >
              Enviar
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
