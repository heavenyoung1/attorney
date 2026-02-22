export default function FreeHelp() {
  return (
    <div className="py-16 md:py-20">
      <div className="container mx-auto px-4 max-w-3xl">

        {/* Page header */}
        <div className="mb-10">
          <p className="section-label mb-2">Адвокат Мефёд А.И.</p>
          <h1 className="section-title mb-5">Бесплатная юридическая помощь</h1>
        </div>

        {/* Intro block */}
        <div className="bg-navy-950/5 border-l-4 border-navy-950 rounded-r-xl px-6 py-5 mb-10">
          <p className="text-dark leading-relaxed text-sm md:text-base">
            Адвокаты участвуют в функционировании государственной системы бесплатной
            юридической помощи, оказывая гражданам бесплатную юридическую помощь в
            случаях, предусмотренных настоящим Федеральным законом, другими
            федеральными законами и законами субъектов Российской Федерации. При
            оказании гражданам бесплатной юридической помощи адвокаты
            руководствуются{" "}
            <span className="font-medium text-navy-950">
              Федеральным законом от 21.11.2011 N&nbsp;324-ФЗ (ред. от 25.12.2023)
              «О бесплатной юридической помощи в Российской Федерации»
            </span>
            {" "}(с изм. и доп., вступ. в силу с 01.01.2024),{" "}
            <span className="font-medium text-navy-950">
              Федеральным законом от 31 мая 2002 года N&nbsp;63-ФЗ «Об адвокатской
              деятельности и адвокатуре в Российской Федерации»
            </span>{" "}
            и{" "}
            <span className="font-medium text-navy-950">
              Законом Брянской области от 5 июля 2012 г. N&nbsp;43-З «О
              государственной системе бесплатной юридической помощи на территории
              Брянской области»
            </span>{" "}
            (с изменениями и дополнениями).
          </p>
        </div>

        {/* Steps */}
        <h2 className="text-xl font-serif font-bold text-navy-950 mb-6">
          Для получения квалифицированной юридической помощи необходимо:
        </h2>

        <div className="space-y-5 mb-10">
          {/* Step 1 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-9 h-9 rounded-full bg-navy-950 text-gold flex items-center justify-center font-bold text-sm">
              1
            </div>
            <div className="pt-1">
              <p className="text-dark leading-relaxed text-sm md:text-base">
                Ознакомиться с перечнем граждан, имеющих право на получение
                бесплатной юридической помощи в рамках государственной системы
                бесплатной юридической помощи, и случаями оказания такой помощи,
                предусмотренным{" "}
                <span className="font-medium text-navy-950">
                  статьёй&nbsp;20 Федерального закона от 21.11.2011 N&nbsp;324-ФЗ
                  «О бесплатной юридической помощи в Российской Федерации»
                </span>
                , и{" "}
                <span className="font-medium text-navy-950">
                  статьёй&nbsp;3 Закона Брянской области от 5 июля 2012 г.
                  N&nbsp;43-З «О государственной системе бесплатной юридической
                  помощи на территории Брянской области»
                </span>
                {" "}(с изменениями и дополнениями).
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-9 h-9 rounded-full bg-navy-950 text-gold flex items-center justify-center font-bold text-sm">
              2
            </div>
            <div className="pt-1">
              <p className="text-dark leading-relaxed text-sm md:text-base">
                В свободной форме изложить суть необходимой юридической помощи,
                приобщить необходимые документы по возможности, оставить контакты
                обратной связи для согласования даты и времени оказания юридической
                помощи.
              </p>
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="bg-gold/10 border border-gold/40 rounded-xl px-6 py-5 mb-12">
          <p className="text-xs font-semibold text-brown uppercase tracking-wider mb-2">
            Примечание
          </p>
          <p className="text-dark leading-relaxed text-sm md:text-base">
            Бесплатная юридическая помощь оказывается только в{" "}
            <span className="font-medium">очном формате</span> при посещении по
            адресу:{" "}
            <span className="font-medium text-navy-950">
              г.&nbsp;Брянск, ул.&nbsp;Крапивницкого, д.&nbsp;29, каб.&nbsp;9.
            </span>{" "}
            Бесплатная юридическая помощь оказывается при предъявлении документа,
            удостоверяющего личность, и документа, обосновывающего право на
            получение бесплатной юридической помощи.
          </p>
        </div>

        {/* Signature */}
        <div className="border-t border-gray-200 pt-8 flex flex-col items-end gap-1 text-sm text-gray-500">
          <p className="font-medium text-dark">С уважением, адвокат Мефёд А.И.</p>
          <p>22.02.2026 года</p>
        </div>

      </div>
    </div>
  );
}
