import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Tarefa Única",
    price: "A partir de 15€",
    desc: "Para tarefas simples e pontuais.",
    features: ["1 tarefa incluída", "Entrega rápida", "Relatório do trabalho", "Suporte pós-entrega"],
    highlight: false,
  },
  {
    name: "Pacote Essencial",
    price: "A partir de 49€",
    desc: "Para quem precisa de várias tarefas.",
    features: ["Até 5 tarefas", "Prioridade na execução", "Relatório detalhado", "Suporte dedicado"],
    highlight: true,
  },
  {
    name: "Pacote Premium",
    price: "Sob consulta",
    desc: "Projetos maiores e personalizados.",
    features: ["Tarefas ilimitadas", "Máxima prioridade", "Relatório completo", "Suporte contínuo"],
    highlight: false,
  },
];

const PricingSection = () => (
  <section id="precos" className="py-24 bg-muted/30">
    <div className="container">
      <div className="text-center mb-16">
        <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Preços</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Planos simples e claros</h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          O valor final depende da complexidade da tarefa. Sem surpresas.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`rounded-xl p-8 border flex flex-col ${
              p.highlight
                ? "bg-card border-primary glow-orange"
                : "bg-card border-border"
            }`}
          >
            {p.highlight && (
              <span className="text-xs font-semibold text-primary uppercase tracking-widest mb-4">
                Mais Popular
              </span>
            )}
            <h3 className="text-xl font-bold mb-1">{p.name}</h3>
            <p className="text-2xl font-extrabold text-primary mb-2">{p.price}</p>
            <p className="text-muted-foreground text-sm mb-6">{p.desc}</p>
            <ul className="space-y-3 mb-8 flex-1">
              {p.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Button variant={p.highlight ? "hero" : "heroOutline"} asChild>
              <a href="#contacto">Pedir Agora</a>
            </Button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
