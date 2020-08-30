import { defintionsType } from '../types';

import { usVolumes, metricVolumes, imperialVolumes } from './volumes';
import { usTemperatures, metricTemperatures, imperialTemperatures } from './temperatures';

export const definitions: defintionsType = {
  us: [...usVolumes, ...usTemperatures],
  metric: [...metricVolumes, ...metricTemperatures],
  imperial: [...imperialVolumes, ...imperialTemperatures],
};
