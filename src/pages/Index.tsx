import { useRef, useState } from "react";
import { LoginDialog } from "@/components/LoginDialog";
import { ProfileDialog } from "@/components/ProfileDialog";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { CTA } from "@/components/sections/CTA";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const [loginOpen, setLoginOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Navbar 
        setLoginOpen={setLoginOpen}
        setProfileOpen={setProfileOpen}
        scrollToContact={scrollToContact}
      />
      <LoginDialog open={loginOpen} onOpenChange={setLoginOpen} />
      <ProfileDialog open={profileOpen} onOpenChange={setProfileOpen} />
      
      <Hero scrollToContact={scrollToContact} />
      <Features />
      <CTA scrollToContact={scrollToContact} />
      <Contact ref={contactRef} />
      <Footer />
    </div>
  );
};

export default Index;