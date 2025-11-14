"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import FrostedGlassIcon from "@/components/frosted-glass-icon"
import {
  GovernmentIcon,
  FinanceIcon,
  HealthcareIcon,
} from "@/components/use-case-icons"

export default function UseCases() {
  const useCases = [
  {
    icon: <GovernmentIcon />,
    title: "Landing Pages de Alta Conversão",
    description:
      "Crie presença digital profissional com páginas rápidas, modernas e otimizadas para conversão — ideal para negócios locais, autônomos e prestadores de serviços.",
    accentColor: "rgba(139, 92, 246, 0.5)",
  },
  {
    icon: <FinanceIcon />,
    title: "Catálogos e Sistemas Comerciais",
    description:
      "Organize produtos, serviços e informações em catálogos digitais completos, com painéis simples, atualização rápida e integração com ferramentas do seu negócio.",
    accentColor: "rgba(245, 158, 11, 0.5)",
  },
  {
    icon: <HealthcareIcon />,
    title: "Sistemas de Saúde e Atendimento Automatizado",
    description:
      "Automatize agendamentos, triagens e comunicações. Ideal para clínicas, consultórios e profissionais autônomos que precisam de eficiência e segurança.",
    accentColor: "rgba(239, 68, 68, 0.5)",
  },
  {
    icon: <HealthcareIcon />,
    title: "Atendimento Inteligente para Lojistas",
    description:
      "Bots personalizados que respondem clientes automaticamente, tiram dúvidas, mostram produtos e aumentam a conversão sem esforço manual.",
    accentColor: "rgba(59, 130, 246, 0.5)",
  },
  {
    icon: <FinanceIcon />,
    title: "Soluções para Prestadores de Serviços e Autônomos",
    description:
      "Agendamento online, páginas de portfólio, formulários inteligentes e automações que economizam tempo e profissionalizam seu atendimento.",
    accentColor: "rgba(16, 185, 129, 0.5)",
  },
]


  // Variantes de animação para o container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  // Variantes de animação para os itens individuais
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30 dark:from-background dark:to-muted/10">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground mb-2">
              Casos de Uso
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Transformando Indústrias</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Nossos sistemas são projetados para atender aos desafios únicos de vários setores.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {useCases.map((useCase, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full bg-background/60 backdrop-blur-sm border transition-all duration-300 hover:shadow-lg dark:bg-background/80">
                <CardHeader className="pb-2">
                  <FrostedGlassIcon icon={useCase.icon} color={useCase.accentColor} className="mb-4" />
                  <CardTitle>{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{useCase.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
