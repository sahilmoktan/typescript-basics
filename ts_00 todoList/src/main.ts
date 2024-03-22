import { v4 as uuidv4 } from "uuid";

// console.log(uuidv4());

type Task ={
    id:string
    title:string
    completed:boolean
    createdAt:Date
}

const list = document.querySelector<HTMLUListElement>("#list")
const form = document.getElementById("new-task-form") as HTMLFormElement | null
const input = document.querySelector<HTMLInputElement>("#new-task-title")
const tasks: Task = [] = loadTasks()
tasks.forEach(addListItem)

// on above const list/form/input 
// ts says its and element or null so we give them <HTMLUListElement> 
// which makes ts specific 
// for form we use getElementById which returns something so can't define element like others


form?.addEventListener("submit", e=>{
    e.preventDefault()

    //"?" optional chaining used : input might be null so ? makes if something is there ok, if not then return undefine
    if (input?.value == ""|| input?.value == null) return

    const newTask: Task ={
        id: uuidv4(),
        title: input.value,
        completed: false,
        createdAt: new Date()
    }
    tasks.push(newTask)
    
    addListItem(newTask)
    input.value= ''
})


// ts is smart enouth that it understands we r passing li data in createElement and there should be li element in item
function addListItem(task:Task){
const item = document.createElement("li")
const label = document.createElement('label')
const CheckBox = document.createElement('input')
CheckBox.addEventListener('change',()=>{
    task.completed = CheckBox.checked
    saveTasks()
})
CheckBox.type= 'checkbox'
CheckBox.checked = task.completed
label.append(CheckBox, task.title)
item.append(label)
list?.append(item)
}


function saveTasks(){
    localStorage.setItem("TASKS", JSON.stringify(tasks))
}

function loadTasks(): Task[] {
    const taskJSON = localStorage.getItem("TASKS")
    if(taskJSON==null) return []
    return JSON.parse(taskJSON)
}