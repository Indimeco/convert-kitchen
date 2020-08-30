import { EmeasurementType } from '../../types';
import { cupsNames, tablespoonsNames, teaspoonsNames } from '../sharedNames';

export const usVolumes = [
  {
    name: cupsNames,
    value: 236.588,
    type: EmeasurementType.VOLUME,
  },
  {
    name: tablespoonsNames,
    value: 14.8,
    type: EmeasurementType.VOLUME,
  },
  {
    name: teaspoonsNames,
    value: 4.929,
    type: EmeasurementType.VOLUME,
  },
];
