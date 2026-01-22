
export enum Category {
  PRONUNCIATION = 'Phát âm',
  STRESS = 'Trọng âm',
  GRAMMAR = 'Ngữ pháp'
}

export interface Option {
  id: string;
  text: string;
}

export interface Question {
  id: number;
  category: Category;
  subCategory?: string;
  text: string;
  options: Option[];
  correctAnswer: string;
}

export interface UserAnswer {
  questionId: number;
  selectedOptionId: string;
  isCorrect: boolean;
}

export interface TabType {
  id: 'study' | 'quiz';
  label: string;
}
