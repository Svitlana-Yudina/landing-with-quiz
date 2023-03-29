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
