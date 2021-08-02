const input = document.querySelector("#input");
const addButton = document.querySelector("#add-button");
const list = document.querySelector("#list");

addButton.addEventListener("click", addTodo);

for (let i = 0; i < 12; i++) {
  console.log(i);
}

function addTodo() {
  const newTodo = input.value;
  const newLi = document.createElement("li");
  newLi.innerText = newTodo;

  list.appendChild(newLi);
}
