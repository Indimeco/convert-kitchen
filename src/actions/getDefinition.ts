import { Classifications, Definition } from '../types';
import { definitions } from '../defintions';

type DefintionRequest = {
  classification: Classifications;
  name: string;
};
export const getDefinition = ({ classification, name }: DefintionRequest): Definition => {
  const def = definitions[classification].find((definition: Definition) => definition.name.includes(name));
  if (!def) throw new Error(`Could not find definition for unit ${name}`);
  return def;
};
