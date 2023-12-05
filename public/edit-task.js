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
    
    const { data } = response;
    const { _id: taskID, name: taskName, completed } = data.tasks;
    // const { completed } = data;
    taskIDDOM.textContent = taskID;
    taskNameDOM.value = taskName;
    tempName = taskName;
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
    const {data} = response;
    console.log(data);
    const taskID = data._id;
    const name = data.name;
    const completed = data.completed;
    
    taskIDDOM.textContent = taskID;
    console.log(5);
    taskNameDOM.value = name;
    console.log(6);
    tempName = name;
    console.log(7);
    taskCompletedDOM.checked = completed;
    console.log(8);

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
