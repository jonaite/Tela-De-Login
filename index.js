let isLoggedIn = false;
const loginLink = document.querySelector('.login a');

loginLink.addEventListener('click', function(e) {
  e.preventDefault();
  if (isLoggedIn) {
    isLoggedIn = false;
    loginLink.textContent = 'Login';
  } else {
    isLoggedIn = true;
    loginLink.textContent = 'Logout';
  }
});






