import { Link } from "react-router-dom";
import ConsultationForm from "../../components/Form/ConsultationForm";
import SEOHead from "../../components/SEO/SEOHead";

const prices = [
  { name: "Консультация", price: "от 2 000 ₽" },
  { name: "Составление претензии", price: "от 3 000 ₽" },
  { name: "Составление искового заявления", price: "от 5 000 ₽" },
  { name: "Представительство в суде (одно заседание)", price: "от 10 000 ₽" },
  { name: "Ведение дела под ключ", price: "от 30 000 ₽" },
  { name: "Апелляция / кассация", price: "от 15 000 ₽" },
];

const faqs = [
  {
    q: "Стоит ли нанимать адвоката по гражданскому делу?",
    a: "В большинстве случаев — да. Суд в гражданских делах не помогает сторонам, а лишь выносит решение на основании представленных доказательств. Без юридической подготовки легко пропустить сроки, неправильно оформить документы или проиграть дело из-за процессуальных ошибок.",
  },
  {
    q: "Сколько длится гражданский процесс в Брянске?",
    a: "Средний срок рассмотрения дела в суде первой инстанции — 2–6 месяцев. С учётом обжалования — до 1–2 лет. Ускорить процесс помогает грамотная подготовка документов и доказательств с самого начала.",
  },
  {
    q: "Можно ли взыскать долг без суда?",
    a: "Иногда достаточно грамотной претензии. Мы пробуем досудебное урегулирование — направляем претензию с требованием об оплате. Если должник игнорирует — подаём в суд и через исполнительный лист взыскиваем через приставов.",
  },
  {
    q: "Что делать, если страховая занизила выплату по ОСАГО?",
    a: "Первый шаг — независимая экспертиза, которая установит реальный ущерб. Затем — претензия в страховую, при отказе — иск в суд. По закону об ОСАГО суд вправе взыскать со страховой штраф в размере 50% от суммы сверх выплаченного.",
  },
  {
    q: "Могу ли я выиграть дело о наследстве, если прошли сроки вступления?",
    a: "Да, если есть уважительная причина пропуска шестимесячного срока: болезнь, незнание о смерти наследодателя, нахождение за рубежом. Суд восстанавливает пропущенный срок при наличии доказательств.",
  },
];

export default function CivilLaw() {
  return (
    <>
      <SEOHead
        title="Адвокат по гражданским делам в Брянске | Мефёд А.И."
        description="Адвокат по гражданским делам в Брянске — Мефёд А.И. Взыскание долгов, споры по недвижимости, защита потребителей, наследство. Звоните: +7 (910) 335-37-31."
        canonical="/grazhdanskiy-advokat-bryansk"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://xn--32-6kcajl7b5a2b.xn--p1ai/" },
              { "@type": "ListItem", "position": 2, "name": "Услуги и цены", "item": "https://xn--32-6kcajl7b5a2b.xn--p1ai/prices" },
              { "@type": "ListItem", "position": 3, "name": "Гражданские дела", "item": "https://xn--32-6kcajl7b5a2b.xn--p1ai/grazhdanskiy-advokat-bryansk" },
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
            <span className="text-gold">Гражданские дела</span>
          </nav>
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">
            Гражданские дела
          </p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-5 leading-tight">
            Адвокат по гражданским делам в Брянске
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mb-8">
            Гражданский спор — это имущественные разногласия, которые решаются в суде.
            Взыскание долгов, споры о наследстве, сделки с недвижимостью, защита потребителей,
            возмещение ущерба после ДТП. Адвокат Мефёд Александр Иванович защищает интересы
            граждан и предпринимателей в Брянске с 2001 года.
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

          {/* Services */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-navy-950 mb-4">
              Какие гражданские дела мы ведём в Брянске
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Адвокат Мефёд А.И. представляет интересы клиентов по широкому кругу гражданских споров:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "Взыскание долгов по распискам и договорам займа",
                "Споры по договорам купли-продажи, аренды, подряда",
                "Сделки с недвижимостью: оспаривание, расторжение",
                "Защита прав потребителей (ЗоЗПП)",
                "Наследственные споры — оспаривание завещания, восстановление сроков",
                "Возмещение ущерба после ДТП — со страховой или виновника",
                "Споры с управляющими компаниями и ЖКХ",
                "Корпоративные споры между участниками ООО",
                "Взыскание неосновательного обогащения",
                "Защита деловой репутации и персональных данных",
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
              Когда нужен адвокат по гражданским делам?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: "💰", title: "Не возвращают долг", desc: "Должник игнорирует требования или скрывается. Мы взыскиваем через суд и исполнительное производство." },
                { icon: "🏠", title: "Спор по недвижимости", desc: "Оспаривание сделки, раздел имущества, проблемы с регистрацией права собственности." },
                { icon: "⚖️", title: "Нарушение договора", desc: "Контрагент нарушил условия — не выполнил работу, не поставил товар, не вернул аванс." },
                { icon: "🚗", title: "Страховая занизила выплату", desc: "Независимая экспертиза, претензия, суд. Взыскиваем реальный ущерб плюс штраф со страховой." },
                { icon: "📝", title: "Наследственный спор", desc: "Другие наследники оспаривают завещание или пропущены сроки вступления в наследство." },
                { icon: "🛒", title: "Права потребителя", desc: "Продали некачественный товар, не вернули деньги — взыскиваем стоимость, неустойку и моральный вред." },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="bg-white border border-gray-200 rounded-xl p-5 flex gap-4">
                  <span className="text-3xl flex-shrink-0">{icon}</span>
                  <div>
                    <p className="font-semibold text-navy-950 mb-1 text-sm">{title}</p>
                    <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* How it works */}
          <section className="mb-16 bg-navy-950/5 border-l-4 border-navy-950 rounded-r-xl px-6 py-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-navy-950 mb-4">
              Как мы работаем по гражданскому делу
            </h2>
            <div className="space-y-4">
              {[
                { n: "1", t: "Консультация и оценка перспектив", d: "Изучаем документы, оцениваем шансы на победу, определяем стратегию. Честно говорим о рисках." },
                { n: "2", t: "Досудебное урегулирование", d: "Направляем претензию — это обязательный шаг во многих категориях дел. Иногда позволяет решить спор без суда." },
                { n: "3", t: "Подготовка документов и иска", d: "Собираем доказательства, готовим исковое заявление с расчётом суммы требований, ходатайства." },
                { n: "4", t: "Судебное представительство", d: "Участвуем в каждом заседании, допрашиваем свидетелей, реагируем на доводы противоположной стороны." },
                { n: "5", t: "Исполнение решения суда", d: "После победы помогаем получить деньги: работаем с приставами, разыскиваем имущество должника." },
              ].map(({ n, t, d }) => (
                <div key={n} className="flex gap-4">
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-navy-950 text-gold flex items-center justify-center font-bold text-sm">
                    {n}
                  </div>
                  <div className="pt-1">
                    <p className="font-semibold text-navy-950 mb-1 text-sm">{t}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Prices */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-navy-950 mb-2">
              Стоимость услуг адвоката по гражданским делам в Брянске
            </h2>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              Цены ориентировочные — точная стоимость определяется после изучения обстоятельств дела.
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
          </section>

          {/* Internal links */}
          <section className="mb-16">
            <h2 className="text-2xl font-serif font-bold text-navy-950 mb-4">
              Другие направления юридической помощи
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link
                to="/ugolovnyy-advokat-bryansk"
                className="bg-white border border-gray-200 hover:border-gold rounded-xl px-5 py-4 flex items-center gap-3 transition-all group"
              >
                <span className="text-2xl">⚖️</span>
                <div>
                  <p className="font-semibold text-navy-950 group-hover:text-gold transition-colors text-sm">Уголовные дела</p>
                  <p className="text-gray-500 text-xs">Защита на следствии и в суде</p>
                </div>
              </Link>
              <Link
                to="/semeynyy-advokat-bryansk"
                className="bg-white border border-gray-200 hover:border-gold rounded-xl px-5 py-4 flex items-center gap-3 transition-all group"
              >
                <span className="text-2xl">👨‍👩‍👧</span>
                <div>
                  <p className="font-semibold text-navy-950 group-hover:text-gold transition-colors text-sm">Семейные дела</p>
                  <p className="text-gray-500 text-xs">Развод, алименты, раздел имущества</p>
                </div>
              </Link>
              <Link
                to="/prices"
                className="bg-white border border-gray-200 hover:border-gold rounded-xl px-5 py-4 flex items-center gap-3 transition-all group"
              >
                <span className="text-2xl">📋</span>
                <div>
                  <p className="font-semibold text-navy-950 group-hover:text-gold transition-colors text-sm">Все услуги и цены</p>
                  <p className="text-gray-500 text-xs">Трудовые, административные, жилищные дела</p>
                </div>
              </Link>
              <Link
                to="/contacts"
                className="bg-white border border-gray-200 hover:border-gold rounded-xl px-5 py-4 flex items-center gap-3 transition-all group"
              >
                <span className="text-2xl">📞</span>
                <div>
                  <p className="font-semibold text-navy-950 group-hover:text-gold transition-colors text-sm">Связаться с адвокатом</p>
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
              <h2 className="section-title">Нужна помощь адвоката по гражданскому делу?</h2>
              <p className="text-gray-600 mt-3 text-sm max-w-lg mx-auto">
                Оставьте заявку или позвоните. Разберём вашу ситуацию
                и оценим перспективы дела.
              </p>
            </div>
            <ConsultationForm
              className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm max-w-2xl mx-auto"
              initialMessage="Гражданские дела"
            />
          </section>

        </div>
      </div>
    </>
  );
}
