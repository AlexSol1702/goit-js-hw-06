const inp = document.querySelector('input');

const onInputValid = (event) => {
   
    
    if (event.currentTarget.value.length == inp.getAttribute('data-length')) {
        inp.classList.add("valid");
    } else {
        inp.classList.add("invalid");
    };
   
};


inp.addEventListener('blur', onInputValid);