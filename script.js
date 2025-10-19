const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

const saved = localStorage.getItem("tasks");

const todos = saved ? JSON.parse(saved) : [];

function saveTasks(){
    localStorage.setItem("tasks", JSON.stringify(todos));
}

function createTodoNode(todo, index){
    const li  = document.createElement('li');

    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.checked = !!todo.completed;

    checkBox.addEventListener("change", ()=>{
        todo.completed = checkBox.checked;

        textSpan.style.textDecoration = todo.completed ? "line-through" : "";
        
    })
    
    const textSpan = document.createElement('span') 
    textSpan.textContent = todo.text;
    textSpan.style.margin = "4px 10px";

    if(todo.completed){
        textSpan.style.textDecoration = todo.completed ? "line-through":"";
    }

    textSpan.addEventListener('dblclick', ()=>{
        const newText = prompt("Edit todo", todo.text);

        if(newText !==null){
            todo.text=newText.trim();
            textSpan.textContent = todo.text
            saveTasks();
        }
    })

    const delBtn = document.createElement('button');
    delBtn.textContent = "Delete";

    delBtn.addEventListener("click", ()=>{
        todos.splice(index, 1);
        render();
        saveTasks();
    })

    li.appendChild(checkBox);
    li.appendChild(textSpan);
    li.appendChild(delBtn);
    return li;
}

function addTask(){
    const text = taskInput.value.trim();

    if(!text) return;

    todos.push({ text: text, completed: false });
    taskInput.value = '';
    render();
    saveTasks();
}


function render(){
    taskList.innerHTML = '';

    todos.forEach((todo, index) => {
        const node = createTodoNode(todo, index);
        taskList.appendChild(node);
        
    });
}

addBtn.addEventListener('click', addTask);

taskInput.addEventListener('keydown', (e)=>{
    if(e.key == 'Enter'){
        addTask();
    }
})

    render();