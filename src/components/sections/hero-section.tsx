import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="w-full py-20 md:py-32 lg:py-40 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="flex flex-col items-center space-y-6">
          <div className="inline-block rounded-lg bg-accent/50 px-3 py-1 text-sm text-primary">
            Oftalmologia Especializada
          </div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline text-primary">
            O futuro da sua visão começa aqui
          </h1>
          <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl">
            Há 18 anos cuidando da sua saúde ocular com excelência e dedicação.
          </p>
          <Button asChild size="xl" className="shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-primary/40 active:scale-95 btn-agendar-consulta">
            <a href="#contact">
              <Eye className="mr-2 h-6 w-6" />
              Agendar Consulta
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
