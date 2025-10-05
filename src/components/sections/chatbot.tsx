"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import { useTheme } from "@/components/theme-provider";
import sanitizeHtml from "sanitize-html";


export function Chatbot() {
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [requestCount, setRequestCount] = useState(0);
  const [lastReset, setLastReset] = useState(Date.now());

  // Rate limit: 5 requests per 60 seconds
  const RATE_LIMIT = 5;
  const RESET_INTERVAL = 60000; // 60 seconds in milliseconds

  useEffect(() => {
    setMessages([{ role: "assistant", content: "Ciao! Sono Benny, il tuo assistente virtuale. Chiedimi qualsiasi cosa su di me o sul mio sito!" }]);
  }, []);

  const handleSend = async () => {
    if (!input.trim()) return;

    // Sanitize input to prevent injections
    const sanitizedInput = sanitizeHtml(input, {
      allowedTags: [], // No HTML tags allowed
      allowedAttributes: {},
    }).trim();

    if (!sanitizedInput) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Input non valido. Usa solo testo semplice." },
      ]);
      return;
    }

    // Check rate limit
    const now = Date.now();
    if (now - lastReset >= RESET_INTERVAL) {
      setRequestCount(1);
      setLastReset(now);
    } else if (requestCount >= RATE_LIMIT) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `Rallenta! Hai raggiunto il limite di ${RATE_LIMIT} richieste in 60 secondi. Riprova tra ${Math.ceil((RESET_INTERVAL - (now - lastReset)) / 1000)} secondi.`,
        },
      ]);
      setLoading(false);
      return;
    } else {
      setRequestCount((prev) => prev + 1);
    }

    const newMessages: { role: "user" | "assistant"; content: string }[] = [...messages, { role: "user", content: sanitizedInput }];
    setMessages(newMessages);
    setLoading(true);
    setInput("");

    try {
      const recentMessages = newMessages.slice(-5);

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [
            {
              role: "system",
              content: `
                Sono Benny Torregrossa, software engineer italiano con solida esperienza in fintech e cloud computing. Attualmente gestisco l'IT department di una piattaforma di pagamenti e ho fondato Stackspedia, un database open-source dei migliori progetti OSS.

                **Background:**
                - Master in Linguistica Teorica e Applicata (Università di Pavia) specializzato in NLP
                - 6+ anni di esperienza nella gestione di progetti internazionali finanziati dall'UE (portfolio €4.5M)
                - AWS Certified Solutions Architect Associate (SAA-C03)
                - Transizione da Project Management a Software Engineering nel 2024

                **Skills Tecniche:**
                - Backend: Node.js, Express.js, Django, ASP.NET Core, Golang
                - Frontend: React.js, Next.js, Vue.js, Vite, React Native, TypeScript
                - Database: PostgreSQL, MySQL, MongoDB, Supabase, AWS DB Services
                - Cloud & DevOps: AWS (EC2, ELB, Lambda), Docker, Kubernetes, Terraform, Proxmox
                - Monitoring: Grafana, Prometheus
                - Altri: Web scraping (Python), IoT (Raspberry Pi, Arduino, ESP32)

                **Progetti Recenti Notevoli:**
                - Piattaforma chat con crittografia E2E (WebSocket, RSA, AES, Diffie-Hellman in Golang + React Native)
                - Sistema di gestione eventi e biglietteria con QR code e integrazione Twilio
                - Piattaforma multitenant per gestione officine auto con OAuth Keycloak
                - Applicazioni white-label con refactoring per multitenancy
                - Setup e gestione cluster Proxmox on-premise con automazione Terraform

                **Specializzazioni:**
                - Architetture serverless e microservizi
                - Implementazione di sistemi di crittografia e sicurezza
                - Pipeline CI/CD con GitHub Actions
                - Scalabilità orizzontale e load balancing
                - Sistemi di failover e disaster recovery

                **Sito Portfolio:**
                Questo portfolio è sviluppato con Next.js 15, TypeScript, Tailwind CSS v4, con animazioni Framer Motion. Include un chatbot AI (questo!), API sandbox per demo, e design responsive con doppio tema (Sober/Beast).

                **Dettagli Personali:**
                Basato in Italia, lavoro sia come freelancer che come IT Manager. Aperto a collaborazioni innovative, progetti open-source e opportunità di co-founding. Contattami a hello@torregrossa.dev.

                Rispondi in modo amichevole e professionale. Se non sai qualcosa, suggerisci di contattarmi direttamente.
              `,
            },
            ...recentMessages,
          ],
          temperature: 0.7,
          max_tokens: 300,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`HTTP error! Status: ${response.status}, Dettagli: ${JSON.stringify(errorData)}`);
      }

      const data = await response.json();
      if (!data.choices || !Array.isArray(data.choices) || data.choices.length === 0) {
        throw new Error("Risposta API non valida: choices non presente o vuoto");
      }

      const botMessage = data.choices[0].message.content;
      setMessages((prev) => [...prev, { role: "assistant", content: botMessage }]);
    } catch (error) {
      console.error("Errore API:", error);
      const errorMessage = error instanceof Error ? error.message : "Si è verificato un errore sconosciuto";
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `Errore: ${errorMessage}. Controlla la connessione o contattami a hello@torregrossa.dev!`,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="chatbot" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-black text-center mb-8 text-accent">
          Chat with Benny
        </h2>
        <div className="border-2 border-primary bg-card/80 p-4 rounded-xl" style={{ backdropFilter: "blur(10px)" }}>
        
          <div className="h-64 overflow-y-auto space-y-4 mb-4">
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`p-2 rounded ${
                  msg.role === "user" 
                    ? "bg-secondary text-secondary-foreground" 
                    : "bg-transparent text-accent"
                }`}
              >
                <strong>{msg.role === "user" ? "Tu:" : "Io:"}</strong> {msg.content}
              </motion.div>
            ))}
            {loading && <p className="text-accent">Typing...</p>}
          </div>
          <div className="flex">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Chiedimi qualcosa su di me o sul sito..."
              className="flex-1 p-2 border-2 border-primary bg-background text-foreground rounded-l placeholder-muted-foreground"
            />
            <button
              onClick={handleSend}
              disabled={loading}
              className="p-2 bg-primary text-primary-foreground rounded-r hover:bg-primary/90 disabled:opacity-50"
            >
              Invia
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}