function getDivisors(number) {
    //this is better than typeof number !== "number"
    //because it also checks for floats
    if (!Number.isInteger(number)) {
        throw new Error("parameter type is not a Number");
    }
    if (number === 0) {
        throw new Error("parameter can't be 0");
    }
    if (number < 0) {
        throw new Error("parameter can't be negative");
    }
    let arr = [];
    for (let i = 1; i <= number; ++i) {
        if (number % i === 0) arr.push(i);
    }
    return arr;
}

try {
    let number = 12;
    console.log(getDivisors(number));
} catch (err) {
    throw err;
}
