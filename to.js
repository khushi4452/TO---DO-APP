const todoList = [];


const listcontainer = document.getElementById("list-container");

for (const task of todoList ) {
   listcontainer.innerHTML = 
   listcontainer.innerHTML + '<div class="list-item">${task}</div>';

}

function addTask() {
   const inputBox = document.getElementById("todo-input");
   const task = inputBox.value ;
   if(task){
      todoList.push(task);
      inputBox.value = "";
      loadList();
   }
   else {
      alert("please enter a task");
   }
}

function loadList(){
   listcontainer.innerHTML = "";

   for (let i = 0; 1 < todoList.length; i++ ) {
      const task = todoList (i);
      listcontainer.innerHTML = 
      listcontainer.innerHTML + '<div class="list-item"> ${task}  <span onclick ="RemoveTask(${i})"></span></div>';
   
}
  }

  function removeTask(index) {
   todoList.slice(index,1);
   loadList();
  }





