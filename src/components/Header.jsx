import { useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "../assets/logo.png";
import FreeTrialPopup from "./Modal";

const navLinks = [
  { href: "#why", label: "Why" },
  { href: "#programs", label: "Programs" },
  { href: "#parents", label: "Features" },
  { href: "#teams", label: "For Parents" },
  { href: "#faq", label: "FAQ" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <img
                src={logo}
                alt="Topmind Care"
                width={32}
                height={32}
                className="rounded-lg"
              />
            </div>
            <span className="text-xl font-semibold text-foreground">
              Topmind Care
            </span>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-5">
            <nav className="hidden md:flex items-end space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[#895AF6] hover:text-primary transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <Button
              variant="default"
              size="sm"
              onClick={() => setIsOpen(true)}
              className="hover:bg-white hover:border hover:border-[#895AF6] hover:text-[#895AF6] transition-all"
            >
              Start Free
            </Button>
          </div>
        </div>
      </div>

      {/* Free Trial Modal */}
      <FreeTrialPopup isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};

export default Header;
