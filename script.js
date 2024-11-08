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

// Event listener for pressing the Enter key to add a task
inputBox.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') { // Check if the pressed key is 'Enter'
        addTask(); // Call the addTask function
    }
}, false);

function saveData() {
    localStorage.setItem('data', listContainer.innerHTML); // Save list to local storage
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem('data'); // Load list from local storage
}
showTask(); // Call showTask on page load
