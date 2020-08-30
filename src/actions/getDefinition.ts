import { Eclassification, definitionType } from '../types';
import { definitions } from '../defintions';

type DefintionRequest = {
  classification: Eclassification;
  name: string;
};
export const getDefinition = ({ classification, name }: DefintionRequest): definitionType => {
  const def = definitions[classification].find((definition: definitionType) => definition.name.includes(name));
  if (!def) throw new Error(`Could not find definition for unit ${name}`);
  return def;
};
