document.addEventListener("DOMContentLoaded", function ()
{
	solveTask1();
	solveTask2();
	solveTask3();
	solveTask4();
	solveTask5();
	solveTask6();
	solveTask7();
	solveTask8();
	solveTask9();
});
 
// Change the inner text of an element.
function solveTask1() {
	document.getElementById("task1").innerText = "Changed using 'innerText'."; 
} 

// Nest a button
function solveTask2() {
    document.getElementById("task2").innerHTML = "<button>Submit</button>";
}

// Set body background color.
function solveTask3() {
    document.body.style.background = "#232323";
}

// Give style to list items.
function solveTask4() {
	document.querySelectorAll(".item").forEach(item =>
        {
            item.style.border = "2px solid black";
        });
}

// set href attribute
function solveTask5() {
    // I tried this below. From MDN docs. Also works.
	// document.getElementById("task5").setAttribute("href","https://www.springboard.com/");
    document.getElementById("task5").href ='https://www.springboard.com/';
}

// Set user input field value.
function solveTask6() {
    document.getElementById("task6").value = "DOM Master";
}

// Create a new class element.
function solveTask7() {
    document.getElementById("task7").classList.add("new-class");
}

// Nest a button after a div.
function solveTask8() {
    const newButton = document.createElement("button");
    const task8Element = document.getElementById("task8");
    task8Element.append(newButton)
}

// Remove a nested element.
function solveTask9() {
	const task9Element = document.getElementById("task9");
	task9Element.parentNode.removeChild(task9Element);

}
