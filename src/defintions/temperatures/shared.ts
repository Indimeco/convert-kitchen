import { definitionType, EmeasurementType } from '../../types';

export const fahrenheit: definitionType = {
  name: ['fahrenheit', 'f', 'degrees'],
  value: 1,
  valueOffsetFromZero: -32,
  type: EmeasurementType.TEMPERATURE,
};
