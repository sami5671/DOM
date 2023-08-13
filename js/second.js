//1. where to add
const secondList = document.getElementById("second-list");

//2. what to add
const li = document.createElement("li");
li.innerText = "My dynamic item";

//3. add the child
secondList.appendChild(li);
