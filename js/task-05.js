const refs = {
    inputName: document.querySelector("#name-input"),
    outputName: document.querySelector("#name-output"),
};


refs.inputName.addEventListener("input", (event) => { 
    if (event.target.value !== '') {
        refs.outputName.textContent = event.target.value;
    } else {refs.outputName.textContent = 'Anonymous'};
});

