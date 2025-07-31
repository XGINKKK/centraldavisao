import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, ExternalLink } from "lucide-react";

export default function LocationSection() {
    const gmapsUrl = "https://www.google.com/maps/place/Central+da+Vis%C3%A3o+oftalmologia+em+Balne%C3%A1rio+Cambori%C3%BA/@-26.9870749,-48.6443066,17z/data=!3m1!4b1!4m6!3m5!1s0x94d8b5c8f5858e7b:0x7a6ca29d71187a71!8m2!3d-26.9870798!4d-48.6394357!16s%2Fg%2F11sjwq7d00?entry=ttu";

  return (
    <section id="location" className="w-full py-20 md:py-28 lg:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
                Nossa Localização
            </h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed">
                Venha nos visitar em um espaço moderno e aconchegante.
            </p>
        </div>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Card className="overflow-hidden shadow-xl">
              <iframe
                className="w-full h-full aspect-[4/3] min-h-[450px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3550.041682393248!2d-48.64199998826724!3d-26.9870797765943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8b5c8f5858e7b%3A0x7a6ca29d71187a71!2sCentral%20da%20Vis%C3%A3o%20oftalmologia%20em%20Balne%C3%A1rio%20Cambori%C3%BA!5e0!3m2!1sen!2sbr!4v1720645607384!5m2!1sen!2sbr"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Endereço da Clínica no Google Maps"
              ></iframe>
          </Card>
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold">Endereço</h3>
                  <p className="text-foreground/80">
                    Rua 901, nº 431 – Sala 03 – Térreo
                    <br />
                    Balneário Camboriú – SC
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold">Horário de Atendimento</h3>
                  <p className="text-foreground/80">
                    Segunda a Sábado
                  </p>
                </div>
              </div>
            </div>
            <Button asChild size="xl" className="w-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-primary/40 active:scale-95 animate-pulse-strong">
              <a href={gmapsUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-5 w-5" />
                Abrir no Google Maps
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
