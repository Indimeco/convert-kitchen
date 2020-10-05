import { MeasurementSystem, Measurement } from '../types';

import { getDefinition } from './getDefinition';
import { convertQuantity } from './convertQuantity';

type ConversionBlueprint = {
  fromMeasurement: Measurement;
  to: {
    measurementSystem: MeasurementSystem;
    name?: string;
  };
};

export const convert = ({ fromMeasurement, to }: ConversionBlueprint): Measurement => {
  const targetName = to.name ?? fromMeasurement.name;
  const fromDef = getDefinition({
    name: fromMeasurement.name,
    measurementSystem: fromMeasurement.measurementSystem,
    type: fromMeasurement.type,
  });
  const toDef = getDefinition({
    name: targetName,
    measurementSystem: to.measurementSystem,
    type: fromMeasurement.type,
  });

  const conversion = convertQuantity({
    fromValue: fromDef.value,
    fromQuantity: fromMeasurement.quantity,
    fromValueOffset: fromDef.valueOffsetFromZero,
    toValue: toDef.value,
  });

  return {
    name: targetName,
    measurementSystem: to.measurementSystem,
    type: fromMeasurement.type,
    quantity: conversion,
  };
};
