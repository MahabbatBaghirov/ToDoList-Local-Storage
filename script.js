let form = document.querySelector(".form");
let textInp = document.querySelector("#textInp");
let ul = document.querySelector("#ul");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    if (textInp.value.trim().length==0) {
        alert("Add to text!")
    }
    else {
        ul.innerHTML += `<li class="mb-2">
        <span>${textInp.value}</span>
        <div class="btns">
            <button class="btn1"><i class="fa-solid fa-check"></i></button>
            <button class="btn2"><i class="fa-solid fa-trash-can"></i></button>
        </div>
    </li>`
    };

    let doneBtn = document.querySelectorAll(".btn1");
    let deleteBtn = document.querySelectorAll(".btn2");

    doneBtn.forEach((item)=>{
        item.addEventListener("click",(e)=>{
            e.preventDefault();
            e.target.parentElement.previousElementSibling.style.textDecoration = "line-through"
        })
        // textInp.value = ""
    })

    deleteBtn.forEach((product)=>{
        product.addEventListener("click",(e)=>{
            e.preventDefault();
            e.target.parentElement.parentElement.parentElement.remove();
        })
        // textInp.value = ""
    })

     let toDoList=localStorageRead()
     toDoList.push(textInp.value)
     localStorage.setItem("todos",JSON.stringify(toDoList))

           textInp.value = ""

})


function localStorageRead(){
    let myToDos
    if(localStorage.getItem("todos")==null){
        myToDos=[]
    }
    else{
       myToDos=JSON.parse(localStorage.getItem("todos"))
    }
    return myToDos
}


window.addEventListener("load",()=>{
   let myToDos=JSON.parse(localStorage.getItem("todos"))
   myToDos.forEach((myToDo)=>{
    ul.innerHTML += `<li class="mb-2">
    <span>${myToDo}</span>
    <div class="btns">
        <button class="btn1"><i class="fa-solid fa-check"></i></button>
        <button class="btn2"><i class="fa-solid fa-trash-can"></i></button>
    </div>
</li>`
   })
})