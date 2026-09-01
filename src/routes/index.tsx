import { createFileRoute } from "@tanstack/react-router";
import { AppLayout } from "@/components/layout";
import { Construction, Zap, Shield, Users, ArrowRight, type LucideIcon } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <AppLayout>
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-6 lg:p-12">
        <div className="max-w-4xl w-full space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Construction className="h-4 w-4" />
              Em configuração
            </div>
            
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-2xl">S</span>
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
              SHUB CRM
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sistema de Gestão de Relacionamento com Clientes
            </p>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Estamos preparando uma plataforma completa de CRM para transformar a forma como você gerencia seus clientes, leads e negócios.
            </p>
          </div>

          {/* Features Preview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={Users}
              title="Gestão de Leads"
              description="Capture e acompanhe todos os seus leads em um só lugar"
            />
            <FeatureCard
              icon={Zap}
              title="Automação"
              description="Automatize processos e ganhe produtividade"
            />
            <FeatureCard
              icon={Shield}
              title="Segurança"
              description="Dados protegidos com criptografia de ponta"
            />
            <FeatureCard
              icon={ArrowRight}
              title="Escalabilidade"
              description="Cresça sem limites com nossa infraestrutura"
            />
          </div>

          {/* Status Message */}
          <Card className="bg-muted/50 border-dashed">
            <CardContent className="flex flex-col items-center justify-center py-12 space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Construction className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-xl font-semibold text-foreground">
                Plataforma em Desenvolvimento
              </h2>
              <p className="text-muted-foreground text-center max-w-md">
                Nossa equipe está trabalhando para entregar a melhor experiência em gestão de relacionamento. Em breve, você terá acesso a todas as funcionalidades.
              </p>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2026 SHUB CRM. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  const IconComponent = icon;
  return (
    <Card className="bg-card hover:bg-accent/50 transition-colors">
      <CardContent className="pt-6">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
          <IconComponent className="h-5 w-5 text-primary" />
        </div>
        <h3 className="font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
