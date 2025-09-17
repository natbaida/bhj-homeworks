const book = document.getElementById('book');
const fontSizeControls = document.querySelectorAll('.font-size');

fontSizeControls.forEach(control => {
  control.addEventListener('click', (event) => {
    event.preventDefault();

    fontSizeControls.forEach(c => c.classList.remove('font-size_active'));

    control.classList.add('font-size_active');

    book.classList.remove('book_fs-small', 'book_fs-big');

    if (control.dataset.size === 'small') {
      book.classList.add('book_fs-small');
    } else if (control.dataset.size === 'big') {
      book.classList.add('book_fs-big');
    }
  });
});
