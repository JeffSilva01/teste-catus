import type { NavItem, FooterColumn, Product } from "@/app/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Início", href: "/" },
  { label: "Produtos", href: "/produtos" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
];

export const MENU_ITEMS: NavItem[] = [
  { label: "Vestibulum porta", href: "/categoria/vestibulum-porta" },
  { label: "Nulla tristique", href: "/categoria/nulla-tristique" },
  { label: "Etiam tincidunt", href: "/categoria/etiam-tincidunt" },
  { label: "Donec nunc", href: "/categoria/donec-nunc" },
  { label: "Etiam varius", href: "/categoria/etiam-varius" },
  { label: "Praesent in", href: "/categoria/praesent-in" },
  { label: "Sed in felis", href: "/categoria/sed-in-felis" },
  { label: "Donec interdum", href: "/categoria/donec-interdum" },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Institucional",
    links: [
      { label: "Sobre nós", href: "/sobre" },
      { label: "Dolor sit amet", href: "/dolor" },
      { label: "Consectetur", href: "/consectetur" },
      { label: "Adipiscing elit", href: "/adipiscing" },
      { label: "Aliquam", href: "/aliquam" },
      { label: "Metus sapien", href: "/metus-sapien" },
    ],
  },
  {
    title: "Dúvidas",
    links: [
      { label: "Fale Conosco", href: "/contato" },
      { label: "Comunicados", href: "/comunicados" },
      { label: "Política de Troca e Devolução", href: "/troca-devolucao" },
      { label: "Como Comprar", href: "/como-comprar" },
    ],
  },
];

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Aliquam congue nisl ele ac ligula convallis, luctus blandit augue.",
    price: 238.41,
    originalPrice: 582.90,
    discount: 15,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop",
    rating: 4,
  },
  {
    id: "2",
    name: "Aliquam congue nisl ele ac ligula convallis, luctus blandit augue.",
    price: 189.90,
    originalPrice: 246.90,
    discount: 23,
    image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=400&fit=crop",
    rating: 5,
  },
  {
    id: "3",
    name: "Aliquam congue nisl ele ac ligula convallis, luctus blandit augue.",
    price: 89.90,
    originalPrice: 98.90,
    discount: 9,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    rating: 3,
  },
  {
    id: "4",
    name: "Aliquam congue nisl ele ac ligula convallis, luctus blandit augue.",
    price: 159.90,
    originalPrice: 199.90,
    discount: 20,
    image: "https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=400&h=400&fit=crop",
    rating: 4,
  },
  {
    id: "5",
    name: "Aliquam congue nisl ele ac ligula convallis, luctus blandit augue.",
    price: 299.90,
    originalPrice: 349.90,
    discount: 14,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop",
    rating: 5,
  },
  {
    id: "6",
    name: "Aliquam congue nisl ele ac ligula convallis, luctus blandit augue.",
    price: 79.90,
    originalPrice: 99.90,
    discount: 20,
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&h=400&fit=crop",
    rating: 4,
  },
  {
    id: "7",
    name: "Aliquam congue nisl ele ac ligula convallis, luctus blandit augue.",
    price: 449.90,
    originalPrice: 599.90,
    discount: 25,
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=400&h=400&fit=crop",
    rating: 5,
  },
  {
    id: "8",
    name: "Aliquam congue nisl ele ac ligula convallis, luctus blandit augue.",
    price: 129.90,
    originalPrice: 159.90,
    discount: 19,
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=400&h=400&fit=crop",
    rating: 4,
  },
];

export const HERO_SLIDES = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&h=600&fit=crop",
    alt: "Sala de estar moderna com sofá bege",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1920&h=600&fit=crop",
    alt: "Decoração minimalista",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=1920&h=600&fit=crop",
    alt: "Ambiente confortável",
  },
];

export const CONTACT_INFO = {
  whatsapp: "(11) 99999-9999",
  phone: "(11) 1234-5678",
  phoneRio: "(21) 1234-5678",
  email: "contato@catus.com.br",
  hours: "Segunda a sexta das 8h às 17h",
};
