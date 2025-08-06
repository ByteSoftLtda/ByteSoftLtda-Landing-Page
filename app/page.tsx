import { Button } from "@/components/ui/button"
import { Bot, Database, Shield, Users, Zap } from "lucide-react"
import ContactForm from "@/components/contact-form"
import Testimonials from "@/components/testimonials"
import UseCases from "@/components/use-cases"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import TypingPromptInput from "@/components/typing-prompt-input"
import FramerSpotlight from "@/components/framer-spotlight"
import CssGridBackground from "@/components/css-grid-background"
import FeaturesSection from "@/components/features-section"
import StructuredData from "@/components/structured-data"

export default function Home() {
  return (
    <>
      <StructuredData />
      <div className="flex min-h-screen flex-col">
        <Navbar />

        {/* Hero Section */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <CssGridBackground />
          <FramerSpotlight />
          <div className="container px-4 md:px-6 py-16 md:py-20">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm mb-6">ByteSoft Ltda</div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
                Serviços personalizados que se adaptam ao seu ambiente
              </h1>
              <p className="text-xl text-muted-foreground md:text-2xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-2xl mb-12">
                Transforme suas ideias em realidade com soluções de software sob medida.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <FeaturesSection />
        <UseCases />


        {/* Seção de Contato/Preços */}
        <section id="contact" className="py-20 bg-muted/50 dark:bg-muted/10" aria-labelledby="contact-heading">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 id="contact-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Preços Personalizados para Empresas
                  </h2>
                  <p className="text-muted-foreground md:text-xl">
                    Oferecemos pacotes de preços sob medida para empresas e órgãos governamentais baseados nas suas necessidades específicas e na escala do seu negócio.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span>Usuários ilimitados com controle de acesso baseado em função</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Database className="h-5 w-5 text-primary" />
                    <span>Tamanho da base de conhecimento personalizável</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    <span>Segurança e conformidade de nível empresarial</span>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="font-medium">
                    Entre em contato para um orçamento personalizado e para discutir seus requisitos específicos.
                  </p>
                </div>
              </div>
              <div className="lg:ml-10">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>


        <Footer />
      </div>
    </>
  )
}
