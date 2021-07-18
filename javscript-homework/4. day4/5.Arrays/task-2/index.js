function reverse(arr) {
    if (arguments[0] == undefined) {
        throw new Error("First argument is required");
    }
    if (!Array.isArray(arr)) {
        throw new Error("Argument has to be an array");
    }
    if (arr.length == 0) {
        throw new Error("Array must not be empty");
    }

    // idea: in the reversed array, arr[0] and arr[length - 1] get swapped
    // arr[1] and arr[length - 1 - 1]
    // ...
    // arr[i] and arr[length - 1 - i]
    // but we need to swap only until the middle element.
    // if we check both cases when length is even or odd, length/2 works for both
    for (let i = 0; i < arr.length / 2; ++i) {
        // swap(a,b) <---> [a,b] = [b,a]
        // swap arr[i] and arr[length - i - 1]
        [arr[i], arr[arr.length - i - 1]] = [arr[arr.length - i - 1], arr[i]];
    }
}

try {
    let arr = [1, 2, 3, 4, 5];
    reverse(arr);
    console.log(arr);
} catch (err) {
    throw err;
}
