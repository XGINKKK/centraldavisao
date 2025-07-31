import { Eye } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <a href="#" className="flex items-center gap-2 font-bold text-lg text-primary">
                <Eye className="h-6 w-6" />
                <span className="font-headline">Central da Visão</span>
            </a>
          <p className="text-sm text-foreground/70">
            &copy; {currentYear} Central da Visão. Todos os direitos reservados.
          </p>
          <nav className="flex gap-4 sm:gap-6">
            <a href="#about" className="text-sm hover:underline underline-offset-4">
              Sobre
            </a>
            <a href="#services" className="text-sm hover:underline underline-offset-4">
              Serviços
            </a>
            <a href="#contact" className="text-sm hover:underline underline-offset-4">
              Contato
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
