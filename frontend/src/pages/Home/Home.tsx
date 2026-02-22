import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Reviews from "../../components/Reviews/Reviews";
import Partners from "../../components/Partners/Partners";
import MapBlock from "../../components/Map/MapBlock";
import ConsultationForm from "../../components/Form/ConsultationForm";
import SEOHead from "../../components/SEO/SEOHead";

export default function Home() {
  return (
    <>
      <SEOHead
        title="Адвокат в Брянске — Мефёд А.И. | Бесплатная консультация"
        description="Адвокат в Брянске — Мефёд Александр Иванович, опыт 25+ лет. Уголовные, гражданские, семейные дела. Звоните: +7 (910) 335-37-31. Консультация от 1 500 ₽."
        canonical="/"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Сколько стоит консультация адвоката в Брянске?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Первичная консультация адвоката Мефёда А.И. в Брянске стоит 1 500 ₽. Цена за ведение дела согласовывается индивидуально в зависимости от сложности."
                }
              },
              {
                "@type": "Question",
                "name": "Как записаться на приём к адвокату в Брянске?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Позвоните по номеру +7 (910) 335-37-31 или оставьте заявку на сайте. Мы свяжемся с вами в течение 30 минут в рабочее время."
                }
              },
              {
                "@type": "Question",
                "name": "Какие уголовные дела ведёт адвокат Мефёд в Брянске?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Адвокат Мефёд Александр Иванович в Брянске ведёт защиту по уголовным делам любой категории: на стадии следствия, в суде первой инстанции, апелляции и кассации. Опыт работы — более 25 лет."
                }
              },
              {
                "@type": "Question",
                "name": "Где находится офис адвоката в Брянске?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Офис адвоката Мефёда А.И. расположен по адресу: г. Брянск, ул. Крапивницкого, 29, офис 2. Режим работы: Пн–Пт с 9:00 до 18:00, Сб с 10:00 до 14:00."
                }
              },
              {
                "@type": "Question",
                "name": "Помогает ли адвокат по гражданским и семейным делам?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Да, адвокат Мефёд А.И. ведёт гражданские, семейные, трудовые, административные и жилищные дела в Брянске. Консультация — от 1 500 ₽."
                }
              }
            ]
          }
        ]}
      />
      {/* Hero / About */}
      <Hero />
      <About />

      {/* Consultation form */}
      <section id="consultation" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="mb-8 text-center">
              <p className="section-label mb-2">Консультация</p>
              <h2 className="section-title">Задайте вопрос адвокату в Брянске</h2>
              <p className="text-gray-600 mt-3 text-sm">
                Оставьте заявку — мы свяжемся с вами в течение 30 минут
                в рабочее время
              </p>
            </div>
            <ConsultationForm className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm" />
          </div>
        </div>
      </section>

      <Reviews />
      <Partners />
      <MapBlock />
    </>
  );
}
