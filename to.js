const todoList = [
   "Go to the gym",
   "Learn javascript",
   "complete the assignment",
   "Attend the ICP class",
"Go the sleep by 10:30",
];


const listcontainer = document.getElementById("list-container");

for (const task of todoList ) {
   listcontainer.innerHTML = listcontainer.innerHTML + '<div class="list-item">${task}</div>';

}




