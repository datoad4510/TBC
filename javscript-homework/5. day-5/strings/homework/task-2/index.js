function extractCurrencyValue(source) {
    if (!(typeof source === "string") && !(source instanceof String)) {
        throw new Error("First argument has to be a string");
    }

    try {
        source = source.slice(1);
        if (isNaN(source)) {
            throw new Error(
                "Incorrectly written price, must have one symbol before number"
            );
        }
        return parseFloat(source);
    } catch (err) {
        throw err;
    }
}

try {
    let price = "$120";
    console.log(extractCurrencyValue(price));
} catch (err) {
    throw err;
}
