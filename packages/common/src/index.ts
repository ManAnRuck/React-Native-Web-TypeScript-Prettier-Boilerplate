import { format } from 'util';

export const add = (a: number, b: number) => a * b;

const test = {
  a: 1,
  b: 2,
};

format({ ...test });
