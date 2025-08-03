// Select DOM Elements
const addButton = document.getElementById('add-task');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Create the addTask function
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task.');
    return;
  }

  // Task Creation and Removal
  const li = document.createElement('li');
  li.textContent = taskText;

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.className = 'remove-btn';

  removeBtn.onclick = function () {
    taskList.removeChild(li);
  };

  li.appendChild(removeBtn);
  taskList.appendChild(li);

  taskInput.value = '';
}

// Attach Event Listeners
addButton.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    addTask();
  }
});






