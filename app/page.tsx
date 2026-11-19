import { Hero } from "@/components/sections/Hero";
import { Philosophy } from "@/components/sections/Philosophy";
import { Work } from "@/components/sections/Work";
import { Journey } from "@/components/sections/Journey";
import { Skills } from "@/components/sections/Skills";
import { Discipline } from "@/components/sections/Discipline";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Philosophy />
      <Work />
      <Journey />
      <Skills />
      <Discipline />
      <Contact />
    </>
  );
}
