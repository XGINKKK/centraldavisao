import { Mail, Phone } from "lucide-react";
import { Card, CardContent } from "../ui/card";

export default function ContactSection() {

  return (
    <section id="contact" className="w-full py-20 md:py-28 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
            Entre em Contato
          </h2>
          <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed">
            Estamos prontos para atender você. Entre em contato pelos canais abaixo.
          </p>
        </div>
        <div className="flex justify-center">
            <div className="w-full max-w-md">
                <Card className="p-6 shadow-md">
                    <CardContent className="p-0">
                        <h3 className="text-xl font-semibold mb-4 text-center">Contato Rápido</h3>
                        <a href="mailto:centraldavisaobc@gmail.com" className="flex items-center gap-3 p-3 rounded-lg transition-colors hover:bg-accent/50">
                            <Mail className="h-6 w-6 text-primary" />
                            <span className="text-foreground/90">centraldavisaobc@gmail.com</span>
                        </a>
                        <a href="https://wa.me/5547989146073" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg transition-colors hover:bg-accent/50">
                            <Phone className="h-6 w-6 text-primary" />
                            <span className="text-foreground/90">(47) 98914-6073</span>
                        </a>
                    </CardContent>
                </Card>
            </div>
        </div>
      </div>
    </section>
  );
}
