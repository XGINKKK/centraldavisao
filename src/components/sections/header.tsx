"use client";

import React, { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { href: "#about", label: "Sobre" },
  { href: "#services", label: "Serviços" },
  { href: "#location", label: "Localização" },
  { href: "#contact", label: "Contato" },
];

const NavLink = ({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) => (
  <a
    href={href}
    onClick={onClick}
    className="relative text-sm font-medium text-foreground/80 transition-colors hover:text-primary group"
  >
    {label}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
  </a>
);

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSheetOpen, setSheetOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled
          ? "border-b bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
        }`}
    >
      <div className="container mx-auto flex h-24 items-center justify-center md:justify-between px-4 md:px-6">
        <a href="#" className="flex items-center gap-2 transition-transform hover:scale-105">
          <Image src="https://i.imgur.com/UiDrrUn.jpeg" alt="Central da Visão Logo" width={180} height={47} priority />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>

        <div className="hidden md:flex items-center justify-end gap-4">
          <Button asChild size="sm" className="shadow-md btn-agendar-consulta transition-transform hover:scale-105 active:scale-95">
            <a href="#contact">Agendar Consulta</a>
          </Button>
        </div>


        <div className="absolute right-4 top-1/2 -translate-y-1/2 md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="grid gap-6 text-lg font-medium mt-8">
                <a href="#" className="flex items-center justify-center gap-2 text-lg font-semibold mb-4" onClick={() => setSheetOpen(false)}>
                  <Image src="https://i.imgur.com/UiDrrUn.jpeg" alt="Central da Visão Logo" width={180} height={47} />
                </a>
                {navLinks.map((link) => (
                  <NavLink key={link.href} {...link} onClick={() => setSheetOpen(false)} />
                ))}
                <Button asChild size="lg" className="mt-4 shadow-md btn-agendar-consulta">
                  <a href="#contact" onClick={() => setSheetOpen(false)}>Agendar Consulta</a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
