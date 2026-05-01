let tasks = [];
let filter = "all";

function addTask() {
  let input = document.getElementById("taskInput");

  if (input.value.trim() === "") return;

  tasks.push({
    text: input.value,
    status: "pending"
  });

  input.value = "";
  render();
}

function toggleTask(index) {
  tasks[index].status =
    tasks[index].status === "pending"
      ? "completed"
      : "pending";

  render();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  render();
}

function setFilter(type) {
  filter = type;
  render();
}

function render() {
  let list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks
    .filter(t => filter === "all" ? true : t.status === filter)
    .forEach((task, i) => {

      let li = document.createElement("li");

      if (task.status === "completed") {
        li.classList.add("completed");
      }

      li.innerHTML = `
        <span>${task.text}</span>
        <div>
          <button class="complete" onclick="toggleTask(${i})">✔</button>
          <button class="delete" onclick="deleteTask(${i})">❌</button>
        </div>
      `;

      list.appendChild(li);
    });
}

render();