describe('product(x, y) ', () => {
  it('should multiply two numbers correctly', () => {
    expect(product(10, 5)).toBe(50);
  });
});

describe('isEven(num) ', () => {
  it('should return true if argument is an even number', () => {
    expect(isEven(18)).toEqual(true);
  });

  it('should return false if the argument is an odd number.', () => {
    expect(isEven(11)).toBe(false);
  });
});

describe('maxOfTwoNumbers(a, b)', () => {
  it('should return a higher number from 2 provided numbers', () => {
    expect(maxOfTwoNumbers(10, 99)).toBe(99);
  });

  it('should return a number closer to 0 when both argument numbers are lower than 0', () => {
    expect(maxOfTwoNumbers(-4, -27)).toBe(-4);
  });
});

describe('maxOfThreeNumbers(a, b, c)', () => {
  it('should return the first argument when the first argument is the highest number', () => {
    expect(maxOfThreeNumbers(99, 50, 3)).toBe(99);
  });

  it('should return the second argument when the second argument is the highest number', () => {
    expect(maxOfThreeNumbers(10, 99, 3)).toBe(99);
  });

  it('should return the third argument when the third argument is the highest number', () => {
    expect(maxOfThreeNumbers(4, 5, 99)).toBe(99);
  });

  it('should return the value closest to 0 when all arguments are numbers that are less than 0.', () => {
    expect(maxOfThreeNumbers(4, 5, 99)).toBe(99);
  });
});

describe('sumArray(numbers)', () => {
  it('should return the sum of all numbers in the array.', () => {
    expect(sumArray([1, 2, 3, 4])).toBe(10);
  });

  it('should return 0 when first argument is an empty array.', () => {
    expect(sumArray([])).toBe(0);
  });
});

describe('maxOfArray(numbers)', () => {
  it('should return the highest number from the given array of numbers.', () => {
    expect(maxOfArray([1, 200, 100, 44])).toBe(200);
  });
});

describe('longestString(stringsArr)', () => {
  it('should return the longest string from the given array of strings.', () => {
    expect(longestString(['abc', 'bca', 'ab', 'b'])).toBe('abc');
  });
});

describe('doesWordExist(wordsArr, word)', () => {
  it('should return true if the given array contains the expected string', () => {
    expect(doesWordExist(['foo', 'bar', 'baz'], 'foo')).toBe(true);
  });

  it("should return false if the given array doesn't contain the expected string", () => {
    expect(doesWordExist(['foo', 'bar', 'baz'], 'fizz')).toBe(false);
  });
});

describe('findUnique(wordsArr)', () => {
  it('should return the unique string that occurs first in the array', () => {
    const assertion = findUnique([
      'foo',
      'bar',
      'foo',
      'baz',
      'bar',
      'fizz',
      'foo',
    ]);

    expect(assertion).toBe('baz');
  });

  it('should return false if the first argument is an empty array', () => {
    const assertion = findUnique([]);
    expect(assertion).toBe(false);
  });
});

describe('getFullName( { firstName: String, lastName: String } )', () => {
  it('should return the string representing the concatenation of the firstName and lastName', () => {
    expect(getFullName({ firstName: 'Tony', lastName: 'Stark' })).toBe(
      'Tony Stark',
    );
  });
});

describe('maxTwoDimArray(matrix)', () => {
  var matrix = [[9, 1, 1331, 42], [3133, 13, 1], [931, 3131, 0]];

  it('should return the highest number from a two dimensional array', () => {
    expect(maxTwoDimArray(matrix)).toBe(3133);
  });
});
