const refs = {
  text: document.querySelector('.color'),
  btn: document.querySelector('.change-color'),
  body: document.querySelector('body'),
};

function getRandomHexColor() {
  refs.body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  refs.text.textContent = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
 
refs.btn.addEventListener('click', getRandomHexColor);


