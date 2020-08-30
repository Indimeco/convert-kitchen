import { Measurements, Definition } from '../../types';

export const metricTemperatures: Definition[] = [
  {
    name: ['celsius', 'c', 'degrees'],
    value: 1.8,
    valueOffsetFromZero: 32,
    type: Measurements.TEMPERATURE,
  },
  {
    name: ['kelvin', 'degrees'],
    value: 1,
    type: Measurements.TEMPERATURE,
  },
];
