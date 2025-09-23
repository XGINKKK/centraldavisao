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
  
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);
  const [eyePosition, setEyePosition] = useState(0);

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

  useEffect(() => {
    if (spanRef.current && h1Ref.current) {
        const textWidth = spanRef.current.offsetWidth;
        const h1ComputedStyle = getComputedStyle(h1Ref.current);
        const h1Padding = parseFloat(h1ComputedStyle.paddingLeft);
        const h1TextAlign = h1ComputedStyle.textAlign;

        if (h1TextAlign === 'center') {
            const h1Width = h1Ref.current.offsetWidth;
            const textContainerWidth = h1Width - (parseFloat(h1ComputedStyle.paddingLeft) + parseFloat(h1ComputedStyle.paddingRight));
            const startOffset = (textContainerWidth - textWidth) / 2;
            setEyePosition(h1Padding + startOffset + textWidth);
        } else {
            setEyePosition(h1Padding + textWidth);
        }
    }
  }, [title]);


  return (
    <section 
      id="home" 
      className="relative w-full py-20 md:py-32 lg:py-40"
    >
       <div 
        className="absolute inset-0 bg-cover bg-center filter blur-sm"
        style={{ 
          backgroundImage: "url('https://i.imgur.com/qdWhkzn.jpeg')",
          backgroundPosition: '100% center',
        }}
      />
      
      <div className="container relative z-10 mx-auto px-4 md:px-6 flex justify-center text-center">
        <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-2xl max-w-2xl min-h-[340px] md:min-h-[400px] flex flex-col items-center">
          <div className="inline-block rounded-lg bg-primary/10 px-4 py-2 text-sm text-primary font-medium border border-primary/20">
            Oftalmologia Especializada
          </div>
          <div className="relative mt-4 w-full">
            <h1 ref={h1Ref} className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline text-primary text-center h-36 sm:h-48 md:h-56 flex items-center justify-center">
                <span ref={spanRef}>{title}</span>
                <span style={{ opacity: showCursor ? 1 : 0 }} className="text-primary/50 -ml-1">|</span>
                <Eye style={{ left: `${eyePosition}px`, opacity: title ? 1 : 0, top: '-0.5rem' }} className="absolute h-8 w-8 text-primary transition-all duration-100 ease-linear"/>
            </h1>
          </div>
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
