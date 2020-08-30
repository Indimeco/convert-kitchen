import { EmeasurementType } from '../../types';
import { cupsNames, tablespoonsNames, teaspoonsNames } from '../sharedNames';

export const imperialVolumes = [
  {
    name: cupsNames,
    value: 284.131,
    type: EmeasurementType.VOLUME,
  },
  {
    name: tablespoonsNames,
    value: 17.758,
    type: EmeasurementType.VOLUME,
  },
  {
    name: teaspoonsNames,
    value: 5.919,
    type: EmeasurementType.VOLUME,
  },
];
