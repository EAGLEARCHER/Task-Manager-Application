const tasksDOM = document.querySelector(".tasks");
const loadingDOM = document.querySelector(".loading-text");
const formDOM = document.querySelector(".task-form");
const taskInputDOM = document.querySelector(".task-input");
const formAlertDOM = document.querySelector(".form-alert");

const showTasks = async () => {
  try {
    loadingDOM.style.visibility = "visible";
    const response = await axios.get("/api/tasks");
    const { data } = response;
    if (data.length === 0) {
      tasksDOM.innerHTML = '<h5 class="empty-list">No tasks in your list</h5>';
    } else {
      const allTasks = data
        .map((task) => {
          const { completed, _id: taskID, name } = task;
          const taskCompletedClass = completed ? "task-completed" : "";
          return `<div class="single-task ${taskCompletedClass}">
            <h5><span><i class="far fa-check-circle"></i></span>${name}</h5>
            <div class="task-links">
              <a href="task.html?id=${taskID}" class="edit-link">
                <i class="fas fa-edit"></i>
              </a>
              <button type="button" class="delete-btn" data-id="${taskID}">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          </div>`;
        })
        .join("");
      tasksDOM.innerHTML = allTasks;
    }
  } catch (error) {
    tasksDOM.innerHTML = '<h5 class="empty-list">Error fetching tasks</h5>';
    console.error(error);
  } finally {
    loadingDOM.style.visibility = "hidden";
  }
};

const deleteTask = async (id) => {
  try {
    await axios.delete(`/api/tasks/${id}`);
    showTasks();
  } catch (error) {
    console.error(error);
  }
};

const addTask = async (name) => {
  try {
    await axios.post("/api/tasks", { name });
    showTasks();
    taskInputDOM.value = "";
    formAlertDOM.style.display = "block";
    formAlertDOM.textContent = `Success, task added`;
    formAlertDOM.classList.add("text-success");
  } catch (error) {
    formAlertDOM.style.display = "block";
    formAlertDOM.textContent = `Error, please try again`;
    formAlertDOM.classList.add("text-danger");
  } finally {
    setTimeout(() => {
      formAlertDOM.style.display = "none";
      formAlertDOM.classList.remove("text-success", "text-danger");
    }, 3000);
  }
};

const handleTaskDelete = async (e) => {
  const el = e.target;
  if (el.parentElement.classList.contains("delete-btn")) {
    loadingDOM.style.visibility = "visible";
    const id = el.parentElement.dataset.id;
    await deleteTask(id);
    loadingDOM.style.visibility = "hidden";
  }
};

formDOM.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = taskInputDOM.value.trim();
  if (name !== "") {
    addTask(name);
  } else {
    formAlertDOM.style.display = "block";
    formAlertDOM.textContent = `Please enter a task`;
    formAlertDOM.classList.add("text-warning");
    setTimeout(() => {
      formAlertDOM.style.display = "none";
      formAlertDOM.classList.remove("text-warning");
    }, 3000);
  }
});

tasksDOM.addEventListener("click", handleTaskDelete);

showTasks();
