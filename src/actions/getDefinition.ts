import { MeasurementSystem, Definition, MeasurementType } from '../types';
import { definitions } from '../defintions';

export type DefintionRequest = {
  measurementSystem: MeasurementSystem;
  name: string;
  type: MeasurementType;
};
export const getDefinition = ({ measurementSystem, name, type }: DefintionRequest): Definition => {
  const def = definitions[measurementSystem]
    .filter((definition: Definition) => definition.type === type)
    .find((definition: Definition) => definition.name.includes(name));
  if (!def) throw new Error(`Could not find definition for unit ${name}`);
  return def;
};
