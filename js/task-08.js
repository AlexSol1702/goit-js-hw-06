const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();
    const enteredData = []

    const { elements: { email, password } } = e.currentTarget;

    if (email.value === ''||password.value==='') {
       return console.log('Alert! Please in all fields.');
    } else {
         enteredData.push(`email: ${email.value}, password: ${password.value}`);
    };
    console.log(enteredData);
    e.currentTarget.reset();
}
