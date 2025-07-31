import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Stethoscope } from "lucide-react";

export default function AboutDoctorSection() {
  return (
    <section id="about" className="w-full py-20 md:py-28 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="flex justify-center">
            <Image
              src="https://i.imgur.com/MZCP0RJ.jpeg"
              alt="Dr. Caio Renato Alcântara Mota"
              width={500}
              height={500}
              className="rounded-full object-cover shadow-2xl aspect-square"
              data-ai-hint="doctor portrait"
            />
          </div>
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">
                Dr. Caio Renato Alcântara Mota
              </h2>
              <p className="text-lg font-medium text-foreground/80">CRM/SC: 37667</p>
            </div>
            <Card className="bg-card/50">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl font-semibold">
                        <Stethoscope className="text-primary"/>
                        Sobre o Médico
                    </CardTitle>
                </CardHeader>
              <CardContent>
                <p className="text-foreground/90 leading-relaxed">
                  Médico oftalmologista com formação em Medicina e especialização em Oftalmologia. 
                  Atua no diagnóstico, prevenção e tratamento das principais doenças oculares com 
                  atendimento humanizado e individualizado.
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
