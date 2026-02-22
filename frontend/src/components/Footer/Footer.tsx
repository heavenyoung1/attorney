import { Link } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Главная" },
  { to: "/prices", label: "Услуги и цены" },
  { to: "/free-help", label: "Бесплатная помощь" },
  { to: "/contacts", label: "Контакты" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-gray-400">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center font-serif text-navy-950 font-bold text-xl select-none">
                А
              </div>
              <div>
                <p className="font-serif font-bold text-white leading-tight">
                  Мефёд Александр Иванович
                </p>
                <p className="text-gold text-xs tracking-widest uppercase">
                  Адвокат
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Профессиональная юридическая помощь по всем категориям дел. Опыт
              работы — более 15 лет.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Навигация
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Контакты
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:+7103353731"
                  className="hover:text-gold transition-colors flex items-center gap-2"
                >
                  <span>📞</span> +7 (900) 123-45-67
                </a>
              </li>
              <li>
                <a
                  href="mailto:advmefed32@yandex.ru"
                  className="hover:text-gold transition-colors flex items-center gap-2"
                >
                  <span>📧</span>advmefed32@yandex.ru
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>г. Брянск, улица Крапивницкого, 29</span>
              </li>
              <li className="flex items-center gap-2">
                <span>⏰</span> Пн–Пт: 9:00 — 18:00
              </li>
              <li>
                <a
                  href="https://t.me/advokatmefed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors flex items-center gap-2"
                >
                  <span>✈</span> Telegram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-xs text-gray-500 space-y-1">
          <p>
            © {year} Мефёд Александр Иванович. Все права защищены.
          </p>
          <p>
            Информация на сайте носит ознакомительный характер и не является
            публичной офертой.
          </p>
        </div>
      </div>
    </footer>
  );
}
