import { EmeasurementType } from '../../types';
import { cupsNames, tablespoonsNames, teaspoonsNames } from '../sharedNames';

export const metricVolumes = [
  {
    name: ['mililitre', 'ml'],
    value: 1000,
    type: EmeasurementType.VOLUME,
  },
  {
    name: ['litre', 'l'],
    value: 1000000,
    type: EmeasurementType.VOLUME,
  },
  {
    name: cupsNames,
    value: 250000,
    type: EmeasurementType.VOLUME,
  },
  {
    name: tablespoonsNames,
    value: 20000,
    type: EmeasurementType.VOLUME,
  },
  {
    name: teaspoonsNames,
    value: 5000,
    type: EmeasurementType.VOLUME,
  },
];
