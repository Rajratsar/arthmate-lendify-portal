import { CheckCircle2 } from "lucide-react";

export const Features = () => {
  const features = [
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
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Arthmate</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-lg border hover:shadow-lg transition-shadow">
              <CheckCircle2 className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};