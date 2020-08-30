import { Measurements, Definition } from '../../types';
import { cupsNames, tablespoonsNames, teaspoonsNames } from '../sharedNames';

export const usVolumes: Definition[] = [
  {
    name: cupsNames,
    value: 236.588,
    type: Measurements.VOLUME,
  },
  {
    name: tablespoonsNames,
    value: 14.8,
    type: Measurements.VOLUME,
  },
  {
    name: teaspoonsNames,
    value: 4.929,
    type: Measurements.VOLUME,
  },
];
