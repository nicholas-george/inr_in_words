import inrWords from './index.js'

describe('Handling multi crores', () => {
  test('crore crores', () => {
    expect(inrWords(100000000000000))
      .toEqual({ "no": "₹ 1,00,00,000,00,00,000", "words": "₹ One crore crores" });
  });
  test('crore crores', () => {
    expect(inrWords(9000000000))
      .toEqual({ "no": "₹ 900,00,00,000", "words": "₹ Nine hundred crore" });
  });
  test('line 13 coverage', () => {
    expect(inrWords(1300000000))
      .toEqual({ "no": "₹ 130,00,00,000", "words": "₹ One hundred thirty crore" });
  });
  test('line 13 coverage', () => {
    expect(inrWords(90))
      .toEqual({ "no": "₹ 90", "words": "₹ Ninety" });
  });
});

describe('Handling numbers in hundreds', () => {
  test('all zeroes', () => {
    expect(inrWords(10000687000).no).toBe('₹ 1,000,06,87,000');
  });
  test('with only hundreds', () => {
    expect(inrWords(12000687100).no).toBe('₹ 1,200,06,87,100');
  });
  test('with no hundreds', () => {
    expect(inrWords(10100687010).no).toBe('₹ 1,010,06,87,010');
  });
});

describe('Handling Rupees & Paisas', () => {
  test('Default ₹ and paisa', () => {
    expect(inrWords(1100.09)).toEqual({ "no": "₹ 1,100.09", "words": "₹ One thousand one hundred and nine paisa" });
  });
  test('Rupee with user given and default paisa', () => {
    expect(inrWords(1100.09, 'Rs.')).toEqual({ "no": "Rs. 1,100.09", "words": "Rs. One thousand one hundred and nine paisa" });
  });
  test('Rupee and paisa with user given values', () => {
    expect(inrWords(1100.09, 'Rs.', "ps.")).toEqual({ "no": "Rs. 1,100.09", "words": "Rs. One thousand one hundred and nine ps." });
  });
  test('With no Rs and Paisa', () => {
    expect(inrWords(1189.09, '', '')).toEqual({ "no": "1,189.09", "words": "One thousand one hundred eighty nine and nine" });
  });
});

describe('Handling exceptions', () => {
  test('Infinity is caught', () => {
    expect(inrWords(Infinity)).toEqual({ "error": "Not a number which can be converted." });
  });
  test('Non numeric value caught', () => {
    expect(inrWords('abc')).toEqual({ "error": "Not a number which can be converted." });
  });
  test('handling zero value', () => {
    expect(inrWords(0)).toEqual({ "no": "₹ 0", "words": "₹ Zero" });
  });
});
