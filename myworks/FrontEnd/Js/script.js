var shoppingList = document.querySelector("#shopping_list ");
var orange = document.querySelector("#orange ");
shoppingList.removeChild(orange);
/*var grape = document.createElement("li ");
grape.textContent = "grape ";
shoppingList.appendChild(grape);
var heading = document.querySelector("h1 ");
heading.textContent = "Buy the following: ";
heading.style.color = "red ";
    var x = "blue ";
switch (x) {
    case "blue ":
        document.write("blue ");
        break;
    case "red ":
        document.write("red ");
        break;
    case "yellow ":
        document.write("yellow ");
        break;
    default:
        document.write("black ");
}
*/
document.querySelectorAll("li ").forEach(function(li) {
    li.addEventListener('click', function(e) {
        if (e.target.className === "completed ") {
            e.target.className = " ";
        } else {
            e.target.className = "completed ";
        }
    })
});
var from = document.querySelector("form");

function addListItem(e) {
    e.preventDefault();
    var input = document.getElementById("newItem");
    var listItem = document.createElement("li");
    listItem.textContent = input.value;
    var list = document.querySelector("ul");
    list.appendChild(listItem);
}
from.addEventListener("submit", addListItem);