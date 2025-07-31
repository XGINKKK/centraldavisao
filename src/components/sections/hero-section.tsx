import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

export default function HeroSection() {
  return (
    <section 
      id="home" 
      className="relative w-full py-20 md:py-32 lg:py-40 bg-cover bg-[30%_top] md:bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://i.imgur.com/9DQ4rW7.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0"></div>
      <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
        <div className="flex flex-col items-center space-y-6">
          <div className="inline-block rounded-lg bg-primary/20 px-4 py-2 text-sm text-primary-foreground backdrop-blur-sm border border-primary-foreground/20">
            Oftalmologia Especializada
          </div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline text-primary-foreground shadow-lg">
            O futuro da sua visão começa aqui
          </h1>
          <p className="mx-auto max-w-[700px] text-primary-foreground/90 md:text-xl font-medium">
            Há 18 anos cuidando da sua saúde ocular com excelência e dedicação.
          </p>
          <Button asChild size="xl" className="shadow-lg btn-agendar-consulta">
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
