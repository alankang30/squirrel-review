import Header from "@/components/Header";
import Hero from "@/components/landing/Hero";

export default function Landing() {
  return (
    <div className="h-screen flex flex-col space-between bg-background">
      <Header />
      <Hero />
    </div>
  );
}
