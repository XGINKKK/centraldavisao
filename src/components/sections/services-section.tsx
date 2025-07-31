import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Glasses, Eye, View, Microscope, Gauge, BrainCircuit, Scan, Palette } from "lucide-react";

const services = [
  {
    icon: <Glasses className="h-8 w-8 text-primary" />,
    title: "Refração Completa",
    description: "Para miopia, hipermetropia, astigmatismo e presbiopia."
  },
  {
    icon: <Eye className="h-8 w-8 text-primary" />,
    title: "Acuidade Visual",
    description: "Mede a nitidez e clareza da sua visão."
  },
  {
    icon: <View className="h-8 w-8 text-primary" />,
    title: "Fundoscopia",
    description: "Avaliação detalhada da retina e do nervo óptico."
  },
  {
    icon: <Gauge className="h-8 w-8 text-primary" />,
    title: "Tonometria",
    description: "Mede a pressão intraocular para detectar glaucoma."
  },
  {
    icon: <Microscope className="h-8 w-8 text-primary" />,
    title: "Biomicroscopia",
    description: "Avaliação da córnea, cristalino e outras estruturas."
  },
  {
    icon: <Scan className="h-8 w-8 text-primary" />,
    title: "Mapeamento de Retina",
    description: "Exame detalhado de todo o fundo do olho."
  },
  {
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    title: "Teste de Motilidade Ocular",
    description: "Avalia os movimentos dos olhos e alinhamento."
  },
  {
    icon: <Palette className="h-8 w-8 text-primary" />,
    title: "Teste de Visão de Cores",
    description: "Diagnóstico preciso de daltonismo e outras anomalias."
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="w-full py-20 md:py-28 lg:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-accent px-3 py-1 text-sm text-accent-foreground">
            Nossos Serviços
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
            Exames e Procedimentos
          </h2>
          <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Oferecemos uma gama completa de exames para um diagnóstico preciso e um cuidado completo com a sua visão.
          </p>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col items-center text-center p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="p-0">
                <div className="bg-accent/30 p-4 rounded-full mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-lg font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 mt-2">
                <p className="text-sm text-foreground/80">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex justify-center">
            <Button asChild size="xl" className="shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-primary/40 active:scale-95">
                <a href="#contact">Agendar um Exame</a>
            </Button>
        </div>
      </div>
    </section>
  );
}
