"use client";

import React, { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Eye } from "lucide-react";

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
    className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
  >
    {label}
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
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "border-b bg-background/80 backdrop-blur-sm" : "bg-background"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <a href="#" className="flex items-center gap-2 font-bold text-lg text-primary">
          <Eye className="h-6 w-6" />
          <span className="font-headline">Central da Visão</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
          <Button asChild size="sm" className="shadow-md transition-transform hover:scale-105 btn-agendar-consulta">
            <a href="#contact">Agendar Consulta</a>
          </Button>
        </nav>

        <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="grid gap-6 text-lg font-medium mt-8">
              <a href="#" className="flex items-center gap-2 text-lg font-semibold text-primary" onClick={() => setSheetOpen(false)}>
                <Eye className="h-6 w-6" />
                Central da Visão
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
    </header>
  );
}
