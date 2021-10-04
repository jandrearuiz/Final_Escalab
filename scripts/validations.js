import { textRegex, emailRegex } from './regex.js';

export const validateText = (value) => textRegex.test(value);
export const validateEmail = (value) => emailRegex.test(value);
