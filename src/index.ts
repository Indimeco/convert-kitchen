import { unit } from './types';
import { definitions, definitionType } from './definitions';

const getDefinition = (u: unit): definitionType => {
  return definitions[u.region][u.name];
};

type Tconvert = ({ from, to }: { from: unit; to: unit }) => unit;
export const convert: Tconvert = ({ from, to }) => {
  const fromDef = getDefinition(from);
  const toDef = getDefinition(to);

  const conversion = (fromDef.value * from.quantity) / toDef.value;
  return { ...to, quantity: conversion };
};
