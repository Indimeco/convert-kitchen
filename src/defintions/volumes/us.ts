import { EmeasurementType } from '../../types';
import { cupsNames, tablespoonsNames, teaspoonsNames } from '../sharedNames';

export const usVolumes = [
  {
    name: cupsNames,
    value: 236588,
    type: EmeasurementType.VOLUME,
  },
  {
    name: tablespoonsNames,
    value: 14800,
    type: EmeasurementType.VOLUME,
  },
  {
    name: teaspoonsNames,
    value: 4929,
    type: EmeasurementType.VOLUME,
  },
];
