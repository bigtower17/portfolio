import { NextResponse } from 'next/server';
import md5 from "md5"; // Assicurati di avere questa dipendenza: npm install md5

export async function POST(request: Request) {
  const { name, action } = await request.json();

  if (!name) {
    return NextResponse.json({ error: 'Nome richiesto!' }, { status: 400 });
  }

  switch (action) {
    case 'greet':
      return NextResponse.json({ message: `Ciao ${name}! Sono Benny Torregrossa, il tuo full-stack dev epico!` });
    case 'epic':
      const epicLevel = Math.floor(Math.random() * 100) + 1; // Punteggio random 1-100
      return NextResponse.json({ name, epicLevel: `${epicLevel}% Epicità! 🎉` });
    case 'secret':
      const secretCode = md5(name); // Hash MD5 del nome
      return NextResponse.json({ name, secretCode: `Il tuo codice segreto: ${secretCode}` });
    default:
      return NextResponse.json({ message: `Benvenuto ${name}! Non so cosa fare, ma sono pronto ad aiutarti!` });
  }
}