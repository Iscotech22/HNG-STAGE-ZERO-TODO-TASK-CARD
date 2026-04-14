
// SELECT ELEMENTS

const checkbox = document.querySelector('#complete-task');
const title = document.querySelector('h2');
const statusUpdate = document.querySelector('.status');
const timeRemainingEl = document.querySelector('.timeRemaining');
const dueDateEl = document.querySelector('.dueDate');
const editBtn = document.querySelector('.editButton');
const deleteBtn = document.querySelector('.deleteButton');


// SET DUE DATE

const dueDate = new Date(dueDateEl.getAttribute("datetime"));


// FUNCTION: CALCULATE TIME REMAINING

function getTimeRemaining() {
  const now = new Date();
  const diff = dueDate - now;

  if (diff <= 0) {
    const overdue = Math.abs(diff);
    const hours = Math.floor(overdue / (1000 * 60 * 60));

    if (hours < 1) return "Due now!";
    return `Overdue by ${hours} hour${hours > 1 ? "s" : ""}`;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

  if (days > 1) return `Due in ${days} days`;
  if (days === 1) return "Due tomorrow";
  if (hours > 0) return `Due in ${hours} hour${hours > 1 ? "s" : ""}`;

  return "Due now!";
}


// UPDATE TIME REMAINING

function updateTime() {
  timeRemainingEl.textContent = getTimeRemaining();
}

// Run once immediately
updateTime();

// Update every 60 seconds
setInterval(updateTime, 60000);


// CHECKBOX TOGGLE
checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    title.style.color  = "green";
    title.style.opacity = "0.6";

    statusUpdate.textContent = "Done";
    statusUpdate.style.color = "green";
  } else {
    title.style.color= "black";
    title.style.opacity = "1";

    statusUpdate.textContent = ` Pending`;
    statusUpdate.style.color = "orange";
  }
});


// EDIT BUTTON

editBtn.addEventListener("click", () => {
  console.log("Edit clicked");
  alert("Edit task clicked");
});


// DELETE BUTTON

deleteBtn.addEventListener("click", () => {
  console.log("Delete clicked");

  const confirmDelete = confirm("Are you sure you want to delete this task?");
  if (confirmDelete) {
    document.querySelector('[data-testid="test-todo-card"]').remove();
  }
});