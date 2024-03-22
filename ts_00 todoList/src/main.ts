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
    
    addListItem(newTask)
})


// ts is smart enouth that it understands we r passing li data in createElement and there should be li element in item
function addListItem(task:Task){
const item = document.createElement("li")
const label = document.createElement('label')
const CheckBox = document.createElement('input')
CheckBox.type= 'checkbox'
label.append(CheckBox, task.title)
item.append(label)
list?.append(item)
}