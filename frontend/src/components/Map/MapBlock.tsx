interface Props {
  title?: string;
  subtitle?: string;
}

export default function MapBlock({
  title = "Как нас найти",
  subtitle = "г. Москва, ул. Тверская, д. 1, офис 101",
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
          {/*
           * Замените src на реальную ссылку Яндекс.Карт или Google Maps.
           *
           * Яндекс.Карты: https://yandex.ru/map-widget/v1/?ll=37.621&z=15&pt=37.621,55.754,pm2rdm
           * Google Maps:  https://www.google.com/maps/embed?pb=!1m18!...
           *
           * Пример для центра Москвы (замените координаты на ваш реальный адрес):
           */}
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=37.621202%2C55.753544&z=15&pt=37.621202%2C55.753544%2Cpm2rdm&l=map"
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
