import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

export default function HeroSection() {
  return (
    <section 
      id="home" 
      className="relative w-full py-20 md:py-32 lg:py-40 bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: "url('https://i.imgur.com/qdWhkzn.jpeg')"
      }}
    >
      <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
        <div className="flex flex-col items-center space-y-6">
          <div className="inline-block rounded-lg bg-white/20 px-4 py-2 text-sm text-white backdrop-blur-sm border border-white/30">
            Oftalmologia Especializada
          </div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline text-white drop-shadow-lg">
            O futuro da sua visão começa aqui
          </h1>
          <p className="mx-auto max-w-[700px] text-white/90 md:text-xl font-medium drop-shadow-md">
            Há 18 anos cuidando da sua saúde ocular com excelência e dedicação.
          </p>
          <Button asChild size="xl" className="shadow-lg btn-agendar-consulta bg-white text-primary hover:bg-white/90">
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
