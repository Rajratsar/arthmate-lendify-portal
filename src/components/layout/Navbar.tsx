import { Button } from "@/components/ui/button";
import { LogIn, Building, User, LogOut } from "lucide-react";
import { useSession } from "@supabase/auth-helpers-react";
import { supabase } from "@/integrations/supabase/client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";

interface NavbarProps {
  setLoginOpen: (open: boolean) => void;
  setProfileOpen: (open: boolean) => void;
  scrollToContact: () => void;
}

export const Navbar = ({ setLoginOpen, setProfileOpen, scrollToContact }: NavbarProps) => {
  const session = useSession();

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      toast.success("Logged out successfully");
    } catch (error) {
      console.error("Error logging out:", error);
      toast.error("Failed to log out");
    }
  };

  const handleCustomerPortalClick = () => {
    const portalUrl = "https://nach.arthmate.com";
    console.log("Redirecting to:", portalUrl);
    window.open(portalUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-600">Arthmate</div>
        <div className="hidden md:flex flex-1 items-center justify-center gap-8">
          <a href="#" className="text-gray-600 hover:text-blue-600">Products</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">Solutions</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">Resources</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">Company</a>
          <a href="#" className="text-gray-600 hover:text-blue-600" onClick={scrollToContact}>Contact Us</a>
        </div>
        <div className="flex items-center gap-4">
          {session && (
            <Button 
              variant="outline" 
              className="hidden md:flex items-center gap-2"
              onClick={handleCustomerPortalClick}
            >
              <Building className="h-4 w-4" />
              Customer Portal
            </Button>
          )}
          {session ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="hidden md:flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Profile
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem onClick={() => setProfileOpen(true)}>
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button 
              variant="outline" 
              className="hidden md:flex items-center gap-2"
              onClick={() => setLoginOpen(true)}
            >
              <LogIn className="h-4 w-4" />
              Login
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};