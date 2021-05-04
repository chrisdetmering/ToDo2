const textInput = document.querySelector('#text');
const list = document.querySelector('#list');

function createListItem() {
    if (textInput.value === '') {
        return;
    }

    const itemNode = createItemNode();
    const deleteButton = createDeleteButton();
    const checkbox = createCheckBox();
    const textNode = document.createTextNode(`${textInput.value} `);

    itemNode.appendChild(checkbox);
    itemNode.appendChild(textNode);
    itemNode.appendChild(deleteButton);

    textInput.value = '';
    return list.appendChild(itemNode);
}

function createItemNode() {
    const itemNode = document.createElement('li');
    itemNode.classList = 'listitem';
    return itemNode;
}

function createCheckBox() {
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox';
    checkbox.classList.add('check');
    return checkbox;
}

function createDeleteButton() {
    const deleteButton = document.createElement('button');
    deleteButton.appendChild(document.createTextNode('delete'));
    deleteButton.classList = 'delete';

    return deleteButton;
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

document.querySelector('#enter')
    .addEventListener('click', createListItem);

textInput.addEventListener('keydown', event => {
    if (event.keyCode === 13) {
        createListItem();
    }
});
list.addEventListener('click', handleUlEvent);