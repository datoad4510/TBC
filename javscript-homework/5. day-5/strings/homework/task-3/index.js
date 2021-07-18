function searchWord(string, toSearch) {
    if (!(typeof string === "string") && !(string instanceof String)) {
        throw new Error("First parameter must be a string");
    }
    if (!(typeof toSearch === "string") && !(toSearch instanceof String)) {
        throw new Error("Second parameter must be a string");
    }
    let count = (string.match(new RegExp(`${toSearch}`, "g")) || []).length;
    console.log(`'${toSearch}' was found ${count} times`);
}

try {
    searchWord("The quick brown fox", "fox");
} catch (err) {
    throw err;
}
