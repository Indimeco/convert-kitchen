import { unit, Eregion, definitionType } from './types';
import { definitions } from './definitions';

const getDefinition = ({ region, name }: { region: Eregion; name: string }): definitionType => {
  return definitions[region][name];
};

type Tconvert = ({ fromUnit, toRegion }: { fromUnit: unit; toRegion: Eregion }) => unit;
export const convert: Tconvert = ({ fromUnit, toRegion }) => {
  const fromDef = getDefinition({ name: fromUnit.name, region: fromUnit.region });
  const toDef = getDefinition({ name: fromUnit.name, region: toRegion });

  const conversion = (fromDef.value * fromUnit.quantity) / toDef.value;
  return { name: fromUnit.name, region: toRegion, quantity: conversion };
};
