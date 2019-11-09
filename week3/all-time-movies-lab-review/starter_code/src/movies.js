/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average


function orderByYear(bunchaMovies){
    let newArray = [...bunchaMovies];
    // spread operator is to make sure not to mutate the original array because .sort does change the original array if you let it
    newArray.sort((a,b)=>{
      if(a.year > b.year){
        return 1;
      } else if (b.year > a.year){
        return -1
      } else {

      if(a.title > b.title){
        return 1;
      } else if (b.title > a.title){
        return -1
      }
        return 0
      }
    })
    return newArray;

  }

  function howManyMovies(someMovies){
    return someMovies.filter( eachMovie => eachMovie.director === 'Steven Spielberg' && eachMovie.genre.includes('Drama')).length;
  }

  function orderAlphabetically(bunchaMovies){
        
    return [...bunchaMovies].sort((a,b)=>{
       if(a.title > b.title){
         return 1;
       } else if (a.title < b.title){
         return -1;
       } else {
         return 0
       }
     }).map(eachMovie => eachMovie.title).slice(0,20);
 }


 function ratesAverage(bunchaMovies){
    //  return !bunchaMovies.length? 0 : Number((bunchaMovies.reduce((a,b) => b.rate? a + b.rate : a, 0)/bunchaMovies.length).toFixed(2));
    // this is the one line version

    if(!bunchaMovies.length){
        return 0;
    }

    let total =  bunchaMovies.reduce((a,b) => {
        if(b.rate){
            return a + b.rate;
        } else {
            return a;
        }
        }, 0)

    return Number((total/bunchaMovies.length).toFixed(2));

  }



  function dramaMoviesRate(someMovies){
    let drMovies = someMovies.filter( eachMovie => eachMovie.genre.includes('Drama'));
    return ratesAverage(drMovies);
  }


  function turnHoursToMinutes(bunchaMovies){
    return bunchaMovies.map(reformat);
  }


  function reformat(oneSingleMovieObject){
    let newThing = {...oneSingleMovieObject};
    let timeString = oneSingleMovieObject.duration;
    let hasHours = timeString.includes('h');
    let hasMinutes = timeString.includes('min');
    let timeArray, hours, minutes, newTime;

    if(hasMinutes && hasHours){
       timeArray = timeString.split('h');
       hours = Number(timeArray[0]);
       minutes = Number(timeArray[1].substr(1,2))
       newTime = hours*60 + minutes;
    } else if(hasMinutes){

      minutes = parseInt(timeString.substr(0,2))
      newTime = minutes;

    } else {
        hours = parseInt(timeString);
        newTime = hours * 60;
    }
    newThing.duration = newTime;
    return newThing;
  }

  function bestYearAvg(bunchaMovies){
      if(!bunchaMovies.length)
      return null;
      
    let masterObject = {};

    bunchaMovies.forEach((eachMovie)=>{
        if(!masterObject[eachMovie.year]){
            masterObject[eachMovie.year] = [eachMovie];
        } else {
            masterObject[eachMovie.year].push(eachMovie)
        }
    });

      let highest = 0;
      let theActualYear;
    for(let theYear in masterObject){
      if(ratesAverage(masterObject[theYear]) > highest){
        highest = ratesAverage(masterObject[theYear]);
        theActualYear = theYear; 
      }
    }
      return `The best year was ${theActualYear} with an average rate of ${highest}`
  }
