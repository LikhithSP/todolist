const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
    if (inputBox.value === '') {
        alert('You must write something!');
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7'; 
        li.appendChild(span);
    }
    inputBox.value = ''; 
    saveData(); 
}
// Event listener for clicking on list items or remove button
listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle('checked'); // Toggle checked class on click
        saveData(); // Save the updated list
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove(); // Remove the todo item
        saveData(); // Save the updated list
    }
}, false);
