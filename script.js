 // 1 - Getting the HTML element
 
 let input = document.getElementById('myInput')
 let addBtn = document.querySelector('.addBtn')
 let list = document.getElementById('myUL')

 // 2 - Create the addTodo function
 
 function addTodo(){
     // 3 - Get the input value
    let text= document.createTextNode(input.value)
    //4- create the li 
    let li = document.createElement("li")
    //5- add the text to li
    li.appendChild(text)
    // li.innerHTML=input.value
    //6- add the li to ul
    if(input.value){
        list.appendChild(li)
    }else{alert('Please enter a todo text')}
    //7- Clear the input
    input.value=''
    //8- Create the button remove
    let removeBtn = document.createElement('button')
    //9- Add a value to the remove button
    removeBtn.innerText="X"
    //10- add the removeBtn to li
    li.appendChild(removeBtn)
    //11- remove button event listener
    removeBtn.addEventListener('click', function(){
        removeBtn.parentElement.remove()
    })

    //12- give the remove button a class
    removeBtn.setAttribute('class', 'removeBtn')
    //13- styling the li on hover
    li.addEventListener('mouseover', function(){
        li.style.backgroundColor='rgb(173, 173, 173)'
    })
    li.addEventListener('mouseout', function(){
        li.style.backgroundColor='lightgray'
    })
    li.addEventListener('click', function(){
        if(li.style.textDecoration==='line-through'){
            li.style.textDecoration='none'
        }
        else{
            li.style.textDecoration='line-through'
        }
    })
 }

 addBtn.addEventListener('click', addTodo)