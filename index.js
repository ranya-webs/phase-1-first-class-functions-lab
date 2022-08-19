// This function returns a new array containing the first two drivers from the passed-in array.
const returnFirstTwoDrivers = (arr) => arr.slice(0, 2)


// This function returns a new array containing the last two drivers from the passed-in array.
const returnLastTwoDrivers = (arr) => arr.slice(-2)


/*
 This function should:
 * have the `returnFirstTwoDrivers` function to as its first element.
 * have the `returnLastTwoDrivers` function to as its last element.
 *allow to invoke either function from the array.
 */
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


//This function returns a function that multiplies a fare for a certain riding distance
const createFareMultiplier = function(distance) {
    return fare => distance * fare
}

const fareDoubler = createFareMultiplier(2) 

const fareTripler = createFareMultiplier(3)

/* 
This function takes two arguments, an array of
the names of Scuber's `drivers` and either the `returnFirstTwoDrivers()` or
`returnLastTwoDrivers()` function. Based on these two arguments,
`selectDifferentDrivers()` will return either the first two drivers or the
last two drivers.
*/
const selectDifferentDrivers = (arrayOfDrivers, fn) => {
    if(fn === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(arrayOfDrivers)
    } else if(fn === returnLastTwoDrivers) {
        return returnLastTwoDrivers(arrayOfDrivers)
    }
}

