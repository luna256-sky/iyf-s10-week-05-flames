const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
const itemsLeft = document.getElementById("items-left");
const clearBtn = document.getElementById("clear-completed");
const filters = document.querySelectorAll(".filter");

let currentFilter = "all";

// =====================
// ADD TASK
// =====================
form.addEventListener("submit", addTask);

function addTask(e) {
    e.preventDefault();

    const text = input.value.trim();

    // ❌ Empty tasks not allowed
    if (text === "") return;

    const li = document.createElement("li");

    li.innerHTML = `
        <span class="task">${text}</span>
        <input class="edit-input" type="text" />
        <button class="delete">❌</button>
    `;

    list.appendChild(li);

    input.value = ""; // clear input after adding

    updateStats();
}

// =====================
// EVENT DELEGATION (ONE LISTENER)
// =====================
list.addEventListener("click", function (e) {
    const li = e.target.closest("li");
    if (!li) return;

    // DELETE TASK
    if (e.target.classList.contains("delete")) {
        li.remove();
        updateStats();
        return;
    }

    // TOGGLE COMPLETE (click task text only)
    if (e.target.classList.contains("task")) {
        li.classList.toggle("completed");
        updateStats();
    }
});

// =====================
// EDIT TASK (DOUBLE CLICK)
// =====================
list.addEventListener("dblclick", function (e) {
    const li = e.target.closest("li");
    if (!li) return;

    if (e.target.classList.contains("task")) {
        startEdit(li);
    }
});

function startEdit(li) {
    const span = li.querySelector(".task");
    const inputEdit = li.querySelector(".edit-input");

    inputEdit.value = span.textContent;

    li.classList.add("editing");
    inputEdit.style.display = "block";
    inputEdit.focus();

    // ENTER = save
    inputEdit.onkeydown = function (e) {
        if (e.key === "Enter") {
            span.textContent = inputEdit.value.trim() || span.textContent;
            finishEdit(li);
        }

        // ESC = cancel
        if (e.key === "Escape") {
            finishEdit(li);
        }
    };
}

function finishEdit(li) {
    const inputEdit = li.querySelector(".edit-input");

    li.classList.remove("editing");
    inputEdit.style.display = "none";
}

// =====================
// CLEAR COMPLETED
// =====================
clearBtn.addEventListener("click", function () {
    document.querySelectorAll(".completed").forEach(task => task.remove());
    updateStats();
});

// =====================
// FILTERS
// =====================
filters.forEach(btn => {
    btn.addEventListener("click", function () {
        document.querySelector(".filter.active").classList.remove("active");
        this.classList.add("active");

        currentFilter = this.dataset.filter;
        filterTasks();
    });
});

function filterTasks() {
    const tasks = document.querySelectorAll("#todo-list li");

    tasks.forEach(task => {
        const isCompleted = task.classList.contains("completed");

        if (currentFilter === "all") {
            task.style.display = "flex";
        }

        if (currentFilter === "active") {
            task.style.display = isCompleted ? "none" : "flex";
        }

        if (currentFilter === "completed") {
            task.style.display = isCompleted ? "flex" : "none";
        }
    });
}

// =====================
// STATS
// =====================
function updateStats() {
    const active = document.querySelectorAll("#todo-list li:not(.completed)").length;

    itemsLeft.textContent = `${active} items left`;

    filterTasks();
}