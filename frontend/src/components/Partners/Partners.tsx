const partners = [
  {
    id: 1,
    abbr: "КМ",
    name: "КровМастер",
    desc: "С 2005 года консультирует, продаёт, поставляет и монтирует кровельные и фасадные материалы в Брянске и близлежащих регионах.",
  },
  {
    id: 2,
    abbr: "СЭ",
    name: "Служба эксплуатации САКС",
    desc: "Обслуживает многоквартирные дома в городе Брянске.",
  },
  {
    id: 3,
    abbr: "CO",
    name: "CaseOne",
    desc: "Разработка CRM систем для юристов и адвокатов.",
  },
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

        <div className="flex flex-wrap justify-center gap-6">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex flex-col items-center gap-3 px-8 py-6 border border-gray-200 rounded-xl hover:border-gold hover:shadow-md transition-all cursor-default max-w-xs text-center"
            >
              <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-navy-950 font-serif font-bold text-lg">
                  {partner.abbr}
                </span>
              </div>
              <p className="text-sm font-semibold text-navy-950">{partner.name}</p>
              <p className="text-xs text-gray-500 leading-relaxed">{partner.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
