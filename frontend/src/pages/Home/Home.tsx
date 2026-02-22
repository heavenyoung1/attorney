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
        title="Адвокат Мефёд А.И. — юридическая помощь в Брянске"
        description="Профессиональный адвокат в Брянске с опытом 25+ лет. Уголовные, гражданские, семейные дела. Звоните: +7 (910) 335-37-31. Консультация от 1 500 ₽."
        canonical="/"
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
              <h2 className="section-title">Задайте вопрос адвокату</h2>
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
