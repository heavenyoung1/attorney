import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Главная", end: true },
  { to: "/prices", label: "Услуги и цены", end: false },
  { to: "/contacts", label: "Контакты", end: false },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-navy-950 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 flex-shrink-0"
            onClick={() => setIsOpen(false)}
          >
            <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center font-serif text-navy-950 font-bold text-xl select-none">
              А
            </div>
            <div>
              <p className="font-serif font-bold text-base leading-tight">
                Мефёд Александр Иванович
              </p>
              <p className="text-gold text-xs tracking-widest uppercase">
                Адвокат
              </p>
            </div>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-gold ${
                    isActive ? "text-gold" : "text-gray-300"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href="tel:+79001234567"
              className="bg-gold text-navy-950 px-5 py-2 rounded-lg font-semibold text-sm hover:bg-gold-400 transition-colors whitespace-nowrap"
            >
              +7 (900) 123-45-67
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-1"
            onClick={() => setIsOpen((o) => !o)}
            aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-white/10 flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-gold ${
                    isActive ? "text-gold" : "text-gray-300"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href="tel:+79001234567"
              className="bg-gold text-navy-950 px-4 py-3 rounded-lg font-semibold text-sm text-center hover:bg-gold-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              +7 (900) 123-45-67
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
