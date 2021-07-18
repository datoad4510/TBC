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

    // rotate by one number times.
    if (string == "left") {
        for (let i = 0; i < number; ++i) {
            // rotate left by one
            arr.push(arr.shift());
        }
    } else if (string == "right") {
        for (let i = 0; i < number; ++i) {
            // rotate right by one
            arr.unshift(arr.pop());
        }
    }
}

try {
    let arr = [1, 2, 3, 4, 5];
    rotate(arr, 2, "right");
    console.log(arr);
} catch (err) {
    throw err;
}
