# Use forEach() to collect only those videos with rating of 5.0

Like projection, filtering an array is also a very common operation. To filter an array we apply a test to each item in the array and collect the items that pass into a new array.

#### Use forEach() to loop through the videos in the newReleases array and, if a video has a rating of 5.0, add it to the videos array.

Notice that, like map(), every filter() operation shares some operations in common:

1. Traverse the array
2. Add objects that pass the test to a new array

##### Why not abstract away how these operations are carried out?