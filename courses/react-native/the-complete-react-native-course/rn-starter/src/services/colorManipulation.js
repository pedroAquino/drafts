import { pipe, append, __ } from 'ramda';

export const randomColor = pipe(
    Math.random,
    x => x * 256,
    Math.floor
);

export const appendRandomColor = (arr = []) => append(randomColor(), arr);
export const arrToRgbStr = ([r, g, b]) => `rgb(${r}, ${g}, ${b})`;