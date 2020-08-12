import { unit, Eregion } from '../types';
import { convert } from '../index';

describe('Convert', () => {
  it('converts from us cups to au cups', () => {
    const usCupsUnit: unit = {
      region: Eregion.us,
      name: 'cup',
      quantity: 2,
    };

    const result = convert({ fromUnit: usCupsUnit, toRegion: Eregion.metric });
    expect(result).toBe({
      name: 'cup',
      classification: 'metric',
      quantity: 473.176,
      unit: 'ml',
    });
  });
});
