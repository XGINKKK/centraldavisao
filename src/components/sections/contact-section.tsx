"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone } from "lucide-react";
import { Card, CardContent } from "../ui/card";

const formSchema = z.object({
  name: z.string().min(2, { message: "O nome deve ter pelo menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, insira um e-mail válido." }),
  message: z.string().min(10, { message: "A mensagem deve ter pelo menos 10 caracteres." }),
});

export default function ContactSection() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Mensagem Enviada!",
      description: "Sua solicitação de consulta foi enviada com sucesso. Entraremos em contato em breve.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="w-full py-20 md:py-28 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
            Entre em Contato
          </h2>
          <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed">
            Estamos prontos para atender você. Envie sua mensagem ou entre em contato pelos canais abaixo.
          </p>
        </div>
        <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2 space-y-6">
                <Card className="p-6 shadow-md">
                    <CardContent className="p-0">
                        <h3 className="text-xl font-semibold mb-4">Contato Rápido</h3>
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
            <div className="lg:col-span-3">
                <Card className="p-6 sm:p-8 shadow-md">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nome</FormLabel>
                                <FormControl>
                                <Input placeholder="Seu nome completo" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel>E-mail</FormLabel>
                                <FormControl>
                                <Input placeholder="seu.email@exemplo.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel>Mensagem</FormLabel>
                                <FormControl>
                                <Textarea placeholder="Digite sua mensagem aqui..." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        <Button type="submit" size="xl" className="w-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-primary/40 active:scale-95">
                            Enviar solicitação de consulta
                        </Button>
                        </form>
                    </Form>
                </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
