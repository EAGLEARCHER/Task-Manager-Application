const taskIDDOM = document.querySelector(".task-edit-id");
const taskNameDOM = document.querySelector(".task-edit-name");
const taskCompletedDOM = document.querySelector(".task-edit-completed");
const editFormDOM = document.querySelector(".single-task-form");
const editBtnDOM = document.querySelector(".task-edit-btn");
const formAlertDOM = document.querySelector(".form-alert");

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
let tempName;

const showTask = async () => {
  try {
    const response = await axios.get(`/api/tasks/${id}`);
    console.log(1);
    const { data } = response;
    const taskID = data.tasks._id;
    const taskName = data.tasks.name;
    const { completed } = data; // Updated destructuring assignment
    console.log(3);
    taskIDDOM.textContent = taskID;
    taskNameDOM.value = taskName;
    tempName = name;
    taskCompletedDOM.checked = completed;
  } catch (error) {
    console.error(error);
  }
};

const updateTask = async (taskName, taskCompleted) => {
  try {
    const response = await axios.patch(`/api/tasks/${id}`, {
      name: taskName,
      completed: taskCompleted,
    });
    const { task } = response.data;
    const { _id: taskID, completed, name } = task;

    taskIDDOM.textContent = taskID;
    taskNameDOM.value = name;
    tempName = name;
    taskCompletedDOM.checked = completed;

    formAlertDOM.style.display = "block";
    formAlertDOM.textContent = `Success, edited task`;
    formAlertDOM.classList.add("text-success");
  } catch (error) {
    console.error(error);
    taskNameDOM.value = tempName;

    formAlertDOM.style.display = "block";
    formAlertDOM.textContent = `Error, please try again`;
    formAlertDOM.classList.add("text-danger");
  } finally {
    editBtnDOM.textContent = "Edit";
    setTimeout(() => {
      formAlertDOM.style.display = "none";
      formAlertDOM.classList.remove("text-success", "text-danger");
    }, 3000);
  }
};

editFormDOM.addEventListener("submit", async (e) => {
  e.preventDefault();
  editBtnDOM.textContent = "Loading...";

  const taskName = taskNameDOM.value;
  const taskCompleted = taskCompletedDOM.checked;

  await updateTask(taskName, taskCompleted);
});

showTask();
