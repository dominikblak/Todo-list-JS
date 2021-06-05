{
  let tasks = [];
  let hideDoneTasks = false;

  const resetTask = (newTask) => {
    newTask.value = "";
    newTask.focus();
  };

  const addNewTask = (newTaskContent) => {
    tasks = [...tasks, { content: newTaskContent }];
    render();
  };

  const removeTask = (taskIndex) => {
    tasks = [...tasks.slice(0, taskIndex), ...tasks.slice(taskIndex + 1)];
    render();
  };

  const toggleTaskDone = (taskIndex) => {
    tasks = [
      ...tasks.slice(0, taskIndex),
      { ...tasks[taskIndex], done: !tasks[taskIndex].done },
      ...tasks.slice(taskIndex + 1),
    ];
    render();
  };
  const tasksAllDone = () => {
    tasks = tasks.map((task) => ({
      ...task,
      done: true,
    }));
    render();
  };
  const toggleTasksDone = () => {
    hideDoneTasks = !hideDoneTasks;
    render();
  };
  const bindToggleTasksDone = () => {
    const buttonToggleCompleted = document.querySelector(".js-buttonToggleCompleted");
    if (buttonToggleCompleted) {
      buttonToggleCompleted.addEventListener("click", () => {
        toggleTasksDone();
      });
    }
  };
  const bindToggleAllTasksDone = () => {
    const buttonAllToggleCompleted = document.querySelector(".js-buttonToggleAllCompleted");
    if (buttonAllToggleCompleted) {
      buttonAllToggleCompleted.addEventListener("click", () => {
        tasksAllDone();
      });
    }
  };
  const bindEvents = () => {
    const removeButtons = document.querySelectorAll(".js-remove");
    removeButtons.forEach((removeButton, index) => {
      removeButton.addEventListener("click", () => {
        removeTask(index);
      });
    });

    const toogleDoneButtons = document.querySelectorAll(".js-done");
    toogleDoneButtons.forEach((toggleDoneButton, index) => {
      toggleDoneButton.addEventListener("click", () => {
        toggleTaskDone(index);
      });
    });
  };
  const renderButtonsCompleted = () => {
    let buttonsCompletedHTML = "";
    if (tasks.length > 0) {
      buttonsCompletedHTML += `<button class="section__button js-buttonToggleCompleted">
      ${
        hideDoneTasks ? "Pokaż" : "Ukryj"
      } ukończone</button><button class="section__button js-buttonToggleAllCompleted" ${
        tasks.every(({ done }) => done) ? "disabled" : ""
      }>Ukończ wszytskie</button>`;
    }
    document.querySelector(".js-buttonsCompleted").innerHTML = buttonsCompletedHTML;
  };
  const renderTasks = () => {
    let htmlString = "";
    for (const task of tasks) {
      htmlString += `
      <li class="tasks__list ${task.done && hideDoneTasks ? "tasks__list--hiden" : ""}"}>
      <button class="task__button js-done">${task.done ? "&#10004" : ""}</button>
      <span class="task__content ${task.done ? 'task__content--done"' : '"'}>${task.content}</span>
      <button class=" task__button  task__button--remove js-remove">&#128465</button>
      </li>`;
    }
    document.querySelector(".js-tasks").innerHTML = htmlString;
  };
  const render = () => {
    renderTasks();
    renderButtonsCompleted();

    bindToggleTasksDone();
    bindToggleAllTasksDone();
    bindEvents();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    const newTask = document.querySelector(".js-newTask");
    const newTaskContent = newTask.value.trim();
    if (newTaskContent === "") {
      resetTask(newTask);
      return;
    }
    addNewTask(newTaskContent);
    resetTask(newTask);
  };

  const init = () => {
    render();
    const form = document.querySelector(".js-form");
    form.addEventListener("submit", onFormSubmit);
  };
  init();
}
