import React from 'react';
import { Menu, X, Github, Linkedin, Instagram, Twitter } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navigation = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-gray-800">
            RK<span className="text-blue-600">Bind</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-semibold text-gray-700 hover:text-blue-600 transition-colors px-3 py-1 rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 font-semibold text-gray-700 hover:text-blue-600 transition-colors px-3 rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}