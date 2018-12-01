// Example 1: Emitting sequence of numbers
const of = require('rxjs').of;

const arrayOfValues = [1, 2, 3, 4, 5];

//emits any number of provided values in sequence
const source = of(...arrayOfValues);

//output: 1,2,3,4,5 consecutively
const subscribe = source.subscribe(value => console.log(value));

