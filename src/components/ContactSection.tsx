import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Mensagem enviada!", description: "Entrarei em contacto brevemente." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contacto" className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Contacto</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Vamos trabalhar juntos</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Explica-me o que precisas e eu trato de tudo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              placeholder="O teu nome"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="bg-card border-border"
            />
            <Input
              type="email"
              placeholder="O teu email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="bg-card border-border"
            />
            <Textarea
              placeholder="Descreve o que precisas..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              rows={5}
              className="bg-card border-border resize-none"
            />
            <Button variant="hero" size="lg" type="submit" className="w-full">
              <Send className="w-4 h-4 mr-2" />
              Enviar Mensagem
            </Button>
          </form>

          <div className="flex flex-col justify-center gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">WhatsApp</h4>
                <p className="text-muted-foreground text-sm">Resposta rápida por WhatsApp. O meio mais direto.</p>
                <Button variant="link" className="px-0 mt-1" asChild>
                  <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                    Falar agora →
                  </a>
                </Button>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Email</h4>
                <p className="text-muted-foreground text-sm">Envia um email com os detalhes da tarefa.</p>
                <Button variant="link" className="px-0 mt-1" asChild>
                  <a href="mailto:hello@obliqviva.com">
                    hello@obliqviva.com
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
