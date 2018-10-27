function useForEach() {
    var names = ["Vancho", "Dragancho", "Petkancho", "Pencho", "Richi"];
    names.forEach((name) => {
        console.log(name);
    });
}

useForEach();

// Notice that forEach lets us specify what we want to happen to each item in the array, but hides how the array is traversed.