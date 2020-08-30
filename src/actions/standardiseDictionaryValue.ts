import { DEFINITION_PRECISION } from '../config';

export const standardiseDictionaryValue = (value: number) => {
  const floatMultiplier = 10 ** (DEFINITION_PRECISION - 1);
  return value * floatMultiplier;
};
