"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { CheckCircle2 } from "lucide-react"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const res = await fetch("https://formspree.io/f/mvgkggqy", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (res.ok) {
        setIsSubmitted(true)
      } else {
        // Optionally handle errors here
        alert("Erro ao enviar o formulário. Tente novamente.")
      }
    } catch (error) {
      alert("Erro de rede. Verifique sua conexão.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <Card>
        <CardContent className="pt-6 flex flex-col items-center justify-center min-h-[400px] text-center">
          <CheckCircle2 className="h-16 w-16 text-primary mb-4" />
          <h3 className="text-2xl font-bold mb-2">Obrigado!</h3>
          <p className="text-muted-foreground mb-6">
            Sua solicitação foi recebida. Nossa equipe entrará em contato em breve para entender melhor suas necessidades.
          </p>
          <Button onClick={() => setIsSubmitted(false)}>Enviar outra solicitação</Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Contate Nossa Equipe Empresarial</CardTitle>
        <CardDescription>
          Preencha o formulário abaixo para discutir as necessidades da sua organização e receber um orçamento personalizado.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">Nome</Label>
              <Input id="firstName" name="name" placeholder="João" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Sobrenome</Label>
              <Input id="lastName" name="lastname" placeholder="Silva" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="joao.silva@empresa.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Como podemos ajudar?</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Conte-nos sobre suas necessidades específicas e casos de uso..."
              rows={4}
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Enviando..." : "Solicitar Informações"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
