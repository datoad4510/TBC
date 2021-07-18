function compose(...args) {
    for (let i = 0; i < args.length; ++i) {
        if (typeof args[i] !== "function") {
            throw new Error("Parameters must be functions");
        }
    }

    // args is contained in the closure of composed so we don't have to pass it as a parameter
    return function composed(x) {
        for (let i = args.length - 1; i >= 0; --i) {
            x = args[i](x);
        }
        return x;
    };
}

try {
    let x = compose(
        (str) => {
            return str + "c";
        },
        (str) => {
            return str + "b";
        }
    )("a"); // 'abc'

    console.log(x);
} catch (err) {
    throw err;
}
