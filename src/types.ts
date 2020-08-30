export type Measure = {
  quantity: number;
  name: string;
  classification: Classifications;
};

export enum Classifications {
  metric = 'metric',
  us = 'us',
  imperial = 'imperial',
}

export enum Measurements {
  VOLUME = 'volume',
  WEIGHT = 'weight',
  TEMPERATURE = 'temperature',
}

export type Definition = {
  name: string[];
  value: number;
  valueOffsetFromZero?: number;
  type: Measurements;
};

export type Definitions = {
  [classification in Classifications]: Definition[];
};
