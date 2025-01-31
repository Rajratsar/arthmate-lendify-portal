import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  scrollToContact: () => void;
}

export const Hero = ({ scrollToContact }: HeroProps) => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Embedded Lending Infrastructure for Digital Platforms
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Enable instant credit for your customers with our comprehensive lending infrastructure
          </p>
          <Button className="text-lg px-8 py-6" onClick={scrollToContact}>
            Get Started <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};