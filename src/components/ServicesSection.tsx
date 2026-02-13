import { Globe, Mail, FolderOpen, Wrench, Server, Layout, Bot } from "lucide-react";

const services = [
  { icon: Globe, title: "Configuração de WordPress", desc: "Instalação, tema, plugins e otimização do teu site WordPress." },
  { icon: Mail, title: "Email Profissional", desc: "Configuração de email com domínio próprio, pronto a usar." },
  { icon: FolderOpen, title: "Organização Digital", desc: "Estruturação de ficheiros, pastas e ferramentas digitais." },
  { icon: Wrench, title: "Tarefas Técnicas", desc: "Pequenas tarefas técnicas resolvidas de forma rápida." },
  { icon: Server, title: "Instalação de VPS", desc: "Configuração completa de servidores VPS para os teus projetos." },
  { icon: Layout, title: "Páginas Simples", desc: "Criação de landing pages e sites de uma página, rápidos e eficazes." },
  { icon: Bot, title: "Automação de Tarefas", desc: "Automatização de processos repetitivos para poupar tempo." },
];

const ServicesSection = () => (
  <section id="servicos" className="py-24 bg-muted/30">
    <div className="container">
      <div className="text-center mb-16">
        <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Serviços</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">O que posso fazer por ti</h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Serviços digitais profissionais, entregues com rapidez e relatório claro.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {services.map((s) => (
          <div
            key={s.title}
            className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:glow-orange transition-all group"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <s.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
