import { Link } from "react-router-dom";

const stats = [
  { value: "500+", label: "выигранных дел" },
  { value: "24", label: "года опыта" },
  { value: "98%", label: "довольных клиентов" },
];

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center py-24 md:py-32 max-w-3xl mx-auto">

          {/* Badge */}
          <span className="inline-block text-xs font-semibold tracking-widest text-gold uppercase mb-6 border border-gold/30 px-4 py-1.5 rounded-full">
            Профессиональная юридическая помощь
          </span>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-5 leading-tight">
            Мефёд Александр Иванович
          </h1>

          {/* Subtitle */}
          <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-2xl">
            Защищаю права граждан и организаций в уголовных, гражданских и
            административных делах. Первичная консультация — бесплатно.
          </p>

          {/* Credentials */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              "Адвокатская палата г. Брянска",
              "Уголовные и гражданские дела",
              "№ 32/142 · с 2001 года",
            ].map((item) => (
              <span
                key={item}
                className="flex items-center gap-1.5 text-sm text-gray-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full"
              >
                <span className="text-gold text-xs">✓</span> {item}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="flex items-center divide-x divide-white/20 mb-10">
            {stats.map((s) => (
              <div key={s.label} className="px-8 text-center">
                <p className="text-gold text-3xl font-bold">{s.value}</p>
                <p className="text-gray-400 text-sm mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
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
    </section>
  );
}
