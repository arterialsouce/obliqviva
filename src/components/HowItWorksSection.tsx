import { MessageSquare, Rocket, FileCheck, ThumbsUp } from "lucide-react";

const steps = [
  { icon: MessageSquare, num: "01", title: "Explica o que precisas", desc: "Descreve a tarefa que queres resolver — por mensagem, email ou WhatsApp." },
  { icon: Rocket, num: "02", title: "Executo rapidamente", desc: "Inicio o trabalho e resolvo com eficiência e profissionalismo." },
  { icon: FileCheck, num: "03", title: "Relatório claro", desc: "Recebes um relatório detalhado de tudo o que foi feito." },
  { icon: ThumbsUp, num: "04", title: "Aprovação e suporte", desc: "Aprovas o resultado e tens suporte para qualquer dúvida." },
];

const HowItWorksSection = () => (
  <section id="como-funciona" className="py-24">
    <div className="container">
      <div className="text-center mb-16">
        <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Processo</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Como funciona</h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Simples, rápido e sem complicações.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {steps.map((s, i) => (
          <div key={s.num} className="text-center relative">
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-border" />
            )}
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 relative">
              <s.icon className="w-6 h-6 text-primary" />
              <span className="absolute -top-2 -right-2 text-xs font-bold bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center">
                {s.num}
              </span>
            </div>
            <h3 className="font-semibold mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
