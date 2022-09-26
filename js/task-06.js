const inp = document.querySelector('input');

const onInputValid = (event) => {
   
    
    if (event.currentTarget.value.length == inp.getAttribute('data-length')) {
        inp.classList.add("valid");
        inp.classList.remove("invalid");
    } else {
        inp.classList.add("invalid");
        inp.classList.remove("valid");
    };
   
};


inp.addEventListener('blur', onInputValid);