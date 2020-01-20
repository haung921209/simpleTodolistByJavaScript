"use strict";

(function() {
  var button = document.getElementById("addTodoButton");
  var textInput = document.getElementById("textInput");
  var list = document.getElementById("todoList");

  var totalView=document.getElementById("total").addEventListener ("click",changeView);
  var finishedView=document.getElementById("finished").addEventListener ("click",changeView);
  var unfinishedView=document.getElementById("unfinished").addEventListener ("click",changeView);
  button.addEventListener("click", addTodo);
  function addTodo() {
    var li;
    if (textInput.value != "") {
      li = newTodo(textInput.value);
      textInput.value = "";
      list.appendChild(li);
      updateCounter();
    }
  }
document.getElementById('counter').addEventListener('click',function(ev){
    switch(ev.target.id){
        case 'finished':
            list.className='hideIncomplete';
            break;
        case 'unfinished':
            list.className='hideComplete';
            break;
        default:
            list.className='';
    }
})
 






  function newTodo(text) {
    var li;

    li = document.createElement("li");
    li.innerHTML =
      '<input type = "checkbox"/>' + text + "<button>삭제</button>";

    li.addEventListener(
      "click",
      function(ev) {
        var input = this.getElementsByTagName("input")[0];
        //효율성을 원한다면 closure!.....
        if (ev.target.tagName !== "INPUT"&&ev.target.tagName !=="BUTTON") {
          //혹은 =='LI'
          input.checked = !input.checked;
        }
        li.className = input.checked ? "complete" : "";

        updateCounter();
      },
      false
    );

    li.getElementsByTagName('button')[0].addEventListener('click', (ev) => {
        ev.stopPropagation();
        list.removeChild(li);
        //li.parentNode.removeChild(li);
        updateCounter();
    }, false);

    return li;
  }



  function changeView(){
      
      
    

  }
 

  function updateCounter() {
    var totalCounter = document.querySelectorAll("li").length;
    var completeCounter = document.querySelectorAll(".complete").length;
    var incompleteCounter = totalCounter - completeCounter;

    document.querySelector("#total").textContent = "전체 : " + totalCounter;
    document.querySelector("#unfinished").textContent =
      "미완료 : " + incompleteCounter;
    document.querySelector("#finished").textContent =
      "완료 : " + completeCounter;
  }
})();
