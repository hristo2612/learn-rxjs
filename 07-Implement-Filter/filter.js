Array.prototype.filter = function(predicateFunction) {
	var results = [];
	this.forEach(function(itemInArray) {
        if (predicateFunction(itemInArray)) {
            results.push(itemInArray);
        }
	});

	return results;
};

console.log([1,2,3].filter((item)=>{
    return item > 2;
}));