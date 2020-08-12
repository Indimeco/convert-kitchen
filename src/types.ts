export type unit = {
  quantity: number;
  name: string;
  region: Eregion;
};

export enum Eregion {
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
  [region in Eregion]: {
    [name: string]: definitionType;
  };
};
