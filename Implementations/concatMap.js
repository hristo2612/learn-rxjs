Array.prototype.concatAll = require('./concatAll');

module.exports = function concatMap(projectionFunctionThatReturnsArray) {
    return this.
        map(function (item) {
            return projectionFunctionThatReturnsArray(item);
        }).
        // apply the concatAll function to flatten the two-dimensional array
        concatAll();
};
