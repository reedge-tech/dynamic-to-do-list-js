// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // ✅ Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // ✅ Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim();

        // ✅ Check for empty input
        if (taskText === '') {
            alert('Please enter a task');
            return;
        }

        // ✅ Create list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // ✅ Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // ✅ Remove task on button click
        removeButton.onclick = () => {
            taskList.removeChild(li);
        };

        // ✅ Append button and list item to task list
        li.appendChild(removeButton);
        taskList.appendChild(li);

        // ✅ Clear input
        taskInput.value = '';
    }

    // ✅ Add click event to button
    addButton.addEventListener('click', addTask);

    // ✅ Add enter key support to input
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});




