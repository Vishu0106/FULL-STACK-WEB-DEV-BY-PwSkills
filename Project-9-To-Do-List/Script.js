let btn = document.getElementById("Submit");
btn.addEventListener('click',() =>{
    let taskName = document.querySelector("input");
    const todoList = document.getElementById('todolist');
    if(taskName.value == "")
    {
        alert("Enter Your todolist");
    }
    else
    {

     let task = taskName.value;
    const newTask = document.createElement('li');

    newTask.innerHTML = `<span>${task}</span><button class ="deletetask">Delete</button>`;

    todoList.appendChild(newTask);

    taskName.value = "";

    const deleteTask = newTask.querySelector('.deletetask');
    deleteTask.addEventListener('click',deleteitem);

    function deleteitem(event)
    {
        const listItem = event.target.closest('li');
        listItem.remove();
    }
}

});

