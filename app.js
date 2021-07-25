const addItem = document.querySelector('.add');
const list = document.querySelector('.nakupnyZoznam');
const shoppingCart = document.querySelector('.vKosiku');
const searchField = document.querySelector('.search input');
const clear = document.querySelector('.nakupene');


//vytvaranie polozky do nakupneho zoznamu
const createLi = newItem => {

    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${newItem}</span>
        <span>
            <i class="addToCart fas fa-cart-plus"></i>
            <i class="delete fas fa-trash"></i>
        </span>
    </li>
    `;
    list.innerHTML += html;
}

//vytvaranie polozky do kosika
const createLiCart = newItem => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${newItem}</span>
        <i class="delete fas fa-trash"></i>
    </li>
    `;
    shoppingCart.innerHTML += html;
}


//pridavanie do zoznamu

addItem.addEventListener('submit', e => {
    e.preventDefault();
    const newItem = addItem.add.value.trim();
    if(newItem.length > 0)
        createLi(newItem);
    addItem.reset();
})

//odoberanie zo zoznamu

list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.parentElement.remove();
    }
    if(e.target.classList.contains('addToCart')){
        createLiCart(e.target.parentElement.parentElement.textContent.trim());
        e.target.parentElement.parentElement.remove();
    }
})


shoppingCart.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        createLi(e.target.parentElement.textContent.trim());
        e.target.parentElement.remove();
    }
})

//prehladavanie zoznamu

const filterList = (phrase) => {
    Array.from(list.children)
    .filter(item => !item.textContent.toLowerCase().includes(phrase))
    .forEach(item => item.classList.add('hide'))

    Array.from(list.children)
    .filter(item => item.textContent.toLowerCase().includes(phrase))
    .forEach(item => item.classList.remove('hide'))
}

searchField.addEventListener('keyup', () => {
    const phrase = searchField.value.trim().toLowerCase();
    filterList(phrase);
})

//dokoncenie nakupu

clear.addEventListener('click', e => {
    console.log('klikaaaam');
    while(shoppingCart.hasChildNodes()){
        shoppingCart.removeChild(shoppingCart.firstChild);
    }
})