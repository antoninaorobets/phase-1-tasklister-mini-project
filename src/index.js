document.addEventListener("DOMContentLoaded", () => {
  
document.querySelector('#create-task-form').addEventListener('submit', addItem);

document.querySelector(".delete").addEventListener('click',removeItem)

});

function addItem (evt) {
  evt.preventDefault()
 
  const delButton = document.createElement('button')
  delButton.textContent = "x"
  delButton.class = "delete"

  const ToDoListItem = document.createElement('li')
  ToDoListItem.textContent = document.querySelector('#new-task-description').value + " "
  ToDoListItem.appendChild(delButton)

  document.querySelector('#tasks').appendChild(ToDoListItem)

  evt.reset()

}

function removeItem(evt) {
  

}
