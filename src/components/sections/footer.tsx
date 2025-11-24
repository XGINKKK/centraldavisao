import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-primary/10 py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <a href="#" className="flex items-center transition-opacity hover:opacity-80">
            <Image src="https://i.imgur.com/UiDrrUn.jpeg" alt="Central da Visão Logo" width={160} height={42} />
          </a>
          <p className="text-sm text-foreground/60">
            &copy; {currentYear} Central da Visão. Todos os direitos reservados.
          </p>
          <nav className="flex gap-6">
            <a href="#about" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="#services" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Serviços
            </a>
            <a href="#contact" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Contato
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
