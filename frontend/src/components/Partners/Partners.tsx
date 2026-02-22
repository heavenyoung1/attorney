const partners = [
  { id: 1, abbr: "ЮК", name: "Юридическая Коллегия №1" },
  { id: 2, abbr: "АП", name: "Адвокатская Палата г. Москвы" },
  { id: 3, abbr: "ПЦ", name: "Правовой Центр «Защита»" },
  { id: 4, abbr: "АС", name: "Арбитражный Союз" },
  { id: 5, abbr: "НК", name: "Нотариальная Контора" },
];

export default function Partners() {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="section-label mb-2">Партнёры</p>
          <h2 className="text-2xl font-serif font-bold text-navy-950">
            Надёжные партнёры
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex flex-col items-center gap-2 px-6 py-5 border border-gray-200 rounded-xl hover:border-gold hover:shadow-md transition-all cursor-default w-40"
            >
              {/*
               * Замените <div> на <img> с реальным логотипом:
               * <img src={`/partners/${partner.id}.svg`} alt={partner.name} className="h-12 object-contain" />
               */}
              <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-navy-950 font-serif font-bold text-lg">
                  {partner.abbr}
                </span>
              </div>
              <p className="text-xs text-gray-600 text-center leading-tight">
                {partner.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
