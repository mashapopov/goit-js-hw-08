// import throttle from 'lodash.throttle';

// const KEY_STORAGE = 'feedback-form-state';
// const data = {};

// const form = document.querySelector('.feedback-form');

// form.addEventListener('submit', onFormSubmit);
// form.addEventListener('input', throttle(onTextareaInput, 500));

// populateInputForm();

// function onFormSubmit(e) {
//   e.preventDefault();

//   data.email = form.email.value;
//   data.message = form.message.value;

//   if (form.email === '' || form.message === '') {
//     return;
//   }

//   e.currentTarget.reset();
//   localStorage.removeItem(KEY_STORAGE);
// }

// function onTextareaInput() {
//   data.email = form.email.value;
//   data.message = form.message.value;

//   localStorage.setItem(KEY_STORAGE, JSON.stringify(data));
// }

// function populateInputForm() {
//   const savedInput = localStorage.getItem(KEY_STORAGE);

//   if (savedInput) {
//     const storageInput = JSON.parse(savedInput);

//     form.email.value = storageInput.email;
//     form.message.value = storageInput.message;
//   }
// }
// ==========================================================
// const throttle = require('lodash.throttle');
// const form = document.querySelector('.feedback-form');
// const emailInput = document.querySelector(`input[name="email"]`);
// const messageInput = document.querySelector(`textarea[name="message"]`);
// const LOCALSTORAGE_KEY = 'feedback-form-state';

// updateInput();

// form.addEventListener('input', throttle(onHandlerInput, 500));
// form.addEventListener('submit', onHandlerSubmit);

// function onHandlerInput(evt) {
//   evt.preventDefault();
//   const user = {
//     email: form.email.value,
//     message: form.message.value,
//   };

//   const userString = JSON.stringify(user);
//   localStorage.setItem(LOCALSTORAGE_KEY, `${userString}`);
// }

// function updateInput() {
//   let getItemLocalStorage = localStorage.getItem(LOCALSTORAGE_KEY);
//   if (!getItemLocalStorage) return;

//   let parseItemLocalStorage = JSON.parse(getItemLocalStorage);

//   emailInput.value = parseItemLocalStorage.email || '';
//   messageInput.value = parseItemLocalStorage.message || '';
// }

// function onHandlerSubmit(evt) {
//   evt.preventDefault();

//   if (emailInput.value === '' || messageInput.value === '') {
//     return alert('Все поля должны быть заполнены');
//   }

//   const user = {
//     email: evt.currentTarget.email.value,
//     message: evt.currentTarget.message.value,
//   };

//   console.log(user);

//   localStorage.clear();
//   form.reset();
// }
// ===============================================

// import throttle from 'lodash.throttle';

// const form = document.querySelector('.feedback-form');
// const input = document.querySelector('.feedback-form input');
// const textarea = document.querySelector('.feedback-form textarea');

// form.addEventListener('submit', onFormSubmit);
// form.addEventListener('input', throttle(onTextareaInput, 500));

// const FEEDBACK_FORM_STATE = 'feedback-form-state';
// const data = {};

// populateInputForm();

// function onFormSubmit(e) {
//   e.preventDefault();

//   e.currentTarget.reset();
//   localStorage.removeItem(FEEDBACK_FORM_STATE);
// }

// function onTextareaInput() {
//   data.email = form.email.value;
//   data.message = form.message.value;

//   const values = JSON.stringify(data);

//   localStorage.setItem(FEEDBACK_FORM_STATE, values);
// }

// function populateInputForm() {
//   const savedInput = localStorage.getItem(FEEDBACK_FORM_STATE);
//   const storageInput = JSON.parse(savedInput);

//   if (storageInput) {
//     form.email.value = storageInput.email;
//     form.message.value = storageInput.message;
//     console.log(storageInput);
//   }
// }