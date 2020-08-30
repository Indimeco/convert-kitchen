import { Measurements, Definition } from '../../types';
import { cupsNames, tablespoonsNames, teaspoonsNames } from '../sharedNames';

export const metricVolumes: Definition[] = [
  {
    name: ['mililitre', 'ml'],
    value: 1,
    type: Measurements.VOLUME,
  },
  {
    name: ['litre', 'l'],
    value: 1000,
    type: Measurements.VOLUME,
  },
  {
    name: cupsNames,
    value: 250,
    type: Measurements.VOLUME,
  },
  {
    name: tablespoonsNames,
    value: 20,
    type: Measurements.VOLUME,
  },
  {
    name: teaspoonsNames,
    value: 5,
    type: Measurements.VOLUME,
  },
];
