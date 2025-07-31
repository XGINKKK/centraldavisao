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
            <a href={gmapsUrl} target="_blank" rel="noopener noreferrer" className="block relative">
                <Image
                    src="https://placehold.co/800x600.png"
                    alt="Mapa da localização da clínica"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    data-ai-hint="clinic location"
                />
                <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                    <div className="bg-background/80 p-4 rounded-lg text-center">
                        <MapPin className="h-10 w-10 text-primary mx-auto mb-2" />
                        <p className="font-semibold text-foreground">Ver no Google Maps</p>
                    </div>
                </div>
            </a>
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
            <Button asChild size="lg" className="w-full shadow-lg transition-transform hover:scale-105">
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
