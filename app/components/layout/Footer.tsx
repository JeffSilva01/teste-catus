import { FaInstagram, FaFacebookF } from "react-icons/fa";
import Link from "next/link";
import { Container } from "@/app/components/ui";
import { FOOTER_COLUMNS, CONTACT_INFO } from "@/app/lib/constants";

export function Footer() {
  return (
    <footer className="bg-[var(--color-gray-800)] text-white">
      <Container>
        <div className="py-12 md:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <Link href="/" className="text-3xl font-bold text-white">
              Catus
            </Link>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title}>
              <h3 className="text-base font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-base font-semibold mb-4">Atendimento</h3>
            <ul className="space-y-3 text-sm">
              <li className="text-gray-400">
                <span className="text-white block text-xs uppercase tracking-wide mb-1">
                  WhatsApp
                </span>
                <a
                  href={`https://wa.me/55${CONTACT_INFO.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {CONTACT_INFO.whatsapp}
                </a>
              </li>
              <li className="text-gray-400">
                <span className="text-white block text-xs uppercase tracking-wide mb-1">
                  Telefones
                </span>
                <div>São Paulo: {CONTACT_INFO.phone}</div>
                <div>Rio de Janeiro: {CONTACT_INFO.phoneRio}</div>
              </li>
              <li className="text-gray-400">
                <span className="text-white block text-xs uppercase tracking-wide mb-1">
                  Horário
                </span>
                <div>{CONTACT_INFO.hours}</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Catus. Todos os direitos reservados.</p>
        </div>
      </Container>
    </footer>
  );
}
