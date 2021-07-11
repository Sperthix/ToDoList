const ul = document.querySelector('ul');
const button = document.querySelector('button');

const input = document.getElementById('add');

//pridavanie do zoznamu

button.addEventListener('click', () => {
    console.log(input);
    ul.innerHTML += "<li>" + input.value + "</li>";
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