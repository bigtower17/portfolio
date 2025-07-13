"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// Colori esistenti, adattati per miglior contrasto (testo chiaro su sfondo scuro, e viceversa)
const colors = {
  background: 'var(--background)',
  primary: 'var(--primary)',
  secondary: 'var(--secondary)',
  accent: 'var(--accent)',
  textLight: 'var(--foreground)',
  textDark: 'var(--card-foreground)',
  textGreen: 'var(--textGreen, #4CAF50)',
};

export function Chatbot() {
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', content: string }[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    // Aggiungi il nuovo messaggio utente
    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setLoading(true);
    setInput('');

    try {
      // Limita l'array a un numero massimo di messaggi (es. ultimi 5)
      const recentMessages = newMessages.slice(-5); // Tiene solo gli ultimi 5 messaggi

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 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',
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo', // Modello stabile per test
          messages: [
            {
              role: 'system',
              content: `
                Benny Torregrossa, hai 35 anni, un software engineer e sei italiano. Hai lavorato su complessi progetti finanziati dall'UE prima di dedicarti allo sviluppo software, specializzandoti in prodotti che scalano e rompono barriere. Hai lanciato più di 25 progetti, collaborato con oltre 10 team globali e gestito 15+ deploy cloud.

                **Skills Tecniche:**
                - Frontend: React/Next.js (95%), TypeScript (90%), Tailwind CSS (85%), Vue.js (75%)
                - Backend: Node.js (90%), Python (80%), PostgreSQL (85%), MongoDB (75%)
                - DevOps & Cloud: Docker (85%), AWS (80%), CI/CD (75%), Kubernetes (70%)
                - Mobile: React Native (80%), Flutter (70%), Expo (85%), PWA (90%)
                - Tools: VS Code, Git, Figma, Postman, Jira, Slack, Linear, Notion, Adobe XD, Chrome DevTools

                **Progetti Principali:**
                - Serverless Beast: Architettura serverless su AWS (Lambda, DynamoDB) che ha supportato 100K utenti, riducendo i costi del 70%.
                - Deploy Machine: Pipeline CI/CD con Docker e Kubernetes, migliorando i deploy di 10x.
                - Full-Stack Powerhouse: App React con UX fluida e autenticazione real-time, con 95% di soddisfazione utente.
                - Infrastructure as Poetry: Moduli Terraform riutilizzabili per infrastrutture multi-ambiente.
                - Mobile-First MVP: App cross-platform React Native con notifiche push e modalità offline.
                - Data Pipeline Beast: Elaborazione dati real-time con Python e AWS.

                **Sito Portfolio:**
                Sviluppato con Next.js per performance e SEO, usando Framer Motion per animazioni fluide, Lucide Icons per icone personalizzate, e un design responsive. Include un chatbot (questo!) con OpenAI GPT-4o, un API sandbox per demo, e un code sandbox per progetti interattivi. Lo stile è sobrio con palette colori personalizzata (#363635, #80aea0, #592e83, #8aea92).

                **Soft Skills:**
                Problem Solving (95%), Team Collaboration (90%), Communication (85%), Leadership (80%), Adaptability (90%), Time Management (85%).

                **Dettagli Personali:**
                Basato in Italia, lavoro globalmente, sono AWS Certified (SAA-C03), e sono aperto a collaborazioni, co-founding e progetti innovativi. Contattami a hello@torregrossa.dev.

                Rispondi in modo amichevole e professionale, usando queste informazioni per personalizzare le risposte. Se non sai qualcosa, ammettilo e invita a contattarmi direttamente.
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
        throw new Error('Risposta API non valida: choices non presente o vuoto');
      }

      const botMessage = data.choices[0].message.content;
      setMessages(prev => [...prev, { role: 'assistant', content: botMessage }]); // Corretto a 'assistant'
    } catch (error) {
      console.error('Errore API:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: `Ops, errore! Dettagli: ${error.message}. Verifica la API key o il model.` }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="chatbot" className="py-20" style={{ backgroundColor: 'var(--background)' }}>
      <div className="max-w-4xl mx-auto px-4">
        <h2 style={{ color: 'var(--accent)' }} className="text-3xl font-black text-center mb-8">Chatta con Me! 🤖</h2>
        <div className="border-2 p-4 rounded-xl" style={{ borderColor: 'var(--primary)', backgroundColor: 'rgba(54,54,53,0.8)' }}>
          <div className="h-64 overflow-y-auto space-y-4 mb-4">
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-2 rounded"
                style={{
                  backgroundColor: msg.role === 'user' ? 'var(--secondary)' : 'transparent',
                  color: msg.role === 'user' ? 'var(--textLight)' : 'var(--textGreen)',
                }}
              >
                <strong>{msg.role === 'user' ? 'Tu:' : 'Io:'}</strong> {msg.content}
              </motion.div>
            ))}
            {loading && <p style={{ color: 'var(--accent)' }}>Typing...</p>}
          </div>
          <div className="flex">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Chiedimi qualcosa su di me o sul sito..."
              className="flex-1 p-2 border-2 rounded-l"
              style={{ borderColor: 'var(--primary)', backgroundColor: 'var(--background)', color: 'var(--textLight)' }}
            />
            <button
              onClick={handleSend}
              disabled={loading}
              className="p-2 rounded-r"
              style={{ background: 'var(--primary)', color: 'var(--textLight)' }}
            >
              Invia
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}