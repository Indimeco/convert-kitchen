import { Measurement, MeasurementSystem, MeasurementType } from '../types';
import { convert } from '../index';

describe('Convert', () => {
  describe('volumes', () => {
    const usCupsUnit: Measurement = {
      measurementSystem: MeasurementSystem.us,
      name: 'cup',
      quantity: 2,
      type: MeasurementType.VOLUME,
    };

    it('converts from us cups to metric cups', () => {
      const result = convert({
        fromMeasurement: usCupsUnit,
        to: { measurementSystem: MeasurementSystem.metric },
      });
      expect(result).toStrictEqual({
        name: 'cup',
        measurementSystem: MeasurementSystem.metric,
        quantity: 1.893,
        type: MeasurementType.VOLUME,
      });
    });

    it('converts from us cups to metric cups via alias', () => {
      const aliasedCups = {
        ...usCupsUnit,
        name: 'c',
      };
      const result = convert({
        fromMeasurement: aliasedCups,
        to: { measurementSystem: MeasurementSystem.metric },
      });
      expect(result).toStrictEqual({
        name: 'c',
        measurementSystem: MeasurementSystem.metric,
        quantity: 1.893,
        type: MeasurementType.VOLUME,
      });
    });

    it('converts from us cups to metric mililiters', () => {
      const result = convert({
        fromMeasurement: usCupsUnit,
        to: { measurementSystem: MeasurementSystem.metric, name: 'mililitre' },
      });
      expect(result).toStrictEqual({
        name: 'mililitre',
        measurementSystem: MeasurementSystem.metric,
        quantity: 473.176,
        type: MeasurementType.VOLUME,
      });
    });

    it('converts from us cups to metric mililiters by alias', () => {
      const result = convert({
        fromMeasurement: usCupsUnit,
        to: { measurementSystem: MeasurementSystem.metric, name: 'ml' },
      });
      expect(result).toStrictEqual({
        name: 'ml',
        measurementSystem: MeasurementSystem.metric,
        quantity: 473.176,
        type: MeasurementType.VOLUME,
      });
    });
  });
  describe('temperatures', () => {
    const fahrenheitUnit: Measurement = {
      measurementSystem: MeasurementSystem.us,
      name: 'fahrenheit',
      quantity: 212,
      type: MeasurementType.TEMPERATURE,
    };
    const celsiusUnit: Measurement = {
      measurementSystem: MeasurementSystem.metric,
      name: 'celsius',
      quantity: 100,
      type: MeasurementType.TEMPERATURE,
    };

    it('converts from f to c', () => {
      const result = convert({
        fromMeasurement: fahrenheitUnit,
        to: {
          measurementSystem: MeasurementSystem.metric,
          name: 'celsius',
        },
      });
      expect(result.quantity).toStrictEqual(100);
    });

    it('converts from f to c via alias', () => {
      const result = convert({
        fromMeasurement: fahrenheitUnit,
        to: {
          measurementSystem: MeasurementSystem.metric,
          name: 'c',
        },
      });
      expect(result.quantity).toStrictEqual(100);
    });

    it('converts from c to f', () => {
      const result = convert({
        fromMeasurement: celsiusUnit,
        to: {
          measurementSystem: MeasurementSystem.imperial,
          name: 'fahrenheit',
        },
      });
      expect(result.quantity).toStrictEqual(212);
    });
  });
});
