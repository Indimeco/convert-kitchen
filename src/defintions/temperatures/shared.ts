import { Definition, MeasurementType } from '../../types';

export const fahrenheit: Definition = {
  name: ['fahrenheit', 'f', 'degrees'],
  value: 1,
  valueOffsetFromZero: -32,
  type: MeasurementType.TEMPERATURE,
};
