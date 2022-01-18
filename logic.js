// const

const toDoInput = document.querySelector(".toDoInput");
const toDoButton = document.querySelector(".toDoButton");
const toDoList = document.querySelector(".toDoList");

// Even Listners

toDoButton.addEventListener("click", addToDo);
toDoList.addEventListener("click", deleteCheck);

// functions

function addToDo(event) {
  event.preventDefault();

  //  create to do div

  const toDoDiv = document.createElement("div");
  toDoDiv.classList.add("toDo");

  //   create li

  const newToDo = document.createElement("li");
  newToDo.classList.add("toDoItem");
  newToDo.innerText = toDoInput.value;
  toDoDiv.appendChild(newToDo);

  //   create check button

  const checkButton = document.createElement("button");
  checkButton.innerHTML = '<i class="fas fa-check"></i>';
  checkButton.classList.add("checkButton");
  toDoDiv.appendChild(checkButton);

  //   create delete button

  const trashButton = document.createElement("button");
  trashButton.classList.add("trashButton");
  trashButton.innerHTML = '<i class="fas fa-trash""></i>';
  toDoDiv.appendChild(trashButton);

  //   append to value

  toDoList.appendChild(toDoDiv);

  //   clear input value

  toDoInput.value = "";
}

// delete toDo

function deleteCheck(e) {
  const item = e.target;
  //  delte to do

  if (item.classList[0] === "trashButton") {
    const toDo = item.parentElement;
    // animation
    toDo.classList.add("fall");
    toDo.addEventListener("transitionend", function () {
      toDo.remove();
    });
  }

  if (item.classList[0] === "checkButton") {
    const toDo = item.parentElement;
    toDo.classList.toggle("completed");
  }
}
