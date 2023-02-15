/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
/* eslint-disable no-alert */
/* eslint-disable no-console */
const addBtn = document.querySelector('#add');
const books = document.querySelector('#books');
const form = document.querySelector('#form');
const cross = document.querySelector('#cross');
const readOrNot = document.querySelector('#flexSwitchCheckDefault');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const submit = document.querySelector('#submit-form');

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function toggleRead(text, book) {
  const rbtn = document.querySelector('#toggleRead');

  if (book.read === false) {
    rbtn.classList.remove('bg-blue-600');
    rbtn.classList.add('bg-green-600');
    text.textContent = 'Read';
    book.read = true;
    console.log(book);
  } else {
    rbtn.classList.remove('bg-green-600');
    rbtn.classList.add('bg-blue-600');
    text.textContent = 'Not Read';
    book.read = false;
    console.log(book);
  }
  console.log(myLibrary);
}

function removeBook(div, book) {
  div.remove();
  const index = myLibrary.indexOf(book);
  myLibrary.splice(index, 1);
}

function showBooks() {
  books.innerHTML = '';
  myLibrary.forEach((book) => {
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const pages = document.createElement('p');
    const buttonsContainer = document.createElement('div');
    const readBtnContainer = document.createElement('div');
    const readBtn = document.createElement('p');
    const removeBtnContainer = document.createElement('div');
    const removeBtn = document.createElement('p');
    let bg = '';
    let text = '';

    if (book.read) {
      bg = 'bg-green-600';
      text = 'Read';
    } else {
      bg = 'bg-blue-600';
      text = 'Not Read';
    }

    h2.textContent = book.title;
    p.textContent = `By ${book.author}`;
    pages.textContent = `${book.pages} pages`;
    readBtn.textContent = text;
    removeBtn.textContent = 'Remove';

    readBtnContainer.setAttribute('id', 'toggleRead');
    readBtnContainer.addEventListener('click', () => {
      toggleRead(readBtn, book);
    });

    removeBtnContainer.addEventListener('click', () => {
      removeBook(div, book);
    });

    div.classList.add('flex', 'justify-center', 'items-center', 'flex-col', 'gap-2', 'w-72', 'bg-transparent', 'border-solid', 'border-indigo-900', 'border-2', 'rounded-md', 'h-56');
    h2.classList.add('text-2xl', 'font-bold', 'text-black', 'text-center', 'p-3');
    p.classList.add('text-zinc-600', 'italic');
    buttonsContainer.classList.add('flex', 'gap-3', 'pt-3', 'pb-4');
    readBtnContainer.classList.add('flex', 'justify-center', 'items-center', 'text-white', 'w-24', bg, 'rounded-full', 'text-sm', 'h-8', 'cursor-pointer');
    removeBtnContainer.classList.add('flex', 'justify-center', 'items-center', 'text-white', 'w-24', 'bg-red-600', 'rounded-full', 'text-sm', 'h-8', 'cursor-pointer');

    readBtnContainer.appendChild(readBtn);
    removeBtnContainer.appendChild(removeBtn);
    buttonsContainer.appendChild(readBtnContainer);
    buttonsContainer.appendChild(removeBtnContainer);
    div.appendChild(h2);
    div.appendChild(p);
    div.appendChild(pages);
    div.appendChild(buttonsContainer);

    books.appendChild(div);
  });
}

submit.addEventListener('click', (e) => {
  e.preventDefault();
  const titleVal = title.value;
  const authorVal = author.value;
  const pagesVal = pages.value;
  const readVal = readOrNot.checked;

  const newBook = new Book(titleVal, authorVal, pagesVal, readVal);
  myLibrary.push(newBook);

  form.classList.toggle('hidden');
  showBooks();
});

addBtn.addEventListener('click', () => {
  form.classList.toggle('hidden');
});

cross.addEventListener('click', () => {
  form.classList.toggle('hidden');
});
