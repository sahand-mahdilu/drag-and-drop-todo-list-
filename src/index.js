const addTodoButton = document.querySelector("#addTodoBtn");
const modalElem = document.querySelector(".modal__parent");
const closeModal = document.querySelector("#closeModal");
const inputElem = document.getElementById("input");
const modalAddBtn = document.getElementById("addNewTodo");
const toDoColumn = document.getElementById("toDoColumn");
const columns = document.querySelectorAll(".column");

// open modal

addTodoButton.addEventListener("click", function () {
  modalElem.classList.remove("invisible", "opacity-0");
  modalElem.classList.add("visible", "opacity-100");
});
// close modal
closeModal.addEventListener("click", function () {
  modalElem.classList.remove("visible", "opacity-100");
  modalElem.classList.add("invisible", "opacity-0");
});

// add todo//////////
modalAddBtn.addEventListener("click", function () {
  let todo = inputElem.value;

  if (todo) {
    let newElem = document.createElement("div");

    newElem.innerHTML = todo;
    newElem.classList.add(
      "bg-blue-200",
      "w-[85%]",
      "p-2",
      "text-lg",
      "font-medium",
      "rounded-xl",
      "mt-3",
      "flex",
      "justify-between",
      "new__todo"
    );

    let buttonElem = document.createElement("button");
    buttonElem.innerText = "X";

    let randomNum = Math.trunc(Math.random() * 1000);
    newElem.setAttribute("id", randomNum);

    toDoColumn.append(newElem);

    console.log(newElem);

    newElem.append(buttonElem);
    inputElem.value = "";
    buttonElem.classList.add("text-red-500", "remove");
    const removeTodo = document.querySelectorAll(".remove");
    removeTodo.forEach(function (item) {
      item.addEventListener("click", function (e) {
        e.target.parentElement.remove();
      });
    });

    // drag/////////
    newElem.setAttribute("draggable", "true");

    newElem.addEventListener("dragstart", function (e) {
      e.dataTransfer.setData("ID", newElem.id);
    });
  }
});

// columns//////////////

columns.forEach(function (item) {
  item.addEventListener("dragover", function (e) {
    e.preventDefault();
  });
  item.addEventListener("drop", function (e) {
    let DataId = e.dataTransfer.getData("ID");

    let draggedItem = document.getElementById(DataId);
    console.log(draggedItem);

    item.append(draggedItem);
  });
});
