// Function to add a new task
function addTask() {
    const taskText = document.getElementById('todo-input').value;

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const taskList = document.getElementById('todo-list');
    const taskItem = document.createElement('li');
    taskItem.className = 'todo-item';
    taskItem.innerHTML = `
        <input type="checkbox" class="task-checkbox">
        <span class="task-item">${taskText}</span>
        <button class="delete-todo">Delete</button>
    `;

    taskList.appendChild(taskItem);

    document.getElementById('todo-input').value = '';

    const deleteButton = taskItem.querySelector('.delete-todo');
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(taskItem);
    });

    const checkbox = taskItem.querySelector('.task-checkbox');
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            taskItem.querySelector('span').style.textDecoration = 'line-through';
        } else {
            taskItem.querySelector('span').style.textDecoration = 'none';
        }
    });
}


document.getElementById('add-todo').addEventListener('click', addTask);

document.getElementById('todo-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

