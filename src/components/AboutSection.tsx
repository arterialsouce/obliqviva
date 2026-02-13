import { Target, Eye, Zap } from "lucide-react";

const values = [
  { icon: Target, title: "Profissionalismo", desc: "Cada tarefa é tratada com rigor e atenção ao detalhe." },
  { icon: Eye, title: "Transparência", desc: "Recebes sempre um relatório claro do que foi feito." },
  { icon: Zap, title: "Rapidez", desc: "Entrega rápida para que não percas tempo à espera." },
];

const AboutSection = () => (
  <section id="sobre" className="py-24">
    <div className="container">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Sobre</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          A tua solução para tarefas digitais
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          A OBLIQ VIVA existe para ajudar pessoas ocupadas a resolver tarefas digitais de forma rápida e profissional. 
          Sem complicações, sem esperas — eu faço por ti e entrego com um relatório claro do que foi feito.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {values.map((v) => (
          <div key={v.title} className="bg-card rounded-xl p-8 border border-border hover:border-primary/30 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
              <v.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{v.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
