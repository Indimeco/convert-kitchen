import { defintionsType, EmeasurementType } from './types';

export const definitions: defintionsType = {
  us: {
    cup: {
      value: 236588,
      type: EmeasurementType.VOLUME,
    },
    tablespoon: {
      value: 14800,
      type: EmeasurementType.VOLUME,
    },
    teaspoon: {
      value: 4929,
      type: EmeasurementType.VOLUME,
    },
  },
  metric: {
    cup: {
      value: 250000,
      type: EmeasurementType.VOLUME,
    },
    tablespoon: {
      value: 20000,
      type: EmeasurementType.VOLUME,
    },
    teaspoon: {
      value: 5000,
      type: EmeasurementType.VOLUME,
    },
  },
  imperial: {
    cup: {
      value: 284131,
      type: EmeasurementType.VOLUME,
    },
    tablespoon: {
      value: 17758,
      type: EmeasurementType.VOLUME,
    },
    teaspoon: {
      value: 5919,
      type: EmeasurementType.VOLUME,
    },
  },
};
