const addItem = document.querySelector('.add');
const list = document.querySelector('.todos');

const createLi = newItem => {

    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${newItem}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;
    list.innerHTML += html;
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
        e.target.parentElement.remove();
    }
})

