const ul = document.querySelector('ul');
const input = document.querySelector('#add');
const button = document.querySelector('#submit');

//pridavanie do zoznamu

button.addEventListener('click', () => {
    console.log(input);
    let add = input.value.trim();
    ul.innerHTML += `<li>${add}</li>`;
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