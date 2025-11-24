"use client";

import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { motion } from "framer-motion";

const fullTitle = "O futuro da sua visão começa aqui";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1.1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center filter blur-sm"
        style={{
          backgroundImage: "url('https://i.imgur.com/qdWhkzn.jpeg')",
        }}
      />

      <div className="container relative z-10 mx-auto px-4 md:px-6 flex justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-2xl max-w-2xl flex flex-col items-center justify-center border border-white/20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="inline-block rounded-lg bg-primary/10 px-4 py-2 text-sm text-primary font-medium border border-primary/20 mb-4"
          >
            Oftalmologia Especializada
          </motion.div>

          <div className="relative w-full mt-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline text-center text-foreground">
              {fullTitle.split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                  className="inline-block mr-2 last:mr-0"
                >
                  {word}
                </motion.span>
              ))}
            </h1>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, type: "spring", stiffness: 200, damping: 10 }}
              className="absolute -top-4 -right-4 md:-top-6 md:-right-6 text-primary"
            >
              <Eye className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 animate-pulse" />
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="mx-auto max-w-[700px] text-foreground/80 md:text-xl font-medium mt-6 text-center"
          >
            Cuidando da sua saúde ocular com excelência e dedicação.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ delay: 1.8, type: "spring", stiffness: 400, damping: 17 }}
            className="mt-6 flex flex-col items-center gap-4"
          >
            <Button asChild size="xl" className="shadow-lg btn-agendar-consulta">
              <a href="#contact" className="flex items-center gap-2">
                <Eye className="h-5 w-5" />
                Agendar Consulta
              </a>
            </Button>
            <p className="text-sm font-medium text-foreground/70 bg-white/50 px-4 py-1 rounded-full backdrop-blur-sm border border-white/20">
              Atendimento exclusivamente particular (Não aceitamos convênios)
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
