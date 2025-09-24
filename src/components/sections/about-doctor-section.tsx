import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building } from "lucide-react";

export default function AboutDoctorSection() {
  return (
    <section id="about" className="w-full py-20 md:py-28 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="flex justify-center">
            <Image
              src="https://i.imgur.com/UiDrrUn.jpeg"
              alt="Central da Visão Logo"
              width={500}
              height={156}
              className="rounded-lg object-contain shadow-2xl aspect-video"
              data-ai-hint="logo"
            />
          </div>
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">
                Sobre o Consultório
              </h2>
              <p className="text-lg font-medium text-foreground/80">Cuidando da sua visão com dedicação.</p>
            </div>
            <Card className="bg-card/50">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl font-semibold">
                        <Building className="text-primary"/>
                        Nossa Missão
                    </CardTitle>
                </CardHeader>
              <CardContent>
                <p className="text-foreground/90 leading-relaxed">
                  Nossa missão é oferecer um atendimento oftalmológico de excelência, com uma equipe qualificada para diagnosticar, prevenir e tratar as principais doenças oculares, sempre com um cuidado humanizado e individualizado.
                </p>
              </CardContent>
            </Card>
            <Button asChild size="xl" className="w-full sm:w-auto shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-primary/40 active:scale-95">
              <a href="#services">Ver Exames Disponíveis</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
