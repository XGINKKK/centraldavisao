import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, HeartHandshake, Bot, MessageCircle, Gem, UserCheck } from "lucide-react";

const differentiators = [
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: "18 anos de experiência",
    description: "Dedicação e expertise comprovadas em oftalmologia."
  },
  {
    icon: <HeartHandshake className="h-8 w-8 text-primary" />,
    title: "Atendimento Humanizado",
    description: "Cuidado individualizado e focado no bem-estar do paciente."
  },
  {
    icon: <Bot className="h-8 w-8 text-primary" />,
    title: "Equipamentos Modernos",
    description: "Tecnologia de ponta para diagnósticos precisos."
  },
  {
    icon: <UserCheck className="h-8 w-8 text-primary" />,
    title: "Atendimento Particular",
    description: "Foco total em você, sem a pressa dos convênios."
  },
  {
    icon: <Gem className="h-8 w-8 text-primary" />,
    title: "Valor que surpreende",
    description: "Excelência em oftalmologia com condições que você não espera. Consulte."
  }
];

export default function DifferentiatorsSection() {
  return (
    <section id="differentiators" className="w-full py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
            Nossos Diferenciais
          </h2>
          <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed">
            Compromisso com a sua saúde ocular em cada detalhe.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {differentiators.map((item) => (
            <div key={item.title} className="flex items-start gap-4">
              <div className="bg-accent/30 p-3 rounded-full flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-foreground/80">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <Button asChild size="xl" className="shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-primary/40 active:scale-95">
            <a href="https://wa.me/5547989146073" target="_blank" rel="noopener noreferrer">
              Fale com a Clínica
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
