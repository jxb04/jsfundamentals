let form = document.getElementById('user-form');

form.addEventListener('submit', event=> {

    let user = form.elements['user'];
    let userError = document.getElementById('user-error');
    let avatarFile = form.element['avatar-file'];

    userError.textContent = 'Invalid entry';
    userError.style.color = 'red';
    user.style.borderColor = 'red';
    user.focus();

    console.log (user.value, avatarFile.value);
    //prevent the browser from submitting the form
    event.preventDefault();
});