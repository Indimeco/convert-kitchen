import { Eclassification, EmeasurementType } from '../types';
import { getDefinition } from '../actions/getDefinition';

const request = { name: 'tablespoon', classification: Eclassification.metric };

describe('Get Definition', () => {
  it('gets a defintion', () => {
    const result = getDefinition(request);
    expect(result.name).toContain('tablespoon');
    expect(result.type).toStrictEqual(EmeasurementType.VOLUME);
    expect(result.value).toStrictEqual(20);
  });

  it('gets a defintion by alias', () => {
    const result = getDefinition(request);
    const aliasResult = getDefinition({ ...request, name: 'tbsp' });
    expect(result).toStrictEqual(aliasResult);
  });

  it('gets a defintion from different classifications', () => {
    const metricResult = getDefinition(request);
    const imperialResult = getDefinition({ ...request, classification: Eclassification.imperial });
    expect(imperialResult.value).not.toStrictEqual(metricResult.value);
    expect(imperialResult.type).toStrictEqual(metricResult.type);
  });
});
