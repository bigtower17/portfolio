import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";
import { ApiSandbox } from "@/components/sections/apisandbox";
import { Chatbot } from "@/components/sections/chatbot";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Chatbot />
      <About />
      <ApiSandbox />
      
      
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}