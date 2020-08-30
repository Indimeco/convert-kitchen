import { Measurements, Definition } from '../../types';
import { cupsNames, tablespoonsNames, teaspoonsNames } from '../sharedNames';

export const imperialVolumes: Definition[] = [
  {
    name: cupsNames,
    value: 284.131,
    type: Measurements.VOLUME,
  },
  {
    name: tablespoonsNames,
    value: 17.758,
    type: Measurements.VOLUME,
  },
  {
    name: teaspoonsNames,
    value: 5.919,
    type: Measurements.VOLUME,
  },
];
