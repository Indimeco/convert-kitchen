export type unit = {
  quantity: number;
  name: string;
  classification: Eclassification;
};

export enum Eclassification {
  metric = 'metric',
  us = 'us',
  imperial = 'imperial',
}

export enum EmeasurementType {
  VOLUME = 'volume',
  WEIGHT = 'weight',
}

export type definitionType = {
  value: number;
  type: EmeasurementType;
};

export type defintionsType = {
  [classification in Eclassification]: {
    [name: string]: definitionType;
  };
};
