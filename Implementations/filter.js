module.exports = function filter(predicateFunction) {
	var results = [];
	this.forEach(function(itemInArray) {
        if (predicateFunction(itemInArray)) {
            results.push(itemInArray);
        }
	});

	return results;
};