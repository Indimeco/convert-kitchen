import { Definitions } from '../types';

import { usVolumes, metricVolumes, imperialVolumes } from './volumes';
import { usTemperatures, metricTemperatures, imperialTemperatures } from './temperatures';

export const definitions: Definitions = {
  us: [...usVolumes, ...usTemperatures],
  metric: [...metricVolumes, ...metricTemperatures],
  imperial: [...imperialVolumes, ...imperialTemperatures],
};
