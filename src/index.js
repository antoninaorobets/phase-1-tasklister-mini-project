document.addEventListener("DOMContentLoaded", () => {
  
document.querySelector('#create-task-form').addEventListener('submit', addItem);
const form = document.querySelector("#create-task-form");


});

function addItem (evt) {
  evt.preventDefault()
  
  const delButton = document.createElement('button')
  delButton.textContent = "x"
  const priority = createPriority() 


  const toDoListItem = document.createElement('li')
  toDoListItem.textContent = form.querySelector('#new-task-description').value + " "
  toDoListItem.appendChild(delButton)
  toDoListItem.appendChild(priority)

  document.querySelector('#tasks').appendChild(toDoListItem)

  delButton.addEventListener('click', removeItem);

  

}

function removeItem (evt) {
  evt.target.parentElement.remove();
}

function createPriority () {

  const priority = document.createElement('select')
  priority.innerHTML =  '<option value="high">High</option>  <option value="medium">Medium</option> <option value="low">Low</option>'

return priority;
}


