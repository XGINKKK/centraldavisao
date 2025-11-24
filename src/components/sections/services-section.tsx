import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Glasses, Eye, View, Microscope, Gauge, BrainCircuit, Scan, Palette } from "lucide-react";
import MotionContainer from "@/components/ui/motion-container";

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
    <section
      id="services"
      className="relative w-full py-24 md:py-32 bg-card"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-10"
        style={{ backgroundImage: "url('https://i.imgur.com/Ws7KISz.jpeg')" }}
      />
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <MotionContainer className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
            Nossos Serviços
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
            Exames e Procedimentos
          </h2>
          <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Oferecemos uma gama completa de exames para um diagnóstico preciso e um cuidado completo com a sua visão.
          </p>
        </MotionContainer>
        <div className="mx-auto grid grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {services.map((service, index) => (
            <MotionContainer key={service.title} delay={index * 0.1} className="h-full">
              <Card className="flex flex-col p-6 bg-background/80 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 items-center text-center h-full hover:-translate-y-2 border-primary/10 hover:border-primary/30">
                <CardHeader className="p-0 flex flex-col items-center text-center w-full">
                  <div className="bg-primary/10 p-4 rounded-2xl mb-4 flex justify-center items-center group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg font-semibold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-2">
                  <p className="text-sm text-foreground/80">{service.description}</p>
                </CardContent>
              </Card>
            </MotionContainer>
          ))}
        </div>
        <MotionContainer delay={0.6} className="flex justify-center">
          <Button asChild size="xl" className="shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-primary/40 active:scale-95">
            <a href="#contact">Agendar um Exame</a>
          </Button>
        </MotionContainer>
      </div>
    </section>
  );
}
