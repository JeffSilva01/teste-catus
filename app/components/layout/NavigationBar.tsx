"use client";

import Link from "next/link";
import { Container } from "@/app/components/ui";
import { MENU_ITEMS } from "@/app/lib/constants";

export function NavigationBar() {
  return (
    <nav className="bg-white border-t border-[var(--color-gray-200)]">
      <Container>
        <div className="flex items-center justify-between py-3 overflow-x-auto scrollbar-hide">
          {MENU_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-[var(--color-gray-600)] hover:text-[var(--color-gray-800)] transition-colors whitespace-nowrap px-3"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </Container>
    </nav>
  );
}
