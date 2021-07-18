function mix(...args) {
    for (let i = 0; i < args.length; ++i) {
        if (typeof args[i] !== "function") {
            throw new Error("Parameters must be functions");
        }
    }

    // first function doesn't return anything
    let returnValue = args[0]();
    for (let i = 1; i < args.length; ++i) {
        // every function takes the previous ones return value as a parameter
        returnValue = args[i](returnValue);
    }
    return returnValue;
}

try {
    let x = mix(
        () => {
            return 0;
        },
        (prev) => {
            return prev + 1;
        },
        (prev) => {
            return prev * 2;
        }
    );

    console.log(x);
} catch (err) {
    throw err;
}
