import { standardiseDictionaryValue } from './standardiseDictionaryValue';

type ConversionMaterials = {
  fromValue: number;
  fromQuantity: number;
  toValue: number;
};
export const convertQuantity = ({ fromValue, fromQuantity, toValue }: ConversionMaterials): number => {
  const standardisedFrom = standardiseDictionaryValue(fromValue);
  const standardisedTo = standardiseDictionaryValue(toValue);

  return (standardisedFrom * fromQuantity) / standardisedTo;
};
