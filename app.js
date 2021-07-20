const ul = document.querySelector('ul');
const input = document.querySelector('#add');
const button = document.querySelector('#submit');

//pridavanie do zoznamu

button.addEventListener('click', () => {
    console.log(input);
    ul.innerHTML += `<li>${input.value.trim()}</li>`;
    input.textContent = '';
});


//odoberanie zo zoznamu

ul.addEventListener('click', e => {
    if (e.target.tagName == "LI"){
        e.target.remove();
    }
    else{
        console.log("Kam to klikas ty chuju?");
    }
});