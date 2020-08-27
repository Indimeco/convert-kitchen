import { unit, Eclassification } from '../types';
import { convert } from '../index';

describe('Convert', () => {
  const usCupsUnit: unit = {
    classification: Eclassification.us,
    name: 'cup',
    quantity: 2,
  };

  it('converts from us cups to metric cups', () => {
    const result = convert({ fromUnit: usCupsUnit, toClassification: { classification: Eclassification.metric } });
    expect(result).toStrictEqual({
      name: 'cup',
      classification: 'metric',
      quantity: 1.892704,
    });
  });

  it('converts from us cups to metric mililiters', () => {
    const result = convert({
      fromUnit: usCupsUnit,
      toClassification: { classification: Eclassification.metric, name: 'mililitre' },
    });
    expect(result).toStrictEqual({
      name: 'mililitre',
      classification: 'metric',
      quantity: 473.176,
    });
  });
});
