const todoList =["Go to the Gym","Learn Javascript ","complete the Assignment","Attend the ICP class"];

const listcontainer = document.getElementById("list-container");
for (const task of todoList){
   listcontainer.innerHTML =  listcontainer.innerHTML + ' <div class="list-item">$(task)</div>';
   
}



