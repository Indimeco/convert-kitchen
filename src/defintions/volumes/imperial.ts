import { MeasurementType, Definition } from '../../types';
import { cupsNames, tablespoonsNames, teaspoonsNames } from '../sharedNames';

export const imperialVolumes: Definition[] = [
  {
    name: cupsNames,
    value: 284.131,
    type: MeasurementType.VOLUME,
  },
  {
    name: tablespoonsNames,
    value: 17.758,
    type: MeasurementType.VOLUME,
  },
  {
    name: teaspoonsNames,
    value: 5.919,
    type: MeasurementType.VOLUME,
  },
];
