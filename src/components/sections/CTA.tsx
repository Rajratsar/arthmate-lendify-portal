import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTAProps {
  scrollToContact: () => void;
}

export const CTA = ({ scrollToContact }: CTAProps) => {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Lending?</h2>
        <p className="text-xl mb-8 opacity-90">Join leading businesses that trust Arthmate</p>
        <Button variant="secondary" size="lg" className="text-blue-600" onClick={scrollToContact}>
          Contact Sales <ArrowRight className="ml-2" />
        </Button>
      </div>
    </section>
  );
};