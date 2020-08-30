import { Definition, Measurements } from '../../types';

export const fahrenheit: Definition = {
  name: ['fahrenheit', 'f', 'degrees'],
  value: 1,
  valueOffsetFromZero: -32,
  type: Measurements.TEMPERATURE,
};
