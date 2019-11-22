describe('product(x, y) ', () => {
  it('should multiply two numbers correctly', () => {
    expect(product(10, 5)).toBe(50);
  });

  it('should return false when one or more of the arguments is not a number', () => {
    const whenFirstArgumentNaN = product(undefined, 10);
    const whenSecondArgumentNaN = product(10, null);

    expect(whenFirstArgumentNaN && whenSecondArgumentNaN).toBe(false);
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

  it('should return false when one or more of the expected arguments is not a number', () => {
    var whenFirstArgumentNaN = maxOfThreeNumbers(null, 1, 5);
    var whenSecondArgumentNaN = maxOfThreeNumbers(1, null, 5);
    var whenThirdArgumentNaN = maxOfThreeNumbers(1, 5, null);

    expect(
      whenFirstArgumentNaN && whenSecondArgumentNaN && whenThirdArgumentNaN,
    ).toBe(false);
  });
});

describe('sumArray(numbers)', () => {
  it('should return the sum of all numbers in the array.', () => {
    expect(sumArray([1, 2, 3, 4])).toBe(10);
  });

  it('should return 0 when first argument is an empty array.', () => {
    expect(sumArray([])).toBe(0);
  });

  it('should return false when first argument is not an array.', () => {
    expect(sumArray('1 2 3')).toBe(false);
  });

  it('should return false when argument array contains a value that is not a number.', () => {
    expect(sumArray([1, 2, undefined, 44])).toBe(false);
  });
});

describe('maxOfArray(numbers)', () => {
  it('should return the highest number from the given array of numbers.', () => {
    expect(maxOfArray([1, 200, 100, 44])).toBe(200);
  });

  it('should return false when first argument is an empty array.', () => {
    expect(maxOfArray([])).toBe(false);
  });

  it('should return false the first argument is not an array.', () => {
    expect(maxOfArray('1 2 3')).toBe(false);
  });
});

describe('longestString(stringsArr)', () => {
  it('should return the longest string from the given array of strings.', () => {
    expect(longestString(['abc', 'bca', 'ab', 'b'])).toBe('abc');
  });

  it('should return false when first argument is not an array.', () => {
    expect(longestString('1 2 3')).toBe(false);
  });

  it('should return false when first argument is an empty array.', () => {
    expect(longestString([])).toBe(false);
  });

  it('should return the longest string from the mixed array containing strings and other data types', () => {
    expect(longestString(['abc', 1, null, undefined, 'ab', 'abcd'])).toBe(
      'abcd',
    );
  });
});

describe('doesWordExist(wordsArr, word)', () => {
  it('should return true if the given array contains the expected string', () => {
    expect(doesWordExist(['foo', 'bar', 'baz'], 'foo')).toBe(true);
  });

  it("should return false if the given array doesn't contain the expected string", () => {
    expect(doesWordExist(['foo', 'bar', 'baz'], 'fizz')).toBe(false);
  });

  it('should return false if first argument is an empty array', () => {
    expect(doesWordExist([], 'foo')).toBe(false);
  });

  it('should return false if the first argument is not an array', () => {
    expect(doesWordExist('foo bar baz', 'foo')).toBe(false);
  });

  it('should return false if the second argument is not a string', () => {
    expect(doesWordExist(['foo', 'bar', 'baz', 'foo'], 100)).toBe(false);
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

  it('should return false if first argument is not an array', () => {
    const assertion = findUnique('foo bar baz');
    expect(assertion).toBe(false);
  });
});

describe('getFullName( { firstName: String, lastName: String } )', () => {
  it('should return the string representing the concatenation of the firstName and lastName', () => {
    expect(getFullName({ firstName: 'Tony', lastName: 'Stark' })).toBe(
      'Tony Stark',
    );
  });

  it('should return false if the provided argument is not an object', () => {
    expect(getFullName(['Tony', 'Stark'])).toBe(false);
  });

  it('should return false if properties firstName or lastName are undefined, on the provided argument object.', () => {
    var firstNameUndefined = getFullName({
      firstName: undefined,
      lastName: 'Stark',
    });
    var lastNameUndefined = getFullName({
      firstName: 'Tony',
      lastName: undefined,
    });

    expect(firstNameUndefined || lastNameUndefined).toBe(false);
  });
});

describe('maxTwoDimArray(matrix)', () => {
  var matrix = [[9, 1, 1331, 42], [3133, 13, 1], [931, 3131, 0]];

  it('should return the highest number from a two dimensional array', () => {
    expect(maxTwoDimArray(matrix)).toBe(3133);
  });

  it('should return false if the argument is not an array', () => {
    expect(maxTwoDimArray('123, 45, 6')).toBe(false);
  });

  it('should return false if the argument is an empty array.', () => {
    expect(maxTwoDimArray([])).toBe(false);
  });
});
