const books = document.querySelectorAll(".book");
books.forEach((book) => {
  book.addEventListener("click", () => {
    books.forEach((b) => {
      b.classList.remove("active");
    });
    book.classList.add("active");
  });
});
