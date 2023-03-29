/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
export const debounce = (fn: any, ms: number) => {
  let timer: any = null;

  return (...args: any[]) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
      clearTimeout(timer);
    }, ms);
  };
};

export function getSequence(start: number, end: number) {
  const sequence = [];

  for (let i = start; i <= end; i++) {
    sequence.push(String(i));
  }

  return sequence;
}
