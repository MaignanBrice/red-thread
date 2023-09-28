document.querySelector('#menubars').addEventListener('click', () => {
    document.querySelector('.nav--mobile').classList.remove('hidden');
    document.querySelector('.fader--mobile').classList.remove('hidden');
});

document.querySelector('.fader--mobile').addEventListener('click', (event) => {
    event.target.classList.add('hidden');
    document.querySelector('.nav--mobile').classList.add('hidden');
})