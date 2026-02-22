import { Link } from "react-router-dom";

interface ServiceItem {
  name: string;
  price: string;
}

interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  items: ServiceItem[];
}

const services: Service[] = [
  {
    id: 1,
    icon: "⚖️",
    title: "Уголовные дела",
    description:
      "Защита на следствии и в суде любой инстанции. Ведение дел любой сложности.",
    items: [
      { name: "Первичная консультация", price: "Бесплатно" },
      { name: "Защита на стадии следствия", price: "от 50 000 ₽" },
      { name: "Защита в суде первой инстанции", price: "от 80 000 ₽" },
      { name: "Апелляция / кассация", price: "от 30 000 ₽" },
    ],
  },
  {
    id: 2,
    icon: "📋",
    title: "Гражданские дела",
    description:
      "Защита прав в гражданских спорах, взыскание долгов, защита потребителей.",
    items: [
      { name: "Консультация", price: "от 2 000 ₽" },
      { name: "Составление искового заявления", price: "от 5 000 ₽" },
      { name: "Представительство в суде", price: "от 30 000 ₽" },
      { name: "Апелляция / кассация", price: "от 15 000 ₽" },
    ],
  },
  {
    id: 3,
    icon: "👨‍👩‍👧",
    title: "Семейные дела",
    description:
      "Расторжение брака, раздел имущества, алименты, порядок общения с детьми.",
    items: [
      { name: "Развод через суд", price: "от 15 000 ₽" },
      { name: "Раздел имущества", price: "от 40 000 ₽" },
      { name: "Взыскание алиментов", price: "от 10 000 ₽" },
      { name: "Споры о детях", price: "от 25 000 ₽" },
    ],
  },
  {
    id: 4,
    icon: "💼",
    title: "Трудовые споры",
    description:
      "Защита прав работника: незаконное увольнение, невыплата зарплаты, дискриминация.",
    items: [
      { name: "Консультация", price: "от 1 500 ₽" },
      { name: "Составление претензии", price: "от 3 000 ₽" },
      { name: "Представительство в суде", price: "от 20 000 ₽" },
      { name: "Восстановление на работе", price: "от 30 000 ₽" },
    ],
  },
  {
    id: 5,
    icon: "🚗",
    title: "Административные дела",
    description:
      "Обжалование штрафов, лишение водительских прав, административные нарушения.",
    items: [
      { name: "Консультация", price: "от 1 000 ₽" },
      { name: "Обжалование штрафа ГИБДД", price: "от 5 000 ₽" },
      { name: "Дела о лишении прав", price: "от 15 000 ₽" },
      {
        name: "Административное судопроизводство",
        price: "от 20 000 ₽",
      },
    ],
  },
  {
    id: 6,
    icon: "🏠",
    title: "Жилищные вопросы",
    description:
      "Споры о праве собственности, выселение, приватизация, долевое строительство.",
    items: [
      { name: "Консультация", price: "от 2 000 ₽" },
      { name: "Приватизация", price: "от 10 000 ₽" },
      { name: "Оспаривание сделок", price: "от 25 000 ₽" },
      { name: "Выселение / вселение", price: "от 20 000 ₽" },
    ],
  },
];

export default function Prices() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-label mb-2">Стоимость</p>
          <h1 className="section-title mb-4">Услуги и цены</h1>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Стоимость зависит от сложности дела и объёма работы. Первичная
            консультация — <strong>бесплатно</strong>. Итоговая цена
            согласовывается индивидуально.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col hover:border-gold hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{service.icon}</span>
                <h3 className="text-lg font-serif font-bold text-navy-950">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6 flex-1">
                {service.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0 gap-2"
                  >
                    <span className="text-gray-700 text-sm">{item.name}</span>
                    <span className="text-navy-950 font-semibold text-sm whitespace-nowrap">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contacts"
                className="block w-full text-center bg-gold text-navy-950 py-2.5 rounded-lg font-semibold text-sm hover:bg-gold-400 transition-colors mt-auto"
              >
                Записаться
              </Link>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="bg-navy-950 text-white rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-serif font-bold mb-3">
            Не нашли нужную услугу?
          </h3>
          <p className="text-gray-300 mb-8 max-w-lg mx-auto">
            Свяжитесь с нами для индивидуального расчёта или задайте вопрос
            бесплатно
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+79001234567"
              className="bg-gold text-navy-950 px-8 py-3.5 rounded-lg font-semibold hover:bg-gold-400 transition-colors"
            >
              +7 (900) 123-45-67
            </a>
            <Link
              to="/contacts"
              className="border border-gold/60 text-gold px-8 py-3.5 rounded-lg font-semibold hover:bg-gold hover:text-navy-950 transition-colors"
            >
              Написать нам
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
