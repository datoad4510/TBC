function f(arr) {
    // let's keep sum as a global variable for the function recurse so it can change it
    // during every step of the recursion. also by encapsulating it we keep it from
    // polluting the global space
    let sum = 0;

    (function recurse(arr) {
        for (let i = 0; i < arr.length; ++i) {
            // isFinite is better, also checks for Infinity
            // https://stackabuse.com/javascript-check-if-variable-is-a-number/
            if (!Number.isFinite(arr[i]) && !Array.isArray(arr[i])) {
                //if arr[i] is neither a number nor an array, throw an Error
                throw new Error(
                    "Array must consist of arrays and numbers only"
                );
            }

            if (Number.isFinite(arr[i])) {
                // if the element is a number, add it to the sum
                sum += arr[i];
                continue;
            } else {
                // if the element is an array, recurse into it
                recurse(arr[i]);
            }
        }
    })(arr);

    return sum;
}

try {
    let arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
    console.log(f(arr));
} catch (err) {
    throw err;
}
