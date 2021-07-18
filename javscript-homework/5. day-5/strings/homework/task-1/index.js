function rmHtmlTags(str) {
    if (!(typeof str === "string") && !(str instanceof String)) {
        throw new Error("Argument must be a string");
    }
    // remove opening tags
    str = str.replace(/<\w*>/g, "");

    // remove closing tags
    str = str.replace(/<\/\w*>/g, "");

    return str;
}

try {
    let str = "<p><strong><em>Content</em></strong></p>";
    console.log(rmHtmlTags(str));
} catch (err) {
    throw err;
}
