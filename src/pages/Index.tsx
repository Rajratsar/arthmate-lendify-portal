import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">Arthmate</div>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-blue-600">Products</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Solutions</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Resources</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Company</a>
          </div>
          <Button>Contact Us</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Embedded Lending Infrastructure for Digital Platforms
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Enable instant credit for your customers with our comprehensive lending infrastructure
            </p>
            <Button className="text-lg px-8 py-6">
              Get Started <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Arthmate</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Quick Integration",
                description: "Go live within weeks with our plug & play solution"
              },
              {
                title: "Comprehensive Suite",
                description: "End-to-end lending infrastructure for all your needs"
              },
              {
                title: "Scalable Platform",
                description: "Built to handle high volumes with 99.9% uptime"
              }
            ].map((feature, index) => (
              <div key={index} className="p-6 rounded-lg border hover:shadow-lg transition-shadow">
                <CheckCircle2 className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Lending?</h2>
          <p className="text-xl mb-8 opacity-90">Join leading businesses that trust Arthmate</p>
          <Button variant="secondary" size="lg" className="text-blue-600">
            Contact Sales <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold mb-4">Products</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Lending Infrastructure</a></li>
                <li><a href="#" className="hover:text-white">Credit Suite</a></li>
                <li><a href="#" className="hover:text-white">Risk Assessment</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Solutions</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">For Enterprise</a></li>
                <li><a href="#" className="hover:text-white">For Startups</a></li>
                <li><a href="#" className="hover:text-white">For NBFCs</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white">Twitter</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p>&copy; 2024 Arthmate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;