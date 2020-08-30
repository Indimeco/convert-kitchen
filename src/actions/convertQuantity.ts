import { standardiseDictionaryValue } from './standardiseDictionaryValue';

type ConversionMaterials = {
  fromValue: number;
  fromValueOffset?: number;
  fromQuantity: number;
  toValue: number;
};
export const convertQuantity = ({
  fromValue,
  fromQuantity,
  fromValueOffset = 0,
  toValue,
}: ConversionMaterials): number => {
  const standardisedFrom = standardiseDictionaryValue(fromValue);
  const standardisedTo = standardiseDictionaryValue(toValue);
  const standardisedOffset = fromValueOffset ? standardiseDictionaryValue(fromValueOffset) : 0;

  return (standardisedFrom * fromQuantity + standardisedOffset) / standardisedTo;
};
