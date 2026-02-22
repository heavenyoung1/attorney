import Hero from "../../components/Hero/Hero";
import Reviews from "../../components/Reviews/Reviews";
import Partners from "../../components/Partners/Partners";
import MapBlock from "../../components/Map/MapBlock";
import ConsultationForm from "../../components/Form/ConsultationForm";
import attorneyPhoto from "../../attorney.jpg";

export default function Home() {
  return (
    <>
      {/* Hero / About */}
      <Hero />

      {/* Consultation form */}
      <section id="consultation" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center max-w-5xl mx-auto">
            {/* Photo */}
            <div className="flex-shrink-0 w-full md:w-72 lg:w-80">
              <img
                src={attorneyPhoto}
                alt="Мефёд Александр Иванович — адвокат"
                className="w-full rounded-2xl shadow-lg object-cover object-top"
              />
            </div>
            {/* Form */}
            <div className="flex-1 w-full">
              <div className="mb-8">
                <p className="section-label mb-2">Бесплатная консультация</p>
                <h2 className="section-title">Задайте вопрос адвокату</h2>
                <p className="text-gray-600 mt-3 text-sm">
                  Оставьте заявку — мы свяжемся с вами в течение 30 минут
                  в рабочее время
                </p>
              </div>
              <ConsultationForm className="bg-gray-50 border border-gray-200 p-8 rounded-2xl shadow-sm" />
            </div>
          </div>
        </div>
      </section>

      <Reviews />
      <Partners />
      <MapBlock />
    </>
  );
}
