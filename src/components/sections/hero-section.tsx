import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

export default function HeroSection() {
  return (
    <section 
      id="home" 
      className="relative w-full py-20 md:py-32 lg:py-40 bg-cover bg-center"
      style={{ 
        backgroundImage: "url('https://i.imgur.com/qdWhkzn.jpeg')",
      }}
    >
      <div className="absolute inset-0 bg-black/10" />
      <div className="container relative z-10 mx-auto px-4 md:px-6 flex justify-center text-center">
        <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-2xl max-w-2xl">
          <div className="inline-block rounded-lg bg-primary/10 px-4 py-2 text-sm text-primary font-medium border border-primary/20">
            Oftalmologia Especializada
          </div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline text-primary mt-4">
            O futuro da sua visão começa aqui
          </h1>
          <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl font-medium mt-4">
            Há 18 anos cuidando da sua saúde ocular com excelência e dedicação.
          </p>
          <Button asChild size="xl" className="shadow-lg btn-agendar-consulta mt-6">
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