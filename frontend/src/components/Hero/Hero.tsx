import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      className="relative text-white overflow-hidden"
      style={{
        backgroundImage: "url('/backgrpund.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-navy-950/70" />

      <div className="relative container mx-auto px-4">
        <div className="flex flex-col items-start text-left py-24 md:py-32 max-w-3xl">

          {/* Badge */}
          <span className="inline-block text-xs font-semibold tracking-widest text-gold uppercase mb-6 border border-gold/30 px-4 py-1.5 rounded-full">
            Профессиональная юридическая помощь
          </span>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-5 leading-tight">
            Адвокат в Брянске
          </h1>

          {/* Attorney name as prominent subtitle-link */}
          <p className="text-2xl md:text-3xl font-serif font-semibold text-gold mb-4">
            <a href="tel:+79103353731" className="hover:opacity-80 transition-opacity">
              Мефёд Александр Иванович
            </a>
          </p>

          {/* Subtitle */}
          <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-2xl">
            Уголовные, гражданские, семейные дела. Защита в суде с 2001 года.
          </p>

          {/* Credentials */}
          <div className="flex flex-col gap-2 mb-10">
            {[
              "Член Адвокатской Палаты Брянской Области",
              "Уголовные и гражданские дела",
              "№ 32/142 · в реестре адвокатов",
            ].map((item) => (
              <span
                key={item}
                className="flex items-center gap-1.5 text-sm text-gray-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full"
              >
                <span className="text-gold text-xs">✓</span> {item}
              </span>
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
