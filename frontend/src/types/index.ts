export interface Review {
  id: number;
  author: string;
  text: string;
  rating: number;
  date: string;
}

export interface ConsultationFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
}
