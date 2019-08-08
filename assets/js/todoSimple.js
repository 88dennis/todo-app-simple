let toDoInput = document.querySelector("input")
let listDisplay = document.querySelector("#listContainer")
let toDosArr = [];
let listOfTodos = [];
let showInputField = document.querySelector(".fa-plus");

showInputField.addEventListener("click", function() {
    toDoInput.classList.toggle("showInputField");
})

// function clearField() {
//     toDoInput.addEventListener("keypress", function(event) {
//         if (event.which === 13) {
//             toDoInput.value = ""
//             console.log(toDoInput.value, "dennisisisisisi")
//         }
//     })
// }

toDoInput.addEventListener("keypress", function(event) {
    if (event.which === 13) {
        toDosArr.unshift(toDoInput.value);
        console.log(toDosArr)
        let text = "<ul>"
        for (i = 0; i < toDosArr.length; i++) {
            text = text + '<li class="hell">' + '<span class="removeBtn"><i class="fas fa-trash-alt"></i></span><span class="textTodo">' + toDosArr[i] + ' </span></li>'
        }
        text = text + "</ul>"
        listDisplay.innerHTML = text;
        listOfTodos = document.querySelectorAll(".hell");
        toDoInput.value = "";
        console.log(listOfTodos);
        let removeBtn = document.querySelectorAll(".removeBtn");
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
                let fadeTarget = this.parentNode;
                console.log(fadeTarget)
                let fadeEffect = setInterval(function() {
                    if (!fadeTarget.style.opacity) {
                        fadeTarget.style.opacity = 1;
                    }
                    if (fadeTarget.style.opacity > 0) {
                        fadeTarget.style.opacity -= 0.1;
                    } else {
                        clearInterval(fadeEffect);
                    }
                }, 50);
                setInterval(function() {
                    fadeTarget.remove();
                }, 500)
                console.log(fadeTarget)
                event.stopPropagation();
                console.log(toDosArr)
            })
        }
        // for (i = 0; i < listOfTodos.length; i++) {
        //     listOfTodos[i].addEventListener("click", function(event) {
        //         this.classList.toggle("clickedToDo");
        //         event.stopPropagation();
        //     })
        // }
    }
})

// toDoInput.addEventListener("keypress")



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