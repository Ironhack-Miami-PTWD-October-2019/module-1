/* eslint no-undef: "off" */
/* eslint jasmine/no-spec-dupes: "off" */

/*
 * orderByYear
 */

describe("Order the movies by year - orderByYear", function() {
  it("Defines orderByYear", function() {
    expect(typeof orderByYear).toBe("function");
  });

  it("Should return an array", function() {
    expect(typeof orderByYear(movies)).toBe("object");
  });

  it("Should return a new array", function() {
    var arr = [];
    expect(orderByYear(arr)).not.toBe(arr);
  });

  it("Should return the element in a single element array", function() {
    expect(orderByYear([{ year: 1982 }])).toEqual([{ year: 1982 }]);
  });

  it("Return the new array in ascending order", function() {
    expect(
      orderByYear([{ year: 2002 }, { year: 1982 }, { year: 1995 }])
    ).toEqual([{ year: 1982 }, { year: 1995 }, { year: 2002 }]);
  });

  it("If two movies have the same year, order them alphabetically by their title", function() {
    expect(
      orderByYear([
        { title: "abc", year: 2002 },
        { title: "bac", year: 1982 },
        { title: "aab", year: 1982 }
      ])
    ).toEqual([
      { title: "aab", year: 1982 },
      { title: "bac", year: 1982 },
      { title: "abc", year: 2002 }
    ]);
  });
});

/*
 * howManyMovies
 */

describe("Get how many movies - howManyMovies", function() {
  it("Defines howManyMovies", function() {
    expect(typeof howManyMovies).toBe("function");
  });

  it("Should return a number", function() {
    expect(typeof howManyMovies(movies)).toBe("number");
  });

  it("Should return 0 if the array is empty", function() {
    expect(howManyMovies([])).toBe(0);
  });

  it("Return 0 if he did not direct none of the movies in the array", function() {
    expect(
      howManyMovies([
        {
          director: "James McTeigue",
          genre: ["Action", "Drama", "Thriller"]
        }
      ])
    ).toBe(0);
  });

  it("Only drama movies! Should return 1", function() {
    expect(
      howManyMovies([
        {
          director: "Steven Spielberg",
          genre: ["Action", "Drama", "Thriller"]
        },
        {
          director: "Steven Spielberg",
          genre: ["Action"]
        }
      ])
    ).toBe(1);
  });

  it("Only Steven Spielberg movies! Should return 2", function() {
    expect(
      howManyMovies([
        {
          director: "Steven Spielberg",
          genre: ["Action", "Drama", "Thriller"]
        },
        {
          director: "James McTeigue",
          genre: ["Action", "Drama"]
        },
        {
          director: "Karl Moses",
          genre: ["Thriller", "Drama"]
        },
        {
          director: "Steven Spielberg",
          genre: ["Drama", "Thriller"]
        }
      ])
    ).toBe(2);
  });

  it("Should return 4", function() {
    expect(howManyMovies(movies)).toBe(4);
  });
});

/*
 * orderAlphabetically
 */

describe("Order alphabetically - orderAlphabetically", function() {
  it("Defines orderAlphabetically", function() {
    expect(typeof orderAlphabetically).toBe("function");
  });

  it("You should return an array", function() {
    expect(typeof orderAlphabetically([])).toBe("object");
  });

  it("You should not mutate the original array", function() {
    var arr = [{ title: "xyz" }, { title: "abc" }];
    orderAlphabetically(arr);
    expect(arr[0].title).toEqual("xyz");
  });

  it("Only return the title of the movies! Each element should be a string", function() {
    expect(typeof orderAlphabetically([{ title: "aab" }])[0]).toBe("string");
  });

  it("If there are less than 20 elements, return all of them.", function() {
    var moviesArr = [{ title: "aab" }, { title: "bab" }, { title: "acb" }];

    expect(orderAlphabetically(moviesArr).length).toEqual(3);
  });

  it("If there are more than 20 elements, return only 20 of them.", function() {
    var moviesArr = [
      { title: "aab" },
      { title: "bab" },
      { title: "acb" },
      { title: "aab" },
      { title: "bab" },
      { title: "acb" },
      { title: "aab" },
      { title: "bab" },
      { title: "acb" },
      { title: "aab" },
      { title: "bab" },
      { title: "acb" },
      { title: "aab" },
      { title: "bab" },
      { title: "acb" },
      { title: "aab" },
      { title: "bab" },
      { title: "acb" },
      { title: "aab" },
      { title: "bab" },
      { title: "acb" },
      { title: "aab" },
      { title: "bab" },
      { title: "acb" },
      { title: "aab" },
      { title: "bab" },
      { title: "acb" },
      { title: "aab" },
      { title: "bab" },
      { title: "acb" },
      { title: "aab" },
      { title: "bab" },
      { title: "acb" },
      { title: "aab" },
      { title: "bab" },
      { title: "acb" }
    ];

    expect(orderAlphabetically(moviesArr).length).toEqual(20);
  });

  it("You should order them alphabetically.", function() {
    var moviesArr = [
      { title: "aab" },
      { title: "aaa" },
      { title: "abc" },
      { title: "acb" },
      { title: "abb" }
    ];

    expect(orderAlphabetically(moviesArr)).toEqual([
      "aaa",
      "aab",
      "abb",
      "abc",
      "acb"
    ]);
  });

  it("You should return the top20 after ordering them alphabetically.", function() {
    var moviesArr = [
      { title: "aab" },
      { title: "bab" },
      { title: "acb" },
      { title: "aaa" },
      { title: "bbb" },
      { title: "anc" },
      { title: "kns" },
      { title: "zds" },
      { title: "pow" },
      { title: "gda" },
      { title: "res" },
      { title: "ter" },
      { title: "bca" },
      { title: "ccc" },
      { title: "bbt" },
      { title: "qas" },
      { title: "kmn" },
      { title: "frt" },
      { title: "afb" },
      { title: "agb" },
      { title: "apo" },
      { title: "poa" },
      { title: "cdf" },
      { title: "sea" },
      { title: "lom" },
      { title: "acs" },
      { title: "qas" },
      { title: "mns" },
      { title: "bvc" },
      { title: "gha" },
      { title: "lkj" },
      { title: "era" },
      { title: "ert" },
      { title: "tex" },
      { title: "zas" },
      { title: "pol" }
    ];

    expect(orderAlphabetically(moviesArr)).toEqual([
      "aaa",
      "aab",
      "acb",
      "acs",
      "afb",
      "agb",
      "anc",
      "apo",
      "bab",
      "bbb",
      "bbt",
      "bca",
      "bvc",
      "ccc",
      "cdf",
      "era",
      "ert",
      "frt",
      "gda",
      "gha"
    ]);
  });
});

/*
 * ratesAverage
 */
describe("Get the average rate - ratesAverage", function() {
  it("Defines ratesAverage", function() {
    expect(typeof ratesAverage).toBe("function");
  });

  it("You should return a number!", function() {
    expect(typeof ratesAverage(movies)).toBe("number");
  });

  it("You should return the average rate of 2 movies with rate 8 each!", function() {
    expect(ratesAverage([{ rate: 8 }, { rate: 8 }])).toBe(8);
  });

  it("It should be rounded to 2 decimals digits", function() {
    expect(ratesAverage([{ rate: 8 }, { rate: 9 }, { rate: 9 }])).toBe(8.67);
  });

  it("It should return 0 if there is no movie", function() {
    expect(ratesAverage([])).toBe(0);
  });

  it("Return average even if one of the movies does not have rate!", function() {
    expect(ratesAverage([{ rate: 6 }, { rate: "" }, {}])).toBe(2);
  });
});

/*
 * dramaMoviesRate
 */

describe("Average rate of Drama Movies - dramaMoviesRate", function() {
  it("Defines dramaMoviesRate", function() {
    expect(typeof dramaMoviesRate).toBe("function");
  });

  it("You should return a number!", function() {
    expect(typeof dramaMoviesRate(movies)).toBe("number");
  });

  it("Return the rate of a single element array!", function() {
    expect(dramaMoviesRate([{ genre: ["Drama"], rate: 8 }])).toBe(8);
  });

  it("It should return the average of the array!", function() {
    expect(
      dramaMoviesRate([
        { genre: ["Drama"], rate: 8 },
        { genre: ["Drama"], rate: 9 },
        { genre: ["Drama"], rate: 7 }
      ])
    ).toBe(8);
  });

  it("It should return the average of the array, float!", function() {
    expect(
      dramaMoviesRate([
        { genre: ["Drama"], rate: 9 },
        { genre: ["Drama"], rate: 9 },
        { genre: ["Drama"], rate: 7 }
      ])
    ).toBe(8.33);
  });

  it("Only Drama Movies! You should return the average of Drama movies only!", function() {
    expect(
      dramaMoviesRate([
        { genre: ["Drama"], rate: 8 },
        { genre: ["Romance"], rate: 9 },
        { genre: ["Drama"], rate: 7 }
      ])
    ).toBe(7.5);
  });

  it("Should return 0 if there is no Drama movie!", function() {
    expect(
      dramaMoviesRate([
        { genre: ["Action"], rate: 8 },
        { genre: ["Romance"], rate: 9 },
        { genre: ["Sci-Fi"], rate: 7 }
      ])
    ).toBe(0);
  });
});

describe("Turn duration of the movies - turnHoursToMinutes", function() {
  it("Defines turnHoursToMinutes", function() {
    expect(typeof turnHoursToMinutes).toBe("function");
  });

  it("Should return an array", function() {
    expect(typeof turnHoursToMinutes(movies)).toBe("object");
  });

  it("Should return a new array, not update the original one", function() {
    expect(turnHoursToMinutes(movies)).not.toEqual(movies);
  });

  it("The duration of the movie should be a number", function() {
    expect(typeof turnHoursToMinutes(movies)[0].duration).toBe("number");
  });

  it("The duration of the movie should return the correct number to a short movie - 31 minutes", function() {
    var movieTry = [{ duration: "0h 31min" }];

    expect(turnHoursToMinutes(movieTry)[0].duration).toBe(31);
  });

  it("The duration of the movie should return the correct number for really long movie - 341 minutes", function() {
    var movieTry = [{ duration: "5h 41min" }];

    expect(turnHoursToMinutes(movieTry)[0].duration).toBe(341);
  });

  it("It should return the correct number when the duration is only in hours", function() {
    var movieTry = [{ duration: "2h" }];

    expect(turnHoursToMinutes(movieTry)[0].duration).toBe(120);
  });

  it("It should return the correct number when the duration is only in minutes", function() {
    var movieTry = [{ duration: "54min" }];

    expect(turnHoursToMinutes(movieTry)[0].duration).toBe(54);
  });
});

describe("Best year average - bestYearAvg", function() {
  it("Defines bestYearAvg", function() {
    expect(typeof bestYearAvg).toBe("function");
  });

  it("Should return null if the array is empty", function() {
    expect(bestYearAvg([])).toBe(null);
  });

  it("Should return the correct answer to a single element array", function() {
    expect(bestYearAvg([{ year: 2007, rate: 8 }])).toEqual(
      "The best year was 2007 with an average rate of 8"
    );
  });

  it("Should return the correct answer to a multiple elements array", function() {
    expect(bestYearAvg(movies)).toEqual(
      "The best year was 1972 with an average rate of 9.2"
    );
  });

  it("Should return the oldest year when there is a tie", function() {
    var newMoviesArr = [
      { year: 2000, rate: 9 },
      { year: 2000, rate: 8 },
      { year: 1978, rate: 10 },
      { year: 1978, rate: 7 }
    ];

    expect(bestYearAvg(newMoviesArr)).toEqual(
      "The best year was 1978 with an average rate of 8.5"
    );
  });
});
