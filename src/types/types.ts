export type ButtonStyles = 'choice' | 'quiz' | 'create';

export type QuizType = {
  step: number,
  question: string,
  answers: string[],
};
