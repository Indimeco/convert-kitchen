export type Measurement = {
  quantity: number;
  name: string;
  type: MeasurementType;
  measurementSystem: MeasurementSystem;
};

export enum MeasurementSystem {
  metric = 'metric',
  us = 'us',
  imperial = 'imperial',
}

export enum MeasurementType {
  VOLUME = 'volume',
  WEIGHT = 'weight',
  TEMPERATURE = 'temperature',
}

export type Definition = {
  name: string[];
  value: number;
  valueOffsetFromZero?: number;
  type: MeasurementType;
};

export type Definitions = {
  [measurementSystem in MeasurementSystem]: Definition[];
};
