export type ButtonStyles = 'sex' | 'quiz' | 'create';
export type InputType = 'text' | 'password';

export type QuizType = {
  step: number,
  question: string,
  answers: string[],
};

export type CommentType = {
  id: number,
  femName: string,
  maleName: string,
  photo: string,
  ago: string,
  commentText: string,
}

export type Inputs = {
  name: string,
  password: string,
  email: string,
  day: string,
  month: string,
  year: string,
};

export type Check = {
  pattern: RegExp,
  minLength: number,
};
