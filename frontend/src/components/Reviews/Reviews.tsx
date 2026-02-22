import { useState } from "react";
import type { Review } from "../../types";

const reviews: Review[] = [
  {
    id: 1,
    author: "Алексей М.",
    text: "Иван Иванович блестяще провёл моё дело. Ситуация казалась безнадёжной, но благодаря грамотной защите обвинение было переквалифицировано, а я получил условный срок. Профессионализм высшего класса.",
    rating: 5,
    date: "2024-12-10",
  },
  {
    id: 2,
    author: "Мария С.",
    text: "Обратилась по вопросу раздела имущества при разводе. Адвокат внимательно выслушал, объяснил все варианты и отстоял мои интересы в суде. Очень довольна результатом!",
    rating: 5,
    date: "2024-11-22",
  },
  {
    id: 3,
    author: "Дмитрий К.",
    text: "Помог взыскать задолженность по зарплате с недобросовестного работодателя. Работодатель выплатил всё в полном объёме плюс компенсацию. Рекомендую всем!",
    rating: 5,
    date: "2024-10-05",
  },
  {
    id: 4,
    author: "Татьяна Р.",
    text: "Представлял мои интересы в арбитражном суде по спору с подрядчиком. Выиграли дело полностью. Иван Иванович — настоящий профессионал своего дела.",
    rating: 5,
    date: "2024-09-18",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`text-lg ${star <= rating ? "text-gold" : "text-gray-300"}`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function Reviews() {
  const [startIndex, setStartIndex] = useState(0);

  const visibleCount = 3;
  const visible = Array.from(
    { length: visibleCount },
    (_, i) => reviews[(startIndex + i) % reviews.length]
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="section-label mb-2">Отзывы</p>
          <h2 className="section-title">Что говорят клиенты</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visible.map((review, idx) => (
            <div
              key={`${review.id}-${idx}`}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col"
            >
              <StarRating rating={review.rating} />
              <p className="text-gray-600 text-sm leading-relaxed mt-4 mb-6 flex-1">
                «{review.text}»
              </p>
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-100">
                <div className="w-10 h-10 bg-navy-950 rounded-full flex items-center justify-center text-gold font-bold text-sm flex-shrink-0">
                  {review.author[0]}
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">
                    {review.author}
                  </p>
                  <p className="text-xs text-gray-400">
                    {new Date(review.date).toLocaleDateString("ru-RU", {
                      year: "numeric",
                      month: "long",
                    })}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation dots + arrows */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={() =>
              setStartIndex((i) => (i - 1 + reviews.length) % reviews.length)
            }
            className="w-10 h-10 rounded-full border-2 border-navy-950 text-navy-950 hover:bg-navy-950 hover:text-white transition-colors flex items-center justify-center"
            aria-label="Предыдущий отзыв"
          >
            ←
          </button>
          <div className="flex gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setStartIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === startIndex ? "bg-gold" : "bg-gray-300"
                }`}
                aria-label={`Отзыв ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={() =>
              setStartIndex((i) => (i + 1) % reviews.length)
            }
            className="w-10 h-10 rounded-full border-2 border-navy-950 text-navy-950 hover:bg-navy-950 hover:text-white transition-colors flex items-center justify-center"
            aria-label="Следующий отзыв"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
