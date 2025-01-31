import { Button } from "@/components/ui/button";
import { Link, FileText } from "lucide-react";

const CustomerService = () => {
  const handleNachClick = () => {
    window.open("https://nach.arthmate.com/", "_blank", "noopener,noreferrer");
  };

  const handlePortalClick = () => {
    window.open("https://customerportal.arthmate.com/", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-12">Customer Service</h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <Button
            variant="outline"
            size="lg"
            onClick={handleNachClick}
            className="w-full md:w-64 h-32 flex flex-col items-center justify-center gap-4 border-2"
          >
            <Link className="h-8 w-8" />
            <span>NACH</span>
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={handlePortalClick}
            className="w-full md:w-64 h-32 flex flex-col items-center justify-center gap-4 border-2"
          >
            <FileText className="h-8 w-8" />
            <span>Customer Portal</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CustomerService;