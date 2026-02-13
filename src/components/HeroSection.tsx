import { Button } from "@/components/ui/button";
import { Zap, Shield, FileText, Award } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const highlights = [
  { icon: Zap, label: "Rapidez" },
  { icon: Shield, label: "Confiança" },
  { icon: FileText, label: "Relatório Claro" },
  { icon: Award, label: "Serviço Premium" },
];

const HeroSection = () => (
  <section
    id="home"
    className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
  >
    <div
      className="absolute inset-0 bg-cover bg-center opacity-30"
      style={{ backgroundImage: `url(${heroBg})` }}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />

    <div className="container relative z-10 text-center py-20">
      <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 animate-fade-in">
        OBLIQ VIVA
      </p>
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 animate-fade-in-up">
        Serviços rápidos para
        <br />
        <span className="text-gradient">pessoas sem tempo</span>
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
        Eu faço por ti. Tu ganhas tempo.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
        <Button variant="hero" size="lg" asChild>
          <a href="#contacto">Pedir Serviço</a>
        </Button>
        <Button variant="heroOutline" size="lg" asChild>
          <a href="#servicos">Ver Serviços</a>
        </Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
        {highlights.map((h) => (
          <div key={h.label} className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <h.icon className="w-5 h-5 text-primary" />
            </div>
            <span className="text-sm font-medium text-muted-foreground">{h.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HeroSection;
