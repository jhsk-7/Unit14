// Step 1 - to run your code after the DOM is loaded, wrap it with a callback function of an event listener 
document.addEventListener('DOMContentLoaded', function() {

    // Step 2
    const boxContainer = document.querySelector("#box-container");
    const newBoxButton = document.querySelector("#new-box-button");
    const colorForm = document.querySelector("#color-form");
    const colorInput = document.querySelector("#color-input");

    // Step 3
    let boxColor = null;
    let boxCounter = 0;

    // Step 5
    function addNewBox() {
        const box = document.createElement("div");
        box.setAttribute("data-box-id", boxCounter.toString());     
        box.textContent = `Box ${boxCounter}`; 
        box.className = "box";
        box.style.backgroundColor = boxColor;
        boxContainer.appendChild(box);

        boxCounter++;
    };

    // Step 4
    colorForm.addEventListener("submit", function(event) {
        
        event.preventDefault();

        const boxes = document.querySelectorAll(".box");
    
        currentColor = colorInput.value.trim();
        
        for (let box of boxes){
            box.style.backgroundColor = currentColor;
        }

        colorInput.value = "";
        boxColor = currentColor;
    });

    // Step 6
    newBoxButton.addEventListener("click",function(event) {
        addNewBox();
    });

    // Step 7
    document.addEventListener("dblclick", function(event) {

        // if (event.target.attributes.class.value === "box"){
        if (event.target.classList.contains("box")) {
            event.target.remove();
        }
    });

    // Step 8
    document.addEventListener("mouseover", function(event) {

        if (event.target.classList.contains("box")){
            console.log(event);
            event.target.textContent = `x: ${event.pageX}, y: ${event.pageY}`;
        }
    });

    // Step 9
    document.addEventListener("mouseout", function(event){
        if (event.target.classList.contains("box")){
            // event.target.textContent = event.target.attributes.data-box-id.value;
            event.target.textContent = `Box ${event.target.getAttribute("data-box-id")}`;
        }
    });

    // Step 10
    document.addEventListener("keypress", function(event){
        // console.log(event)
        if (event.key === "N" || event.key === "n"){
            addNewBox()
        }
    });

})
