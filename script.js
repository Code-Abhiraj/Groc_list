document.getElementById('itemInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addItem();
    }
});

function addItem() {
    const itemInput = document.getElementById('itemInput');
    const itemText = itemInput.value.trim();

    if (itemText === '') {
        alert('Please enter an item');
        return;
    }

    const groceryList = document.getElementById('groceryList');
    const listItem = document.createElement('li');

    const textSpan = document.createElement('span');
    textSpan.textContent = itemText;
    textSpan.className = 'item-text';

    const removeButton = document.createElement('button');
    removeButton.textContent = 'X';
    removeButton.className = 'remove';
    removeButton.onclick = function(event) {
        event.stopPropagation(); // Prevent triggering the checkmark toggle
        groceryList.removeChild(listItem);
    };

    listItem.appendChild(textSpan);
    listItem.appendChild(removeButton);

    listItem.onclick = function() {
        listItem.classList.toggle('checked');
    };

    groceryList.appendChild(listItem);
    itemInput.value = '';
}
