interface Props {
  title?: string;
  subtitle?: string;
}

export default function MapBlock({
  title = "Как нас найти",
  subtitle = "г. Брянск, ул. Крапивницкого 29, офис. 2",
}: Props) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="section-label mb-2">Расположение</p>
          <h2 className="section-title">{title}</h2>
          <p className="text-gray-600 mt-2 flex items-center justify-center gap-1">
            <span>📍</span> {subtitle}
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-80 md:h-[420px]">
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=34.355%2C53.2308&z=17&pt=34.355%2C53.2308%2Cpm2rdm&l=map&text=%D0%91%D1%80%D1%8F%D0%BD%D1%81%D0%BA%2C+%D1%83%D0%BB.+%D0%9A%D1%80%D0%B0%D0%BF%D0%B8%D0%B2%D0%BD%D0%B8%D1%86%D0%BA%D0%BE%D0%B3%D0%BE+29"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Карта расположения офиса"
          />
        </div>
      </div>
    </section>
  );
}
