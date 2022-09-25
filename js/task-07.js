const refs = {
    inpRange: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
};

const onChange = (e) => {
   refs.text.style.fontSize = `${e.target.value}px`;
};

refs.inpRange.addEventListener('input', onChange);