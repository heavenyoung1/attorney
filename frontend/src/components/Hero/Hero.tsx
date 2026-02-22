import { Link } from "react-router-dom";

const stats = [
  { value: "500+", label: "Выигранных дел" },
  { value: "24", label: "Года опыта" },
  { value: "98%", label: "Довольных клиентов" },
];

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-stretch min-h-[560px]">

          {/* Left: text content */}
          <div className="flex-1 flex flex-col justify-center py-20 md:py-24 text-center md:text-left md:pr-12">
            <p className="section-label mb-3">Профессиональная юридическая помощь</p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 leading-tight">
              Мефёд Александр Иванович
            </h1>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed max-w-xl mx-auto md:mx-0">
              Защищаю права граждан и организаций в уголовных, гражданских и
              административных делах. Первичная консультация — бесплатно.
            </p>

            {/* Credentials */}
            <ul className="text-gray-400 text-sm space-y-1.5 mb-8 inline-block text-left mx-auto md:mx-0">
              {[
                "Член Адвокатской палаты г. Брянска",
                "Специализация: уголовные и гражданские дела",
                "Регистрационный № 32/142 · адвокат с 2001 года",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-gold flex-shrink-0">✓</span> {item}
                </li>
              ))}
            </ul>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mb-8 max-w-sm mx-auto md:mx-0">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white/10 backdrop-blur rounded-xl p-3 text-center"
                >
                  <p className="text-gold text-2xl font-bold">{s.value}</p>
                  <p className="text-gray-300 text-xs mt-0.5 leading-tight">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <a
                href="#consultation"
                className="bg-gold text-navy-950 px-8 py-3.5 rounded-lg font-semibold hover:bg-gold-400 transition-colors text-center text-sm"
              >
                Получить консультацию
              </a>
              <Link
                to="/prices"
                className="border border-gold/60 text-gold px-8 py-3.5 rounded-lg font-semibold hover:bg-gold hover:text-navy-950 transition-colors text-center text-sm"
              >
                Услуги и цены
              </Link>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
