Array.prototype.concatAll = function() {
	var results = [];
	this.forEach(function(subArray) {
		results.push.apply(results, subArray);
	});

	return results;
};

console.log([ [1,2,3], [4,5,6], [7,8,9] ].concatAll());
		