export type ButtonStyles = 'sex' | 'quiz' | 'create';

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
