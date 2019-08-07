//check by clicking
// $("li").click(function() {
//     if ($(this).css("color") === "rgb(128, 128, 128)") {
//         $(this).css("color", "black")
//         $(this).css("text-decoration", "none")
//     } else {
//         $(this).css({
//             color: "gray",
//             textDecoration: "line-through"
//         })
//     }
// })

// let toDoInput = document.querySelector("input")
// let listDisplay = document.querySelector("#listContainer")
// let toDosArr = [];

// toDoInput.addEventListener("change", function() {

//     let newTodo = toDoInput.value;
//     toDosArr.push(newTodo)
//     let text = "<ul class='ulClass'/>"
//     for (let i = 0; i < toDosArr.length; i++) {
//         let del = "<li class='liClass'>" + "<button>X</button>" + toDosArr[i] + "</li >"
//         text = text + del
//         console.log(del)
//     }
//     text = text + "</ul>"
//     listDisplay.innerHTML = text;

//     console.log(toDosArr)
// })

// let toDoItems = document.querySelectorAll(".liClass")
// for (let i = 0; toDoItems.length; i++) {
//     toDoItems[i].addEventListener("mouseover", function() {
//         this.style.color = "red"
//     })
// }


let toDoInput = document.querySelector("input")
let listDisplay = document.querySelector("#listContainer")
let toDosArr = [];
let listOfTodos = [];

toDoInput.addEventListener("change", function() {
    let newTodo = toDoInput.value;
    toDosArr.unshift(newTodo)
    console.log(toDosArr)
    let text = "<ul>"

    for (i = 0; i < toDosArr.length; i++) {
        text = text + '<li class="hell">' + '<span class="removeBtn">x </span><span class="textTodo">' + toDosArr[i] + ' </span></li>'
    }
    text = text + "</ul>"
    listDisplay.innerHTML = text;
    listOfTodos = document.querySelectorAll(".hell")
    console.log(listOfTodos)
    let removeBtn = document.querySelectorAll(".removeBtn")

    for (i = 0; i < removeBtn.length; i++) {
        removeBtn[i].addEventListener("click", function() {
            console.log(removeBtn)
            this.style.color = "blue"
            toDoItem = this.nextSibling.innerText;
            console.log(toDoItem)
            let index = toDosArr.indexOf(toDoItem);
            console.log(index)
            if (index > -1) {
                toDosArr.splice(index, 1);
            }

            this.parentNode.remove();
            event.stopPropagation();
            // toDosArr.pop()
            console.log(toDosArr)



            //     // this.parentNode.style.display = "none";
            // 
            // 
            //
            // console.log(index, toDoItem)

            // console.log(toDosArr);


        })
    }

    // function spliceThis() {

    // }



    // for (i = 0; i < listOfTodos.length; i++) {
    //     listOfTodos[i].addEventListener("click", function(event) {
    //         this.classList.toggle("clickedToDo");
    //         event.stopPropagation();
    //     })
    // }

})



// array = [2, 9]

// let body = document.querySelector("body")
// let isBackground = false;

// setInterval(function() {
//     if (isBackground) {
//         body.style.background = "white"
//         isBackground = false
//     } else {
//         body.style.background = "cyan"
//         isBackground = true
//     }
// }, 3000)

//JS MANUAL TOGGLE
// let listOfTodos = document.querySelectorAll(".listOfTodos")

// for (i = 0; i < listOfTodos.length; i++) {
//     listOfTodos[i].style.color = "green"

//     listOfTodos[i].addEventListener("click", function() {
//         if (this.style.color === "green") {
//             this.style.color = "red"
//             console.log(this.classList)
//             console.log(this.style.color)
//         } else {
//             this.style.color = "green"
//         }
//     })
// }

//JS TOGGLE
// let listOfTodos = document.querySelectorAll(".listOfTodos")
// for (i = 0; i < listOfTodos.length; i++) {

//     listOfTodos[i].addEventListener("click", function() {
//         this.classList.toggle("done")
//     })
// }