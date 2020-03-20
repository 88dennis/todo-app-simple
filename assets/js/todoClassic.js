
let toDosArr = [];
let toDoCont = document.getElementById("toDoCont");
let doneItem = document.getElementById("doneItem");
let input = document.getElementById("input");
let toDoInput;
let newArr = [];

input.addEventListener("change", function(){
    toDoInput = input.value;
    toDosArr.push(toDoInput);
    console.log(toDosArr)
    let text = "<ul> Click on your item if done: <br>"
    for (let i = 0; i < toDosArr.length; i++) {
        text += '<li class="toDoItems">' + toDosArr[i] + "</li>";
      }
      text += "</ul>";
      toDoCont.innerHTML = text;
      let lis = document.querySelectorAll(".toDoItems");
      for(let i = 0; i < lis.length; i++) {
          console.log(lis[i]);
          lis[i].addEventListener("click", function(){
            this.style.color = "red";
            let todoItem = this.textContent;
            console.log(todoItem);
            newArr.push(todoItem)
            console.log(newArr);
            let text2 = "<ul> DONE: <br>"
            for (let j = 0; j < newArr.length; j++) {
                text2 += "<li>" + newArr[j] + "</li>";
              }
              text2 += "</ul>";
              doneItem.innerHTML = text2;
              let index = toDosArr.indexOf(todoItem);
              console.log(index);
              if (index > -1) {
                toDosArr.splice(index, 1);
            }
            console.log(toDosArr, "Sasdasdadasd")
            this.style.display = "none";
          })
      }
})

