"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function ApiSandbox() {
  const [name, setName] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [action, setAction] = useState<'greet' | 'epic' | 'secret'>('greet');
  const [error, setError] = useState<string | null>(null);

  const handleTest = async () => {
    if (!name.trim()) {
      setError('Inserisci un nome, campione!');
      setResponse('');
      return;
    }
    setLoading(true);
    setError(null);
    setResponse('');

    try {
      let endpoint = '/api/demo';
      let body = { name, action };

      console.log(`Chiamata a: ${endpoint} con dati:`, body);

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        throw new Error(`Errore HTTP! Status: ${res.status} - ${res.statusText}`);
      }

      const data = await res.json();
      setResponse(JSON.stringify(data, null, 2));
    } catch (error) {
      console.error('Errore API:', error);
      setResponse(`Errore epico! ${error.message}`);
      setError('Qualcosa è andato storto, riprova o chiama il supporto nerd! Controlla la console per dettagli.');
    } finally {
      setLoading(false);
    }
  };

  const buttonVariants = {
    hover: { scale: 1.1, rotate: 5, transition: { duration: 0.3 } },
    tap: { scale: 0.95, rotate: -5, transition: { duration: 0.2 } },
  };

  const inputVariants = {
    focus: { scale: 1.05, transition: { duration: 0.2 } },
    blur: { scale: 1 },
  };

  return (
    <section id="api-sandbox" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-black text-center mb-8 animate-pulse text-accent">
          API Sandbox: Sblocca il Potere Nerd! 🚀🔧
        </h2>
        <div className="border-2 p-6 rounded-xl space-y-6 border-primary bg-card/80" style={{ backdropFilter: 'blur(10px)' }}>
          {/* Selezione Azione */}
          <div className="flex justify-around mb-4">
            {['greet', 'epic', 'secret'].map((act) => (
              <button
                key={act}
                onClick={() => setAction(act as any)}
                className={`px-4 py-2 rounded-full font-bold transition-all duration-300 border-2 ${
                  action === act 
                    ? 'bg-accent text-accent-foreground border-accent shadow-lg' 
                    : 'bg-transparent text-foreground border-accent hover:bg-accent/10'
                }`}
              >
                {act === 'greet' && 'Saluto Epico'}
                {act === 'epic' && 'Livello Epicità'}
                {act === 'secret' && 'Codice Segreto'}
              </button>
            ))}
          </div>

          {/* Input Nome */}
          <motion.input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Inserisci il tuo nome (o un alias da ninja!)"
            className="w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent border-primary bg-background text-foreground placeholder-muted-foreground"
            variants={inputVariants}
            whileFocus="focus"
            onKeyPress={(e) => e.key === 'Enter' && handleTest()}
          />

          {/* Bottone con Animazione */}
          <motion.button
            onClick={handleTest}
            disabled={loading}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className={`w-full p-3 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 ${
              loading 
                ? 'bg-muted text-muted-foreground cursor-not-allowed' 
                : 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl'
            }`}
          >
            {loading ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                className="w-5 h-5 border-2 border-t-transparent rounded-full border-primary-foreground"
              />
            ) : (
              <>
                <span>🔥 Lancia l'API!</span>
                <span role="img" aria-label="rocket">🚀</span>
              </>
            )}
          </motion.button>

          {/* Risultato */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 rounded-lg text-center bg-red-500/10 border-2 border-red-500 text-red-400"
            >
              {error}
            </motion.div>
          )}
          {response && (
            <motion.pre
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-4 rounded-lg overflow-x-auto bg-accent/10 text-accent border-2 border-accent/20 font-mono text-sm"
            >
              {response}
            </motion.pre>
          )}

          {/* Istruzioni Divertenti */}
          <p className="text-sm text-center text-foreground">
            Scegli un'azione e divertiti! 🎉 Saluto per un benvenuto, Epicità per un punteggio random, o Codice Segreto per un hash nerd!
          </p>
        </div>
      </div>
    </section>
  );
}