function reverseSubstring(arr, start, end) {
    // reverse arr[start...end] substring. including start and end
    // look at task-2 for explanation
    for (let i = start; i < start + (end - start + 1) / 2; ++i) {
        [arr[i], arr[end - (i - start)]] = [arr[end - (i - start)], arr[i]];
    }
}

// done in linear time

function rotate(arr, number, string = "right") {
    if (arguments[0] == undefined) {
        throw new Error("First parameter is required");
    }
    if (!Array.isArray(arr)) {
        throw new Error("First parameter has to be an array");
    }
    if (arguments[1] == undefined) {
        throw new Error("Second parameter is required");
    }
    if (!Number.isFinite(number)) {
        throw new Error("Second parameter has to be a number");
    }
    // if string is neither a string literal nor a string object created with new String
    if (!(typeof string === "string") && !(string instanceof String)) {
        throw new Error("Third parameter has to be a string");
    }

    // i used '!=' to possibly check inequality between string objects and literals
    if (string != "left" && string != "right") {
        throw new Error("Third parameter has to be either 'left' or 'right'");
    }

    // optimization: we know that every arr.length rotations we get the initial array
    number = number % arr.length;

    // we can solve the same problem by reversing substrings
    if (string == "left") {
        arr.reverse();
        reverseSubstring(arr, 0, arr.length - number - 1);
        reverseSubstring(arr, arr.length - number, arr.length - 1);
    } else if (string == "right") {
        arr.reverse();
        reverseSubstring(arr, 0, number - 1);
        reverseSubstring(arr, number, arr.length - 1);
    }
}

try {
    let arr = [1, 2, 3, 4, 5];
    rotate(arr, 2, "right");
    console.log(arr);
} catch (err) {
    throw err;
}
