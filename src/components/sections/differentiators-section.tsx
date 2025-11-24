import { Button } from "@/components/ui/button";
import { Award, HeartHandshake, Gem, UserCheck } from "lucide-react";
import MotionContainer from "@/components/ui/motion-container";

const differentiators = [
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: "Experiência Comprovada",
    description: "Dedicação e expertise em oftalmologia."
  },
  {
    icon: <HeartHandshake className="h-8 w-8 text-primary" />,
    title: "Atendimento Humanizado",
    description: "Cuidado individualizado e focado no bem-estar do paciente."
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
    <section id="differentiators" className="w-full py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <MotionContainer className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
            Nossos Diferenciais
          </h2>
          <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed">
            Compromisso com a sua saúde ocular em cada detalhe.
          </p>
        </MotionContainer>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((item, index) => (
            <MotionContainer key={item.title} delay={index * 0.1} direction="up" className="group flex flex-col items-center text-center p-6 rounded-2xl bg-background shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-primary/20">
              <div className="bg-primary/10 p-4 rounded-full mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-foreground/80">{item.description}</p>
            </MotionContainer>
          ))}
        </div>
        <MotionContainer delay={0.4} className="text-center mt-16">
          <Button asChild size="xl" className="shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-primary/40 active:scale-95">
            <a href="https://wa.me/5547989146073" target="_blank" rel="noopener noreferrer">
              Fale com a Clínica
            </a>
          </Button>
        </MotionContainer>
      </div>
    </section>
  );
}
