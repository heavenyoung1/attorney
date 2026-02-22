import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import type { ConsultationFormData, FormErrors } from "../../types";

const API_BASE = import.meta.env.VITE_API_URL ?? "";

function validate(data: ConsultationFormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.name.trim()) {
    errors.name = "Введите ваше имя";
  }

  if (!data.phone.trim()) {
    errors.phone = "Введите номер телефона";
  } else if (!/^\+?[\d\s\-()]{7,20}$/.test(data.phone.trim())) {
    errors.phone = "Введите корректный номер телефона";
  }

  if (data.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = "Введите корректный email";
  }

  return errors;
}

interface Props {
  className?: string;
}

const initialFormData: ConsultationFormData = {
  name: "",
  phone: "",
  email: "",
  message: "",
};

export default function ConsultationForm({ className = "" }: Props) {
  const [formData, setFormData] = useState<ConsultationFormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      await axios.post(`${API_BASE}/api/send-consultation`, {
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim() || null,
        message: formData.message.trim() || null,
      });
      setIsSuccess(true);
      setFormData(initialFormData);
    } catch {
      setSubmitError(
        "Не удалось отправить заявку. Пожалуйста, позвоните нам или попробуйте позже."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div
        className={`bg-green-50 border border-green-200 rounded-xl p-8 text-center ${className}`}
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-green-800 mb-2">
          Заявка отправлена!
        </h3>
        <p className="text-green-700 mb-4">
          Мы свяжемся с вами в течение 30 минут в рабочее время.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="text-green-700 underline text-sm hover:text-green-900 transition-colors"
        >
          Отправить ещё одну заявку
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`space-y-5 ${className}`}
      noValidate
    >
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Имя <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Иван Иванов"
          autoComplete="name"
          className={`w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition ${
            errors.name
              ? "border-red-400 bg-red-50"
              : "border-gray-300 bg-white"
          }`}
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-600">{errors.name}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Телефон <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+7 (900) 123-45-67"
          autoComplete="tel"
          className={`w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition ${
            errors.phone
              ? "border-red-400 bg-red-50"
              : "border-gray-300 bg-white"
          }`}
        />
        {errors.phone && (
          <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Email{" "}
          <span className="text-gray-400 font-normal">(необязательно)</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="example@mail.ru"
          autoComplete="email"
          className={`w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition ${
            errors.email
              ? "border-red-400 bg-red-50"
              : "border-gray-300 bg-white"
          }`}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-600">{errors.email}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Сообщение{" "}
          <span className="text-gray-400 font-normal">(необязательно)</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Кратко опишите вашу ситуацию..."
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 bg-white rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition resize-none"
        />
      </div>

      {submitError && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg p-3">
          {submitError}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gold text-navy-950 py-3.5 px-6 rounded-lg font-semibold text-sm hover:bg-gold-400 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg
              className="animate-spin w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              />
            </svg>
            Отправка...
          </span>
        ) : (
          "Получить консультацию"
        )}
      </button>

      <p className="text-xs text-gray-500 text-center leading-relaxed">
        Нажимая кнопку, вы соглашаетесь с{" "}
        <span className="underline cursor-pointer">
          политикой обработки персональных данных
        </span>
      </p>
    </form>
  );
}
