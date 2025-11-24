import { Mail, Phone } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import MotionContainer from "@/components/ui/motion-container";

export default function ContactSection() {

  return (
    <section id="contact" className="w-full py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <MotionContainer className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
            Entre em Contato
          </h2>
          <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed">
            Estamos prontos para atender você. Entre em contato pelos canais abaixo.
          </p>
        </MotionContainer>
        <div className="flex justify-center">
          <MotionContainer delay={0.2} className="w-full max-w-2xl grid gap-6 md:grid-cols-2">
            <a href="mailto:centraldavisaobc@gmail.com" className="group">
              <Card className="h-full p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-primary/10 hover:border-primary/30">
                <CardContent className="p-0 flex flex-col items-center text-center gap-4">
                  <div className="bg-primary/10 p-4 rounded-full group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <span className="text-foreground/80 text-sm break-all">centraldavisaobc@gmail.com</span>
                  </div>
                </CardContent>
              </Card>
            </a>
            <a href="https://wa.me/5547989146073" target="_blank" rel="noopener noreferrer" className="group">
              <Card className="h-full p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-primary/10 hover:border-primary/30">
                <CardContent className="p-0 flex flex-col items-center text-center gap-4">
                  <div className="bg-primary/10 p-4 rounded-full group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">WhatsApp</h3>
                    <span className="text-foreground/80 text-sm">(47) 98914-6073</span>
                  </div>
                </CardContent>
              </Card>
            </a>
          </MotionContainer>
        </div>
      </div>
    </section>
  );
}
