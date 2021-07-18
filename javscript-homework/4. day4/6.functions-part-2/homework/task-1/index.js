function mix(...args) {
    for (let i = 0; i < args.length; ++i) {
        if (typeof args[i] !== "function") {
            throw new Error("Parameters must be functions");
        }
    }

    let object = {
        errors: [],
    };

    // first function doesn't return anything
    let returnValue;
    try {
        returnValue = args[0]();
    } catch (err) {
        object.errors.push({
            name: err.name,
            message: err.message,
            stack: err.stack,
            level: 0,
        });
    }
    for (let i = 1; i < args.length; ++i) {
        // every function takes the previous ones return value as a parameter

        try {
            returnValue = args[i](returnValue);
        } catch (err) {
            object.errors.push({
                name: err.name,
                message: err.message,
                stack: err.stack,
                level: i,
            });
        }
    }

    object.value = returnValue;
    return object;
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
            throw new RangeError("Range is wrong");
        },
        (prev) => {
            return prev * 3;
        }
    );

    console.log(x);
} catch (err) {
    throw err;
}
