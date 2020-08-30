import { standardiseDictionaryValue, standardiseOutputValue } from './standardise';

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

  return standardiseOutputValue((standardisedFrom * fromQuantity + standardisedOffset) / standardisedTo);
};
