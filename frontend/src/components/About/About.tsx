import attorneyPhoto from "../../attorney.jpg";

const stats = [
  { value: "25+", label: "лет практики" },
  { value: "2001", label: "год вступления в адвокатуру" },
  { value: "№ 32/142", label: "реестровый номер" },
];

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-start max-w-5xl mx-auto">
          {/* Photo */}
          <div className="flex-shrink-0 w-full md:w-[422px] lg:w-[462px]">
            <img
              src={attorneyPhoto}
              alt="Мефёд Александр Иванович — адвокат"
              className="w-full rounded-2xl shadow-lg object-cover object-top"
            />
          </div>

          {/* Text content */}
          <div className="flex-1">
            <p className="section-label mb-2">Об адвокате</p>
            <h2 className="section-title mb-8">Мефёд Александр Иванович</h2>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="border border-gold/30 rounded-2xl px-4 py-4 text-center bg-amber-50/40"
                >
                  <p className="text-2xl font-serif font-bold text-navy-950 mb-1">
                    {value}
                  </p>
                  <p className="text-xs text-gray-500">{label}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed text-base">
              <p>
                Александр Иванович окончил{" "}
                <span className="font-medium text-navy-950">
                  Саратовский юридический институт МВД РФ
                </span>{" "}
                и является адвокатом с&nbsp;2001&nbsp;года. Свою карьеру он начал
                в&nbsp;Межрегиональной коллегии адвокатов помощи предпринимателям
                и&nbsp;гражданам города Москвы.
              </p>
              <p>
                <span className="font-medium text-navy-950">
                  Защита по уголовным делам
                </span>{" "}
                стала основной специализацией этого опытного юриста. Вместе с тем,
                оказывая юридическую помощь предпринимателям из различных городов
                России, Александр Иванович успешно решает разнообразные задачи
                в&nbsp;правовой сфере Российской Федерации.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
