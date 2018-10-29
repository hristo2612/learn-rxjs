# Use concatMap() to retrieve id, title, and 150x200 box art url for every video

Repeat the exercise we just performed. However this time we'll simplify the code by replacing the map().concatAll() calls with concatMap().

...
It's a very common pattern to see several nested concatMap operations, with the last operation being a map. You can think of this pattern as the <strong>functional version of a nested forEach</strong>.