const refs = {
    counterValue: document.querySelector('#value'),
    btnDecr: document.querySelector('[data-action="decrement"]'),
    btnIncr: document.querySelector('[data-action="increment"]')
}

refs.counterValue.textContent = 0;
let numCounter = 0;

const onBtnDecrClick = () => {
    numCounter -= 1;
    refs.counterValue.textContent = numCounter;
    
};
const onBtnIncrClick = () => {
    numCounter += 1;
    refs.counterValue.textContent = numCounter;
    
};

refs.btnDecr.addEventListener('click', onBtnDecrClick);
refs.btnIncr.addEventListener('click', onBtnIncrClick);



