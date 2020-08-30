import { convertQuantity } from '../actions/convertQuantity';

describe('Convert Quantity', () => {
  it('converts a quantity when the new value is double', () => {
    const result = convertQuantity({
      fromValue: 2,
      fromQuantity: 1,
      toValue: 1,
    });

    expect(result).toStrictEqual(2);
  });

  it('converts a quantity when the new value is half', () => {
    const result = convertQuantity({
      fromValue: 1,
      fromQuantity: 1,
      toValue: 2,
    });

    expect(result).toStrictEqual(0.5);
  });

  it('converts a quantity with a large original quantity', () => {
    const result = convertQuantity({
      fromValue: 3,
      fromQuantity: 700,
      toValue: 1,
    });

    expect(result).toStrictEqual(2100);
  });

  it('converts a quantity when the original value is a fifth', () => {
    const result = convertQuantity({
      fromValue: 7.5,
      fromQuantity: 700,
      toValue: 1.5,
    });

    expect(result).toStrictEqual(3500);
  });
});
