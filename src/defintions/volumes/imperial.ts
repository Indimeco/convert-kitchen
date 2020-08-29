import { EmeasurementType } from '../../types';
import { cupsNames, tablespoonsNames, teaspoonsNames } from '../sharedNames';

export const imperialVolumes = [
  {
    name: cupsNames,
    value: 284131,
    type: EmeasurementType.VOLUME,
  },
  {
    name: tablespoonsNames,
    value: 17758,
    type: EmeasurementType.VOLUME,
  },
  {
    name: teaspoonsNames,
    value: 5919,
    type: EmeasurementType.VOLUME,
  },
];
