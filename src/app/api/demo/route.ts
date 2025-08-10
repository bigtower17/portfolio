import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, action } = await req.json();

  if (!name || typeof name !== "string") {
    return NextResponse.json({ error: "Nome richiesto" }, { status: 400 });
  }

  switch (action) {
    case "greet":
      return NextResponse.json({ message: `Ciao ${name}, benvenuto nel mio mondo nerd!` }, { status: 200 });
    case "epic":
      return NextResponse.json({ message: `Epicità di ${name}: ${Math.floor(Math.random() * 100)}!` }, { status: 200 });
    case "secret":
      return NextResponse.json({ message: `Hash segreto per ${name}: ${Buffer.from(name).toString("hex")}` }, { status: 200 });
    case "nickname":
      const nickname = `${name.toLowerCase().replace(/[^a-z]/g, "")}Code${Math.floor(Math.random() * 100)}`;
      return NextResponse.json({ nickname }, { status: 200 });
    case "future":
      const futures = ["programmerai in Quantum JS", "dominerai il Metaverso", "creerai IA senzienti"];
      return NextResponse.json({ prediction: `Tra 5 anni ${name} ${futures[Math.floor(Math.random() * futures.length)]}!` }, { status: 200 });
    case "battle":
      const enemy = ["Bug Colossale", "Server Crash", "Malware Alieno"][Math.floor(Math.random() * 3)];
      const epicness = Math.floor(Math.random() * 100);
      return NextResponse.json({ battleResult: `Hai sconfitto il ${enemy}! Epicità: ${epicness}/100` }, { status: 200 });
    case "ascii":
      const asciiArt = `
        __  __       _         
        |  \\/  |     (_)        
        | \\  / | __ _ _ _ __    
        | |\\/| |/ _\` | | '_ \\   
        | |  | | (_| | | | | |  
        |_|  |_|\\__,_|_|_| |_|  
        ${name}!`;
      return NextResponse.json({ asciiArt }, { status: 200 });
    case "alien":
      const alienMessage = Buffer.from(name).toString("base64").replace(/=/g, "") + " - Trasmissione da Zeta Reticuli";
      return NextResponse.json({ alienMessage }, { status: 200 });
    default:
      return NextResponse.json({ error: "Azione non valida" }, { status: 400 });
  }
}