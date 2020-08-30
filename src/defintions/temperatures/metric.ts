import { EmeasurementType, definitionType } from '../../types';

export const metricTemperatures: definitionType[] = [
  {
    name: ['celsius', 'c', 'degrees'],
    value: 1.8,
    valueOffsetFromZero: 32,
    type: EmeasurementType.TEMPERATURE,
  },
  {
    name: ['kelvin', 'degrees'],
    value: 1,
    type: EmeasurementType.TEMPERATURE,
  },
];
