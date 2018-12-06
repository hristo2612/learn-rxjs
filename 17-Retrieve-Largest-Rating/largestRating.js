Array.prototype.reduce = require('../Implementations/reduce');

function largestRating() {
    var ratings = [2, 3, 420, 666, 5];

    // You should return an array containing only the largest rating. Remember that reduce always
    // returns an array with one item.
    return ratings.
        reduce(function(previousValue, currentValue) {
            return previousValue < currentValue ? currentValue : previousValue;
        });
}

console.log('The largest rating in array is: ', largestRating());
