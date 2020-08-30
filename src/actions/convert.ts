import { Classifications, Measure } from '../types';

import { getDefinition } from './getDefinition';
import { convertQuantity } from './convertQuantity';

type ConversionBlueprint = {
  fromUnit: Measure;
  toClassification: {
    classification: Classifications;
    name?: string;
  };
};

export const convert = ({ fromUnit, toClassification }: ConversionBlueprint): Measure => {
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
