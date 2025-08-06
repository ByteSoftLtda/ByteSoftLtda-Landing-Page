
import FeatureCard from "@/components/feature-card"
import {
  ShieldIcon,
  ServerIcon,
  LockIcon,
  ZapIcon,
} from "@/components/feature-icons"

export default function FeaturesSection() {

  const features = [
  {
    icon: <LockIcon />,
    title: "Privacidade e Conformidade",
    description: "Garantimos proteção total dos seus dados e cumprimento das principais leis como GDPR e LGPD.",
    accentColor: "rgba(251, 191, 36, 0.5)",
  },
  {
    icon: <ZapIcon />,
    title: "Agilidade",
    description: "Resposta rápida e eficiência para você resolver o que precisa sem demora.",
    accentColor: "rgba(16, 185, 129, 0.5)",
  },
  {
    icon: <ShieldIcon />,
    title: "Profissionais Qualificados",
    description: "Equipe experiente dedicada a entregar suporte e soluções de alta qualidade.",
    accentColor: "rgba(132, 204, 22, 0.5)",
  },
  {
    icon: <ServerIcon />,
    title: "Versatilidade",
    description: "Soluções completas para web e mobile, para você acessar onde e quando quiser.",
    accentColor: "rgba(168, 85, 247, 0.5)",
  },
]

  return (
    <section className="py-20 bg-muted/50 dark:bg-muted/10" id="About" aria-labelledby="features-heading">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 id="features-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Soluções SaaS da Bytesoft para Negócios            
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Tecnologia confiável, segura e escalável para transformar sua empresa.            
            </p>
          </div>
          <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground mb-2">
            Principais Recursos
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              accentColor={feature.accentColor}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
