import { unit, Eclassification, definitionType } from './types';
import { definitions } from './defintions';

const getDefinition = ({ classification, name }: { classification: Eclassification; name: string }): definitionType => {
  const def = definitions[classification].find((definition: definitionType) => definition.name.includes(name));
  if (!def) throw new Error(`Could not find definition for unit ${name}`);
  return def;
};

const convertValue = ({
  fromValue,
  fromQuantity,
  toValue,
}: {
  fromValue: number;
  fromQuantity: number;
  toValue: number;
}): number => (fromValue * fromQuantity) / toValue;

export const convert = ({
  fromUnit,
  toClassification,
}: {
  fromUnit: unit;
  toClassification: {
    classification: Eclassification;
    name?: string;
  };
}): unit => {
  const targetName = toClassification.name ?? fromUnit.name;
  const fromDef = getDefinition({ name: fromUnit.name, classification: fromUnit.classification });
  const toDef = getDefinition({ name: targetName, classification: toClassification.classification });

  const conversion = convertValue({ fromValue: fromDef.value, fromQuantity: fromUnit.quantity, toValue: toDef.value });

  return {
    name: targetName,
    classification: toClassification.classification,
    quantity: conversion,
  };
};
