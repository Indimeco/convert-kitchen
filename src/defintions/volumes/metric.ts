import { MeasurementType, Definition } from '../../types';
import { cupsNames, tablespoonsNames, teaspoonsNames } from '../sharedNames';

export const metricVolumes: Definition[] = [
  {
    name: ['mililitre', 'ml'],
    value: 1,
    type: MeasurementType.VOLUME,
  },
  {
    name: ['litre', 'l'],
    value: 1000,
    type: MeasurementType.VOLUME,
  },
  {
    name: cupsNames,
    value: 250,
    type: MeasurementType.VOLUME,
  },
  {
    name: tablespoonsNames,
    value: 20,
    type: MeasurementType.VOLUME,
  },
  {
    name: teaspoonsNames,
    value: 5,
    type: MeasurementType.VOLUME,
  },
];
