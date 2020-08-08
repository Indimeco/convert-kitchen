enum Etype {
  VOLUME = 'volume',
  WEIGHT = 'weight',
}

export type definitionType = {
  value: number;
  type: Etype;
};

type defintionsType = {
  [x: string]: {
    [x: string]: definitionType;
  };
};
export const definitions: defintionsType = {
  us: {
    cup: {
      value: 236588,
      type: Etype.VOLUME,
    },
  },
  au: {
    cup: {
      value: 250000,
      type: Etype.VOLUME,
    },
  },
};
