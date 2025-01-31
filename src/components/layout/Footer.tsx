export const Footer = () => {
  return (
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
  );
};