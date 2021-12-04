document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('#create-task-form').addEventListener('submit', addItem);
    
});

function addItem(evt) {
    evt.preventDefault()

    const delButton = document.createElement('button')
    delButton.textContent = "x"
    const priority = createPriority()


    const toDoListItem = document.createElement('li')
    toDoListItem.textContent = document.querySelector('#new-task-description').value + " "
    toDoListItem.className = "medium"
    toDoListItem.appendChild(delButton)
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
    if (priority === 0 ) {
        task.className = "high";
        list.removeChild(task)
        list.prepend(task)
    }
    if (priority === 1 ) {task.className = "medium"}
    if (priority === 2 ) {
        task.className = "low";
        list.removeChild(task)
        list.appendChild(task)
}


    console.log(task)



    
    

 


    
    //sortByPriority()

    
}

list.removeChild(task)
        //     list.appendChild(task)
function sortByPriority(){
    const list = document.querySelector('#tasks');
    const tasks = list.getElementsByTagName('li');

    for (let listItem of tasks) {
        console.log('tasks ',listItem)
        if (listItem.className === "high") {
           list.removeChild(listItem)
           list.prepend(listItem)
        }
        if (listItem.className === "low") {
            list.removeChild(listItem)
            list.appendChild(listItem)
         }



    }




    console.log('sort ',list)
    console.log('tasks ',tasks)




}

