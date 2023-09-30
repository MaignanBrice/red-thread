document.querySelector('#id-btn').addEventListener('click', () => {
    checkPassword(document.querySelector('.form--pwd').value);
});

localStorage.setItem('id', 'briceM');
localStorage.setItem('pwd', 'password');


function checkPassword(value) {
    if (value === localStorage.getItem('pwd')) window.location.href = "../index.html"
}

