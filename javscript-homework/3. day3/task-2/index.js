function f(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("parameter type should be an array");
    }
    if (arr.length === 0) {
        throw new Error("parameter can't be an empty array");
    }

    //recursion base case
    if (arr.length === 1) {
        console.log(arr[0]);
        return;
    } else {
        //recursion
        console.log(arr[0]);
        f(arr.splice(1));
    }
}

try {
    let arr = [1, 2, 3];
    f(arr);
} catch (err) {
    throw err;
}
