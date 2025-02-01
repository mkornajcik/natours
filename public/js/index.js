import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { displayMap } from './leaflet.js';
import { login, logout, signup } from './login.js';
import { updateSettings } from './updateSettings.js';
import { bookTour } from './stripe.js';

document.addEventListener('DOMContentLoaded', () => {
  //DOM Elements
  const mapBox = document.getElementById('map');
  const loginForm = document.querySelector('.form--login');
  const signupForm = document.querySelector('.form--signup');
  const userDataForm = document.querySelector('.form-user-data');
  const userPasswordForm = document.querySelector('.form-user-password');
  const logOutBtn = document.querySelector('.nav__el--logout');
  const bookBtn = document.getElementById('book-tour');

  //Delegation
  if (mapBox) {
    const locations = JSON.parse(mapBox.dataset.locations);
    displayMap(locations);
  }

  if (userDataForm) {
    userDataForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const form = new FormData();
      form.append('name', document.getElementById('name').value);
      form.append('email', document.getElementById('email').value);
      form.append('photo', document.getElementById('photo').files[0]);
      /* const name = document.getElementById('name').value;
      const email = document.getElementById('email').value; */
      updateSettings(form, 'data');
    });
  }

  if (userPasswordForm) {
    userPasswordForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      document.querySelector('.btn--save-password').textContent = 'Updating...';

      const passwordCurrent = document.getElementById('password-current').value;
      const password = document.getElementById('password').value;
      const passwordConfirm = document.getElementById('password-confirm').value;
      await updateSettings(
        { passwordCurrent, password, passwordConfirm },
        'password',
      );
      document.querySelector('.btn--save-password').textContent =
        'Save password';
      document.getElementById('password-current').value = '';
      document.getElementById('password').value = '';
      document.getElementById('password-confirm').value = '';
    });
  }

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      login(email, password);
    });
  }

  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      document.querySelector('.btn--signup').textContent = 'Processing...';
      const email = document.getElementById('email').value;
      const name = document.getElementById('name').value;
      const password = document.getElementById('password').value;
      const passwordConfirm = document.getElementById('password').value;
      console.log(email, name, password, passwordConfirm);
      signup(email, name, password, passwordConfirm);
    });
  }

  if (logOutBtn) {
    logOutBtn.addEventListener('click', logout);
  }

  if (bookBtn) {
    bookBtn.addEventListener('click', (e) => {
      e.target.textContent = 'Processing...';
      const { tourId } = e.target.dataset;
      bookTour(tourId);
    });
  }
});
