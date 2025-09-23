"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

const fullTitle = "O futuro da sua visão começa aqui";

export default function HeroSection() {
  const [title, setTitle] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % 1;
      const currentTitle = fullTitle;

      if (isDeleting) {
        setTitle(currentTitle.substring(0, title.length - 1));
        setTypingSpeed(100);
      } else {
        setTitle(currentTitle.substring(0, title.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && title === currentTitle) {
        setTimeout(() => setIsDeleting(true), 5000); 
      } else if (isDeleting && title === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [title, isDeleting, loopNum, typingSpeed]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section 
      id="home" 
      className="relative w-full py-20 md:py-32 lg:py-40"
    >
       <div 
        className="absolute inset-0 bg-cover bg-center filter blur-sm"
        style={{ 
          backgroundImage: "url('https://i.imgur.com/qdWhkzn.jpeg')",
          backgroundPosition: '-150px -50px',
        }}
      />
      
      <div className="container relative z-10 mx-auto px-4 md:px-6 flex justify-center text-center">
        <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-2xl max-w-2xl flex flex-col items-center justify-center">
          <div className="inline-block rounded-lg bg-primary/10 px-4 py-2 text-sm text-primary font-medium border border-primary/20">
            Oftalmologia Especializada
          </div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline text-primary mt-4">
              {title}
              <span style={{ opacity: showCursor ? 1 : 0, animation: title === fullTitle ? 'none' : ''}} className="text-primary/50">|</span>
              <Eye style={{ opacity: title ? 1 : 0 }} className="inline-block h-8 w-8 text-primary -top-2 relative"/>
          </h1>
          <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl font-medium mt-4 text-center">
            Há 18 anos cuidando da sua saúde ocular com excelência e dedicação.
          </p>
          <Button asChild size="xl" className="shadow-lg btn-agendar-consulta mt-6">
            <a href="#contact">
              <Eye className="mr-2 h-6 w-6" />
              Agendar Consulta
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
