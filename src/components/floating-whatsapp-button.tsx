import { Button } from "@/components/ui/button";

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-8 w-8"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    <path d="M14.05 6.03a4.5 4.5 0 0 1 6.36 6.36" />
    <path d="M14.05 9.03a1.5 1.5 0 0 1 2.12 2.12" />
  </svg>
);

export default function FloatingWhatsAppButton() {
  return (
    <a
      href="https://wa.me/5547989146073"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco no WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="relative flex h-16 w-16">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 duration-1000"></span>
        <Button
          size="icon"
          className="relative inline-flex h-16 w-16 rounded-full bg-[#25D366] shadow-2xl transition-all duration-300 hover:bg-[#128C7E] hover:scale-110 border-4 border-white"
        >
          <WhatsAppIcon />
        </Button>
      </span>
    </a>
  );
}
