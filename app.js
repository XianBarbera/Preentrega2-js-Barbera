const todoApp = {
  tasks: [],

  addTask: function (taskText) {
    this.tasks.push({ text: taskText, completed: false });
  },

  clearCompletedTasks: function () {
    this.tasks = this.tasks.filter((task) => !task.completed);
  },

  renderTasks: function () {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    this.tasks.forEach((task, index) => {
      const li = document.createElement('li');
      li.textContent = `${index + 1}. ${task.text}`;
      li.style.textDecoration = task.completed ? 'line-through' : 'none';
      li.addEventListener('click', () => {
        task.completed = !task.completed;
        this.renderTasks();
      });

      taskList.appendChild(li);
    });
  },
};

document.getElementById('addButton').addEventListener('click', () => {
  const newTaskInput = document.getElementById('newTask');
  const taskText = newTaskInput.value.trim();

  if (taskText !== '') {
    todoApp.addTask(taskText);
    newTaskInput.value = '';
    todoApp.renderTasks();
  }
});

document.getElementById('clearButton').addEventListener('click', () => {
  todoApp.clearCompletedTasks();
  todoApp.renderTasks();
});

todoApp.renderTasks();
