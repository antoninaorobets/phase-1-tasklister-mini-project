document.addEventListener("DOMContentLoaded", () => {
    document
        .querySelector('#create-task-form')
        .addEventListener('submit', addItem);
});

function addItem(evt) {
    evt.preventDefault()

    const toDoListItem = document.createElement('li')
    toDoListItem.className = "medium"
    document.querySelector('#tasks').appendChild(toDoListItem)

    toDoListItem.prepend(createPrioritySelector())

    const taskListInput = document.createElement('input')
    taskListInput.value = document.querySelector('#new-task-description').value
    toDoListItem.appendChild(taskListInput)

    const dueDate = document.createElement('input');
    dueDate.type = "date";
    toDoListItem.appendChild(dueDate);

    const delButton = document.createElement('button')
    delButton.textContent = "x"
    delButton.addEventListener('click', removeItem);
    toDoListItem.appendChild(delButton)

    document.querySelector('#create-task-form').reset()
}

function removeItem(evt) {
    evt.target.parentElement.remove();
}

function createPrioritySelector() {
    const priority = document.createElement('select')
    priority.id = "priority"
    priority.innerHTML =
        '<option value="high">High</option>' +
        '<option value="medium" selected>Medium</option>' +
        '<option value="low">Low</option>'

    priority.addEventListener('change', changePriority);
    return priority;
}

function changePriority(evt) {
    priority = Number.parseInt(evt.target.options.selectedIndex)
    const task = evt.target.parentElement

    task.className = (() => {
        switch (priority) {
            case 0: return "high";
            case 1: return "medium";
            case 2: return "low";
        }
    })()

    sortItems()

}
function comparePriority(a,b) {
    return priorityToNumber(a) - priorityToNumber(b)
}

function priorityToNumber(priority) {
    switch (priority) {
        case "high" : return 1;
        case "medium" : return 2;
        case "low" : return 3;
    }
}

function sortItems() {
    const list = document.querySelector('#tasks');
    Array.from(list.getElementsByTagName('li'))
        .sort((a, b) => comparePriority(a.className, b.className))
        .forEach(node => list.appendChild(node));
}
