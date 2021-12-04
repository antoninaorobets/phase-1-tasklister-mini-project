document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('#create-task-form').addEventListener('submit', addItem);


    const sortBtton = document.createElement('button')
    sortBtton.textContent = "Sort"
    document.querySelector('#list').appendChild(sortBtton)


    sortBtton.addEventListener('click', sortItems);
    
});

function addItem(evt) {
    evt.preventDefault()

    const delButton = document.createElement('button')
    delButton.textContent = "x"
    const priority = createPriority()
    const dueDate = document.createElement('input')
    dueDate.type = "date"



    const toDoListItem = document.createElement('li')
    const toDoListInput = document.createElement('input')
    toDoListInput.value = document.querySelector('#new-task-description').value
    toDoListItem.appendChild(toDoListInput)
    //toDoListItem.textContent = document.querySelector('#new-task-description').value
    toDoListItem.className = "medium"
    toDoListItem.prepend(delButton)
    toDoListItem.appendChild(dueDate)
    toDoListItem.appendChild(priority)

    document.querySelector('#tasks').appendChild(toDoListItem)

    delButton.addEventListener('click', removeItem);
    priority.addEventListener('change', changePriority);






}

function removeItem(evt) {
    evt.target.parentElement.remove();
}

function createPriority() {
    const priority = document.createElement('select')
    priority.id = "priority"
    priority.innerHTML = '<option value="high">High</option>  <option  selected value="medium">Medium</option> <option value="low">Low</option>'

    return priority;
}


function changePriority(evt) {
    priority = Number.parseInt(evt.target.options.selectedIndex)
    const task = evt.target.parentElement
    const list = document.querySelector('#tasks');
    if (priority === 0) {
        task.className = "high";
        list.removeChild(task)
        list.prepend(task)
    }
    if (priority === 1) {
        task.className = "medium"
    }
    if (priority === 2) {
        task.className = "low";
        list.removeChild(task)
        list.appendChild(task)







    }
}

function sortItems() {

    const list = document.querySelector('#tasks');
    const tasks = list.getElementsByTagName('li')
    console.log(tasks)
    const b = Array.from(tasks).length - 1
    console.log(b)

    for (let i = 0; i < b; i++) {
        const task = tasks[i]
        console.log('task name', task)
        if (task.className === "high") {
            list.removeChild(task)
            list.prepend(task)
        } else
            if (task.className === "low") {
                list.removeChild(task)
                list.appendChild(task)
            }



    }

}
