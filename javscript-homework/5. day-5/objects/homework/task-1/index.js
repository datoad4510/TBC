function readingStatus(books) {
    books.forEach((book) => {
        console.log(
            `${book.author} ${book.haveRead ? 'has read' : "hasn't read"} ${book.title}`
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

readingStatus(Books);
