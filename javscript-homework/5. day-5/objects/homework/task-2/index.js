function readingStatus(books) {
    books.forEach((book) => {
        console.log(
            `${book.author} ${book.haveRead ? "read" : "hasn't read"} ${
                book.title
            } ${
                book.haveRead ? "".concat(book.daysAgo).concat(" days ago") : ""
            }`
        );
    });
}

var Books = [
    {
        author: "Bill",
        title: "The Road Ahead",
        haveRead: true,
        dateOfRead: new Date(2020, 10, 10),
    },
    {
        author: "Steve",
        title: "Walter Isaacson",
        haveRead: true,
        dateOfRead: new Date(2020, 10, 5),
    },
    {
        author: "Jhon",
        title: "The Hunger Games",
        haveRead: false,
        dateOfRead: NaN,
    },
];

// add getter methods

Books.forEach((book) => {
    Object.defineProperty(book, "daysAgo", {
        get: function () {
            // days
            return Math.floor(
                (Date.now() - book.dateOfRead) / (1000 * 60 * 60 * 24)
            );
        },
    });
});

readingStatus(Books);
