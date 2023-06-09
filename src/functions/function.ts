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

export function getAge(year: number, month: number, day: number) {
  const today = new Date();
  const currentDay = today.getDate();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  const age = currentYear - year;

  if (currentMonth < month) {
    return age - 1;
  }

  if (currentMonth === month && currentDay < day) {
    return age - 1;
  }

  return age;
}
