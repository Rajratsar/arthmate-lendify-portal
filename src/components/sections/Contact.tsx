import { Mail, Phone, MapPin } from "lucide-react";
import { ForwardedRef, forwardRef } from "react";

export const Contact = forwardRef((props, ref: ForwardedRef<HTMLElement>) => {
  return (
    <section ref={ref} className="py-20 bg-gray-50" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <div className="max-w-lg mx-auto space-y-6">
          <div className="flex items-center gap-4 justify-center">
            <MapPin className="w-6 h-6 text-blue-600" />
            <address className="text-lg not-italic">
              Plot No. 492, 2nd Floor, Udyog Vihar Phase-3, Sector-20, Gurugram, Haryana 122016
            </address>
          </div>
          <div className="flex items-center gap-4 justify-center">
            <Mail className="w-6 h-6 text-blue-600" />
            <a href="mailto:rvsinghchhotu@omnifi.in" className="text-lg hover:text-blue-600">
              rvsinghchhotu@omnifi.in
            </a>
          </div>
          <div className="flex items-center gap-4 justify-center">
            <Phone className="w-6 h-6 text-blue-600" />
            <a href="tel:+919871569779" className="text-lg hover:text-blue-600">
              +91 9871569779
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

Contact.displayName = "Contact";