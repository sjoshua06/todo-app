const todovalue = document.getElementById("todotext");
const listItems = document.getElementById("list-item");
const addBtn = document.getElementById("addupdateclick");

// Event listener for button click
addBtn.addEventListener("click", createtododata);

// Also allow pressing "Enter" key to add
todovalue.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        createtododata();
    }
});

function createtododata() {
    if (todovalue.value.trim() === "") {
        alert("Please enter your todo text:");
        todovalue.focus();
        return;
    }

    // create li
    let li = document.createElement("li");

    // span for text
    let span = document.createElement("span");
    span.textContent = todovalue.value;

    // complete button (✓)
    let completeBtn = document.createElement("button");
    completeBtn.textContent = "✔";
    completeBtn.style.marginLeft = "10px";
    completeBtn.style.border = "none";
    completeBtn.style.background = "limegreen";
    completeBtn.style.color = "white";
    completeBtn.style.borderRadius = "50%";
    completeBtn.style.width = "30px";
    completeBtn.style.height = "30px";
    completeBtn.style.cursor = "pointer";

    completeBtn.onclick = function () {
        span.classList.toggle("completed");
    };

    // delete button (X)
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✖";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.style.border = "none";
    deleteBtn.style.background = "red";
    deleteBtn.style.color = "white";
    deleteBtn.style.borderRadius = "50%";
    deleteBtn.style.width = "30px";
    deleteBtn.style.height = "30px";
    deleteBtn.style.cursor = "pointer";

    deleteBtn.onclick = function () {
        li.remove();
    };

    // append span + buttons to li
    li.appendChild(span);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    // add li to list
    listItems.appendChild(li);

    // clear input
    todovalue.value = "";
}


