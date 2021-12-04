document.addEventListener("DOMContentLoaded", () => {
  
document.querySelector('#create-task-form').addEventListener('submit', addItem);



});

function addItem (evt) {
  evt.preventDefault()
  
  const delButton = document.createElement('button')
  delButton.textContent = "x"


  const ToDoListItem = document.createElement('li')
  ToDoListItem.textContent = document.querySelector('#new-task-description').value + " "
  ToDoListItem.appendChild(delButton)

  document.querySelector('#tasks').appendChild(ToDoListItem)

  delButton.addEventListener('click', removeItem);

  // evt.reset()

}

function removeItem (evt) {
  evt.target.parentElement.remove();
}
