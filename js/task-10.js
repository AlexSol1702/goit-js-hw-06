const refs = {
  inp: document.querySelector('[type="number"]'),
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
  boxSet: document.querySelector('#boxes'),
  arrBoxes: [],
};

refs.boxSet.style.display = "flex";
refs.boxSet.style.flexWrap = "wrap";
refs.boxSet.style.gap = "10px";

function onCreateBoxesInput(e) {
  
    let width = 20;
    let heigth = 20;

  if (e.target.value !== '') {

     for (let number = 0; number < e.target.value; number += 1) {
       const box = document.createElement('div');
       
       box.style.width = `${width += 10}px`;
       box.style.height = `${heigth += 10}px`;
       box.style.backgroundColor = getRandomHexColor();

      refs.arrBoxes.push(box);
      
   };
  };
};


function onAddBoxSetClick() {
  refs.boxSet.append(...refs.arrBoxes);
};

function onDestroyClick() {
  refs.boxSet.innerHTML = [];
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};


refs.inp.addEventListener('input', onCreateBoxesInput);
refs.btnCreate.addEventListener('click', onAddBoxSetClick);
refs.btnDestroy.addEventListener('click', onDestroyClick);


