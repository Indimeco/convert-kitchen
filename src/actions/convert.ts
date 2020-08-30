import { Eclassification, unit } from '../types';

import { getDefinition } from './getDefinition';
import { convertQuantity } from './convertQuantity';

type ConversionBlueprint = {
  fromUnit: unit;
  toClassification: {
    classification: Eclassification;
    name?: string;
  };
};

export const convert = ({ fromUnit, toClassification }: ConversionBlueprint): unit => {
  const targetName = toClassification.name ?? fromUnit.name;
  const fromDef = getDefinition({ name: fromUnit.name, classification: fromUnit.classification });
  const toDef = getDefinition({ name: targetName, classification: toClassification.classification });

  const conversion = convertQuantity({
    fromValue: fromDef.value,
    fromQuantity: fromUnit.quantity,
    fromValueOffset: fromDef.valueOffsetFromZero,
    toValue: toDef.value,
  });

  return {
    name: targetName,
    classification: toClassification.classification,
    quantity: conversion,
  };
};
