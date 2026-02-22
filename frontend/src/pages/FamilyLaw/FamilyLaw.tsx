import { Link } from "react-router-dom";
import ConsultationForm from "../../components/Form/ConsultationForm";
import SEOHead from "../../components/SEO/SEOHead";

const prices = [
  { name: "Консультация по семейному праву", price: "от 2 000 ₽" },
  { name: "Развод через суд", price: "от 15 000 ₽" },
  { name: "Раздел совместно нажитого имущества", price: "от 40 000 ₽" },
  { name: "Взыскание алиментов", price: "от 10 000 ₽" },
  { name: "Изменение размера алиментов", price: "от 10 000 ₽" },
  { name: "Определение места жительства ребёнка", price: "от 25 000 ₽" },
  { name: "Лишение / восстановление родительских прав", price: "от 30 000 ₽" },
];

const faqs = [
  {
    q: "Как делится имущество при разводе в Брянске?",
    a: "По закону всё нажитое в браке делится поровну — 50/50. Исключение: имущество, полученное в дар или по наследству, а также добрачное имущество. Суд может отступить от равных долей в интересах ребёнка или при доказанном расходовании общих средств одним из супругов.",
  },
  {
    q: "Можно ли взыскать алименты на ребёнка, если отец не работает официально?",
    a: "Да. Если у плательщика нет официального дохода, суд назначает алименты в твёрдой денежной сумме, привязанной к прожиточному минимуму. Наш адвокат помогает установить реальные доходы должника и добиться максимальной суммы.",
  },
  {
    q: "С кем останется ребёнок после развода?",
    a: "Суд определяет место жительства ребёнка исходя из его интересов. Учитываются: привязанность к каждому из родителей, жилищные условия, доходы, режим работы, характеристики с места работы и по месту жительства. Адвокат помогает грамотно представить доказательства в вашу пользу.",
  },
  {
    q: "Что делать, если бывший супруг скрывает имущество при разделе?",
    a: "Адвокат направляет запросы в Росреестр, ГИБДД, банки для установления активов. При необходимости ходатайствуем об аресте имущества, чтобы исключить его сокрытие до вынесения решения суда.",
  },
  {
    q: "Можно ли лишить родительских прав отца (мать)?",
    a: "Да, при наличии оснований: жестокое обращение с ребёнком, хронический алкоголизм или наркомания, уклонение от воспитания и уплаты алиментов. Процесс ведётся с участием органов опеки. Лишение прав не освобождает от обязанности платить алименты.",
  },
];

export default function FamilyLaw() {
  return (
    <>
      <SEOHead
        title="Семейный адвокат в Брянске | Мефёд А.И. — Развод, алименты, раздел имущества"
        description="Семейный адвокат в Брянске — Мефёд А.И. Развод через суд, раздел имущества, алименты, споры о детях. Опыт 25+ лет. Звоните: +7 (910) 335-37-31."
        canonical="/semeynyy-advokat-bryansk"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://xn--32-6kcajl7b5a2b.xn--p1ai/" },
              { "@type": "ListItem", "position": 2, "name": "Услуги и цены", "item": "https://xn--32-6kcajl7b5a2b.xn--p1ai/prices" },
              { "@type": "ListItem", "position": 3, "name": "Семейный адвокат", "item": "https://xn--32-6kcajl7b5a2b.xn--p1ai/semeynyy-advokat-bryansk" },
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
            <span className="text-gold">Семейные дела</span>
          </nav>
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">
            Семейное право
          </p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-5 leading-tight">
            Семейный адвокат в Брянске
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mb-8">
            Семейные конфликты — одни из самых эмоционально тяжёлых. Развод, раздел имущества,
            спор о детях, взыскание алиментов — всё это требует профессиональной юридической
            помощи. Адвокат Мефёд Александр Иванович помогает защитить ваши права и интересы
            детей в суде с минимальными потерями.
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
              По каким семейным делам я работаю в Брянске
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Адвокат Мефёд А.И. ведёт все категории семейных споров, которые рассматриваются
              в судах общей юрисдикции Брянска и Брянской области:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "Расторжение брака через суд (при наличии детей или споров)",
                "Раздел совместно нажитого имущества",
                "Взыскание и увеличение алиментов на детей",
                "Уменьшение алиментов (по заявлению плательщика)",
                "Определение места жительства ребёнка",
                "Порядок общения с ребёнком после развода",
                "Лишение и восстановление родительских прав",
                "Установление и оспаривание отцовства",
                "Признание брака недействительным",
                "Защита от незаконного вывоза ребёнка за рубеж",
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
              Когда нужен семейный адвокат?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: "💔", title: "Развод с имуществом или детьми", desc: "Чем больше на кону — тем важнее профессиональная защита. Мировое соглашение или суд — выбор за вами." },
                { icon: "👶", title: "Спор о ребёнке", desc: "Кто будет воспитывать ребёнка, как часто второй родитель сможет видеться с ним — это решает суд." },
                { icon: "💸", title: "Невыплата алиментов", desc: "Злостное уклонение от алиментов — уголовная статья. Мы добиваемся взыскания через приставов и суд." },
                { icon: "🏘️", title: "Раздел квартиры или бизнеса", desc: "При разделе недвижимости, автомобиля, акций или доли в ООО без адвоката легко получить вдвое меньше." },
                { icon: "👨‍👩‍👦", title: "Лишение родительских прав", desc: "Если второй родитель пьёт, бьёт или полностью устранился от воспитания — есть основания для суда." },
                { icon: "📋", title: "Нужен брачный договор", desc: "Заключение или оспаривание брачного договора — тоже наша работа." },
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
              Как я веду семейные дела
            </h2>
            <p className="text-gray-700 leading-relaxed mb-5">
              Семейные дела требуют не только юридических знаний, но и деликатного подхода.
              Адвокат Мефёд А.И. проводит переговоры, предлагает мировые соглашения, но
              если нужно — жёстко защищает ваши интересы в суде.
            </p>
            <div className="space-y-4">
              {[
                { n: "1", t: "Консультация и анализ документов", d: "Изучаем свидетельство о браке, документы на имущество, сведения о детях, доходах сторон. Оцениваем перспективы." },
                { n: "2", t: "Попытка досудебного урегулирования", d: "Предлагаем мировое соглашение — это быстрее, дешевле и менее травматично. Если вторая сторона отказывает — идём в суд." },
                { n: "3", t: "Сбор доказательств", d: "Характеристики с работы, справки о доходах, заключения органов опеки, показания свидетелей, оценка имущества." },
                { n: "4", t: "Представительство в суде", d: "Участвуем в каждом заседании, аргументируем позицию, отвечаем на доводы второй стороны, привлекаем специалистов." },
                { n: "5", t: "Исполнение решения", d: "Помогаем исполнить решение: передача имущества, регистрация прав, взыскание алиментов через приставов." },
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
              Стоимость услуг семейного адвоката в Брянске
            </h2>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              Итоговая цена зависит от сложности и объёма дела. Фиксируется в договоре до начала работы.
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
                to="/grazhdanskiy-advokat-bryansk"
                className="bg-white border border-gray-200 hover:border-gold rounded-xl px-5 py-4 flex items-center gap-3 transition-all group"
              >
                <span className="text-2xl">📋</span>
                <div>
                  <p className="font-semibold text-navy-950 group-hover:text-gold transition-colors text-sm">Гражданские дела</p>
                  <p className="text-gray-500 text-xs">Взыскание долгов, споры по недвижимости</p>
                </div>
              </Link>
              <Link
                to="/prices"
                className="bg-white border border-gray-200 hover:border-gold rounded-xl px-5 py-4 flex items-center gap-3 transition-all group"
              >
                <span className="text-2xl">💼</span>
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
              <h2 className="section-title">Нужен семейный адвокат в Брянске?</h2>
              <p className="text-gray-600 mt-3 text-sm max-w-lg mx-auto">
                Оставьте заявку или позвоните. Разберём вашу ситуацию,
                объясним права и предложим стратегию защиты.
              </p>
            </div>
            <ConsultationForm
              className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm max-w-2xl mx-auto"
              initialMessage="Семейные дела"
            />
          </section>

        </div>
      </div>
    </>
  );
}
