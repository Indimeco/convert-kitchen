import { Measure, Classifications } from '../types';
import { convert } from '../index';

describe('Convert', () => {
  describe('volumes', () => {
    const usCupsUnit: Measure = {
      classification: Classifications.us,
      name: 'cup',
      quantity: 2,
    };

    it('converts from us cups to metric cups', () => {
      const result = convert({ fromUnit: usCupsUnit, toClassification: { classification: Classifications.metric } });
      expect(result).toStrictEqual({
        name: 'cup',
        classification: 'metric',
        quantity: 1.893,
      });
    });

    it('converts from us cups to metric mililiters', () => {
      const result = convert({
        fromUnit: usCupsUnit,
        toClassification: { classification: Classifications.metric, name: 'mililitre' },
      });
      expect(result).toStrictEqual({
        name: 'mililitre',
        classification: 'metric',
        quantity: 473.176,
      });
    });

    it('converts from us cups to metric mililiters by alias', () => {
      const result = convert({
        fromUnit: usCupsUnit,
        toClassification: { classification: Classifications.metric, name: 'ml' },
      });
      expect(result).toStrictEqual({
        name: 'ml',
        classification: 'metric',
        quantity: 473.176,
      });
    });
  });
  describe('temperatures', () => {
    const fahrenheitUnit: Measure = {
      classification: Classifications.us,
      name: 'fahrenheit',
      quantity: 212,
    };
    const celsiusUnit: Measure = {
      classification: Classifications.metric,
      name: 'celsius',
      quantity: 100,
    };

    it('converts from f to c', () => {
      const result = convert({
        fromUnit: fahrenheitUnit,
        toClassification: {
          classification: Classifications.metric,
          name: 'celsius',
        },
      });
      expect(result.quantity).toStrictEqual(100);
    });
    it('converts from c to f', () => {
      const result = convert({
        fromUnit: celsiusUnit,
        toClassification: {
          classification: Classifications.imperial,
          name: 'fahrenheit',
        },
      });
      expect(result.quantity).toStrictEqual(212);
    });
  });
});
