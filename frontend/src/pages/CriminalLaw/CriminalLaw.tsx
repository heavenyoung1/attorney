import { Link } from "react-router-dom";
import ConsultationForm from "../../components/Form/ConsultationForm";
import SEOHead from "../../components/SEO/SEOHead";

const prices = [
  { name: "Первичная консультация", price: "1 500 ₽" },
  { name: "Защита на стадии доследственной проверки", price: "от 30 000 ₽" },
  { name: "Защита на стадии следствия", price: "от 50 000 ₽" },
  { name: "Защита в суде первой инстанции", price: "от 80 000 ₽" },
  { name: "Апелляционная жалоба", price: "от 30 000 ₽" },
  { name: "Кассационная жалоба", price: "от 30 000 ₽" },
  { name: "Участие в одном судебном заседании", price: "от 10 000 ₽" },
];

const faqs = [
  {
    q: "Что делать, если меня вызвали на допрос?",
    a: "Не ходите на допрос без адвоката — даже если вас вызвали как свидетеля. Позвоните нам до явки в следственный орган. Адвокат разъяснит ваши права, присутствует на допросе и не позволит получить показания с нарушениями.",
  },
  {
    q: "Можно ли изменить меру пресечения — выйти из-под стражи?",
    a: "Да. Адвокат вправе подать ходатайство об изменении меры пресечения (арест → домашний арест → подписка о невыезде). Мы анализируем основания, готовим аргументы и выступаем в суде.",
  },
  {
    q: "Что будет, если нанять адвоката только перед судом?",
    a: "Защита с самого начала — на стадии следствия — значительно эффективнее. Многие ошибки, допущенные на допросах, крайне сложно исправить в суде. Рекомендуем обращаться за помощью немедленно после вызова или задержания.",
  },
  {
    q: "Сколько стоит уголовный адвокат в Брянске?",
    a: "Первичная консультация — 1 500 ₽. Стоимость ведения дела зависит от его сложности, стадии и объёма работы. Цена согласовывается индивидуально до заключения договора.",
  },
  {
    q: "Возможно ли прекращение уголовного дела?",
    a: "Да, при наличии оснований: примирение сторон (ст. 25 УПК), деятельное раскаяние (ст. 28 УПК), истечение сроков давности, отсутствие состава преступления. Адвокат оценит шансы и подготовит ходатайство.",
  },
];

export default function CriminalLaw() {
  return (
    <>
      <SEOHead
        title="Уголовный адвокат в Брянске | Мефёд А.И. — Защита по уголовным делам"
        description="Уголовный адвокат в Брянске — Мефёд Александр Иванович, опыт 25+ лет. Защита на следствии и в суде. Задержание, допрос, арест. Звоните: +7 (910) 335-37-31."
        canonical="/ugolovnyy-advokat-bryansk"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://xn--32-6kcajl7b5a2b.xn--p1ai/" },
              { "@type": "ListItem", "position": 2, "name": "Услуги и цены", "item": "https://xn--32-6kcajl7b5a2b.xn--p1ai/prices" },
              { "@type": "ListItem", "position": 3, "name": "Уголовный адвокат", "item": "https://xn--32-6kcajl7b5a2b.xn--p1ai/ugolovnyy-advokat-bryansk" },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(({ q, a }) => ({
              "@type": "Question",
              "name": q,
              "acceptedAnswer": { "@type": "Answer", "text": a },
            })),
          },
        ]}
      />

      {/* Hero */}
      <section className="bg-navy-950 text-white py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <nav className="text-xs text-gray-400 mb-6 flex gap-2 flex-wrap">
            <Link to="/" className="hover:text-gold transition-colors">Главная</Link>
            <span>/</span>
            <Link to="/prices" className="hover:text-gold transition-colors">Услуги и цены</Link>
            <span>/</span>
            <span className="text-gold">Уголовный адвокат</span>
          </nav>
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">
            Уголовные дела
          </p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-5 leading-tight">
            Уголовный адвокат в Брянске
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mb-8">
            Если вам или вашему близкому предъявили обвинение, возбудили уголовное дело или
            вызвали на допрос — нужен опытный уголовный адвокат в Брянске. Адвокат Мефёд
            Александр Иванович специализируется на защите по уголовным делам с 2001 года,
            является членом Адвокатской Палаты Брянской Области (реестровый номер 32/142).
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+79103353731"
              className="bg-gold text-navy-950 px-8 py-3.5 rounded-lg font-semibold hover:bg-gold-400 transition-colors text-center"
            >
              Позвонить: +7 (910) 335-37-31
            </a>
            <a
              href="#consultation"
              className="border border-gold/60 text-gold px-8 py-3.5 rounded-lg font-semibold hover:bg-gold hover:text-navy-950 transition-colors text-center"
            >
              Оставить заявку
            </a>
          </div>
        </div>
      </section>

      <div className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">

          {/* Services list */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-navy-950 mb-4">
              Какие уголовные дела я веду в Брянске
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              За 25 лет практики адвокат Мефёд А.И. вёл дела всех категорий в судах Брянска
              и Брянской области. Вот основные направления защиты:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "Преступления против личности — убийство, причинение вреда здоровью (ст. 105–125 УК РФ)",
                "Кражи, грабёж, разбой, мошенничество (ст. 158–163, 159 УК РФ)",
                "Наркотические преступления — хранение, сбыт, изготовление (ст. 228–234 УК РФ)",
                "ДТП с пострадавшими и смертельным исходом (ст. 264 УК РФ)",
                "Экономические преступления — растрата, уклонение от налогов",
                "Должностные преступления — взятка, злоупотребление полномочиями",
                "Преступления против половой неприкосновенности",
                "Незаконный оборот оружия (ст. 222–226 УК РФ)",
                "Компьютерные преступления (гл. 28 УК РФ)",
                "Нарушение авторских прав и интеллектуальной собственности",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl px-4 py-3">
                  <span className="text-gold mt-0.5 text-lg flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* When needed */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-navy-950 mb-4">
              Когда нужна помощь уголовного адвоката?
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Чем раньше вы обратитесь к адвокату — тем больше возможностей для защиты.
              Не ждите предъявления обвинения.
            </p>
            <div className="space-y-3">
              {[
                { step: "01", title: "Вызов на допрос", desc: "Даже в качестве свидетеля — без адвоката не ходите. Свидетель может стать обвиняемым в ходе одного допроса." },
                { step: "02", title: "Задержание или арест", desc: "Немедленно позвоните адвокату. По закону вы имеете право на защитника с момента задержания." },
                { step: "03", title: "Обыск или выемка", desc: "Адвокат присутствует при следственных действиях, контролирует законность и фиксирует нарушения." },
                { step: "04", title: "Предъявление обвинения", desc: "Начиная с этого момента все действия без адвоката — грубая ошибка. Требуйте защитника немедленно." },
                { step: "05", title: "Суд первой инстанции", desc: "Адвокат готовит позицию защиты, допрашивает свидетелей, представляет доказательства." },
                { step: "06", title: "Апелляция и кассация", desc: "Если приговор уже вынесен — не поздно. Мы обжалуем решения вышестоящих судов." },
              ].map(({ step, title, desc }) => (
                <div key={step} className="flex gap-4 bg-white border border-gray-100 rounded-xl p-5">
                  <div className="flex-shrink-0 w-10 h-10 bg-navy-950 text-gold rounded-full flex items-center justify-center font-bold text-sm">
                    {step}
                  </div>
                  <div>
                    <p className="font-semibold text-navy-950 mb-1">{title}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* How I work */}
          <section className="mb-16 bg-navy-950/5 border-l-4 border-navy-950 rounded-r-xl px-6 py-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-navy-950 mb-4">
              Как я защищаю клиентов по уголовным делам
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Защита по уголовному делу — это системная работа на каждом этапе. Адвокат Мефёд А.И.
              не просто присутствует на заседаниях. Мы выстраиваем стратегию с первого дня:
            </p>
            <ul className="space-y-2 text-gray-700">
              {[
                "Немедленный выезд к задержанному или арестованному (в т.ч. в ИВС и СИЗО)",
                "Анализ доказательной базы — поиск процессуальных нарушений",
                "Ходатайства об изменении меры пресечения: арест → домашний арест → подписка",
                "Признание доказательств недопустимыми при нарушениях при их сборе",
                "Подготовка алиби, сбор характеристик и справок в защиту подзащитного",
                "Переквалификация на более мягкую статью или прекращение дела",
                "Добиваемся условного наказания или штрафа вместо реального срока",
                "Обжалование приговора в апелляционной и кассационной инстанциях",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-gold mt-0.5 flex-shrink-0">→</span>
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Prices */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-navy-950 mb-2">
              Стоимость услуг уголовного адвоката в Брянске
            </h2>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              Цена зависит от сложности дела, стадии и объёма работы. Итоговая стоимость
              обсуждается на консультации и фиксируется в договоре.
            </p>
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
              {prices.map((item, i) => (
                <div
                  key={item.name}
                  className={`flex justify-between items-center px-6 py-4 gap-4 ${
                    i !== prices.length - 1 ? "border-b border-gray-100" : ""
                  }`}
                >
                  <span className="text-gray-700 text-sm">{item.name}</span>
                  <span className="font-semibold text-navy-950 text-sm whitespace-nowrap">{item.price}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-3">
              * Цены указаны ориентировочно. Точная стоимость определяется после изучения дела.
            </p>
          </section>

          {/* Internal links */}
          <section className="mb-16">
            <h2 className="text-2xl font-serif font-bold text-navy-950 mb-4">
              Другие направления юридической помощи
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link
                to="/grazhdanskiy-advokat-bryansk"
                className="bg-white border border-gray-200 hover:border-gold rounded-xl px-5 py-4 flex items-center gap-3 transition-all group"
              >
                <span className="text-2xl">📋</span>
                <div>
                  <p className="font-semibold text-navy-950 group-hover:text-gold transition-colors text-sm">
                    Гражданские дела
                  </p>
                  <p className="text-gray-500 text-xs">Взыскание долгов, споры по недвижимости</p>
                </div>
              </Link>
              <Link
                to="/semeynyy-advokat-bryansk"
                className="bg-white border border-gray-200 hover:border-gold rounded-xl px-5 py-4 flex items-center gap-3 transition-all group"
              >
                <span className="text-2xl">👨‍👩‍👧</span>
                <div>
                  <p className="font-semibold text-navy-950 group-hover:text-gold transition-colors text-sm">
                    Семейные дела
                  </p>
                  <p className="text-gray-500 text-xs">Развод, алименты, раздел имущества</p>
                </div>
              </Link>
              <Link
                to="/prices"
                className="bg-white border border-gray-200 hover:border-gold rounded-xl px-5 py-4 flex items-center gap-3 transition-all group"
              >
                <span className="text-2xl">⚖️</span>
                <div>
                  <p className="font-semibold text-navy-950 group-hover:text-gold transition-colors text-sm">
                    Все услуги и цены
                  </p>
                  <p className="text-gray-500 text-xs">Трудовые, административные, жилищные дела</p>
                </div>
              </Link>
              <Link
                to="/contacts"
                className="bg-white border border-gray-200 hover:border-gold rounded-xl px-5 py-4 flex items-center gap-3 transition-all group"
              >
                <span className="text-2xl">📞</span>
                <div>
                  <p className="font-semibold text-navy-950 group-hover:text-gold transition-colors text-sm">
                    Связаться с адвокатом
                  </p>
                  <p className="text-gray-500 text-xs">Офис в Брянске, онлайн-заявка</p>
                </div>
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-navy-950 mb-6">
              Часто задаваемые вопросы
            </h2>
            <div className="space-y-4">
              {faqs.map(({ q, a }) => (
                <div key={q} className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-serif font-bold text-navy-950 mb-2">{q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section id="consultation">
            <div className="mb-8 text-center">
              <p className="section-label mb-2">Консультация</p>
              <h2 className="section-title">Нужен уголовный адвокат в Брянске?</h2>
              <p className="text-gray-600 mt-3 text-sm max-w-lg mx-auto">
                Оставьте заявку или позвоните прямо сейчас. Консультация —
                от 1 500 ₽. Первый звонок — бесплатно.
              </p>
            </div>
            <ConsultationForm
              className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm max-w-2xl mx-auto"
              initialMessage="Уголовные дела"
            />
          </section>

        </div>
      </div>
    </>
  );
}
