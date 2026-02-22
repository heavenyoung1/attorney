import ConsultationForm from "../../components/Form/ConsultationForm";
import MapBlock from "../../components/Map/MapBlock";
import SEOHead from "../../components/SEO/SEOHead";

interface ContactItem {
  icon: string;
  label: string;
  value: string;
  href?: string;
}

const contacts: ContactItem[] = [
  {
    icon: "📞",
    label: "Телефон",
    value: "+7 (910) 335-37-31",
    href: "tel:+79103353731",
  },
  {
    icon: "📧",
    label: "Email",
    value: "advmefed32@yandex.ru",
    href: "mailto:advmefed32@yandex.ru",
  },
  {
    icon: "✈",
    label: "Telegram",
    value: "@advokatmefed",
    href: "https://t.me/advokatmefed",
  },
  {
    icon: "📍",
    label: "Адрес",
    value: "г. Брянск, ул. Крапивницкого 29, офис. 2",
  },
  {
    icon: "⏰",
    label: "Режим работы",
    value: "Пн–Пт: 9:00 — 18:00, Сб: 10:00 — 14:00",
  },
];

export default function Contacts() {
  return (
    <>
      <SEOHead
        title="Контакты адвоката Мефёда А.И. в Брянске"
        description="Адрес: г. Брянск, ул. Крапивницкого, 29. Телефон: +7 (910) 335-37-31. Запись на консультацию онлайн. Работаем Пн–Пт: 9:00–18:00, Сб: 10:00–14:00."
        canonical="/contacts"
      />
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="section-label mb-2">Контакты</p>
            <h1 className="section-title">Свяжитесь с нами</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: contact info */}
            <div>
              <h2 className="text-xl font-serif font-bold text-navy-950 mb-6">
                Контактная информация
              </h2>

              <ul className="space-y-5 mb-8">
                {contacts.map((item) => (
                  <li key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-0.5">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={
                            item.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            item.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="text-navy-950 font-semibold hover:text-gold transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-navy-950 font-semibold">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              {/* Info box */}
              <div className="bg-navy-950 text-white rounded-2xl p-6">
                <h3 className="font-serif font-bold text-lg mb-2">
                  Консультация
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Позвоните или оставьте заявку — ответим в течение 30 минут
                  в рабочее время. Без предоплаты.
                </p>
                <a
                  href="tel:+79103353731"
                  className="inline-block mt-4 bg-gold text-navy-950 px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-gold-400 transition-colors"
                >
                  Позвонить сейчас
                </a>
              </div>
            </div>

            {/* Right: form */}
            <div>
              <h2 className="text-xl font-serif font-bold text-navy-950 mb-6">
                Написать нам
              </h2>
              <ConsultationForm className="bg-gray-50 border border-gray-200 p-8 rounded-2xl" />
            </div>
          </div>
        </div>
      </div>

      <MapBlock />
    </>
  );
}
