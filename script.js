const textInput = document.querySelector('#text');
const enterButton = document.querySelector('#enter');
const list = document.querySelector('#list');

function createListItem() {
    let itemNode = document.createElement('li');
    let deleteButton = document.createElement('button');
    let checkbox = document.createElement('input')
    checkbox.type = 'checkbox';
    checkbox.classList.add('check');
    deleteButton.appendChild(document.createTextNode('delete'));
    deleteButton.classList = 'delete';
    itemNode.classList = 'listitem';
    let textNode = document.createTextNode(`${textInput.value} `);
    itemNode.appendChild(checkbox);
    itemNode.appendChild(textNode);
    itemNode.appendChild(deleteButton);
    if (textInput.value === '') {
        return;
    }
    textInput.value = '';
    return list.appendChild(itemNode);
}

function deleteItem(element) {
    if (element.target.classList.contains('delete')) {
        element.target.parentElement.remove();
    }
}

function addStrikeThrough(element) {
    if (element.target.classList.contains('check')) {
        element.target.parentElement.classList.toggle('finished')
    }
}

function handleUlEvent(element) {
    deleteItem(element);
    addStrikeThrough(element);
}

enterButton.addEventListener('click', createListItem);
textInput.addEventListener('keydown', event => {
    if (event.keyCode === 13) {
        createListItem();
    }
});
list.addEventListener('click', handleUlEvent);