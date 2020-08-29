import { defintionsType } from '../types';

import { usVolumes, metricVolumes, imperialVolumes } from './volumes';

export const definitions: defintionsType = {
  us: [...usVolumes],
  metric: [...metricVolumes],
  imperial: [...imperialVolumes],
};
