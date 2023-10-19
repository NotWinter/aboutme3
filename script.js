const btnPopup = document.querySelector('.socialButton');
const wrapper = document.querySelector('.wrapper');
const xBtn = document.querySelector('.x');

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
})

xBtn.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
})