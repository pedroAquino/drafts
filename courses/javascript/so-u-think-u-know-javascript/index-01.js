var people = ["João", "Maria", "José"];
var list = document.getElementById("people-list");

for (var i = 0; i<people.length; i++) {
    var person = people[i];
    
    var element = document.createElement("li");
    element.addEventListener("click", function() {
        alert("You cliked on " + person + " at index " + i);
    });

    element.innerText = person;

    list.appendChild(element);
}