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
      <div className="container mx-auto flex h-24 items-center justify-between px-4 md:px-6">
        <a href="#" className="flex items-center gap-2">
          <Image src="https://i.imgur.com/UiDrrUn.jpeg" alt="Central da Visão Logo" width={180} height={47} priority />
        </a>

        <div className="flex-1 justify-center items-center md:hidden flex">
          <a href="#" className="flex items-center gap-2">
            <Image src="https://i.imgur.com/UiDrrUn.jpeg" alt="Central da Visão Logo" width={180} height={47} priority className="hidden"/>
          </a>
        </div>
        
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>

        <div className="hidden md:flex items-center justify-end gap-4">
            <Button asChild size="sm" className="shadow-md btn-agendar-consulta">
                <a href="#contact">Agendar Consulta</a>
            </Button>
        </div>


        <div className="flex justify-end md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="right">
                <nav className="grid gap-6 text-lg font-medium mt-8">
                <a href="#" className="flex items-center justify-center gap-2 text-lg font-semibold" onClick={() => setSheetOpen(false)}>
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
