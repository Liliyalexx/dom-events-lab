/*-------------------------------- Constants --------------------------------*/

//selecting numbers - Event Listener
// const buttons = document.querySelectorAll('.button');
// buttons.forEach((button) => {
//     button.addEventListener('click', (event) => {
//         console.log(event.target.innerText);
//     })
// })

//Event delegation
// const calculator = document.querySelector('#calculator');
// calculator.addEventListener('click', (event) =>{
//     if(event.target.classList.contains('number')){
//         console.log(event.target.innerText);
//     } else if(event.target.innerText ){
//         console.log(event.target.innerText);
//     } 
    
// })

//plan:
//1) Create Variables to store values- currentInput, previousInput, operator
//2 Cached Element Refence
//3) EventListener
//4) create updateDisplay function for Display
//5) Handle Button Clicks
//6) Handle Operator Button Clicks
//7) Handle Equals (=) Button
//8) Handle reset (C) Button
//9) Update Display
//10 resetCalculator function

/*-------------------------------- Variables --------------------------------*/
let currentInput = "";
let previous = "";
let operator = "";



/*------------------------ Cached Element References ------------------------*/
const display = document.querySelector('.display');
const calculator = document.querySelector('#calculator');
/*----------------------------- Event Listeners -----------------------------*/

calculator.addEventListener("click", handleButtonClick);

/*-------------------------------- Functions --------------------------------*/
function updateDisplay(value){
    display.innerText  = value;
}
//helper function for "C" reset button
function resetCalculator(){
    currentInput = "";
    previousInput = "";
    operator = "";
    updateDisplay("0")

}

// Handle Button Clicks

function handleButtonClick(event) {
    const clicked = event.target.innerText;

    //valid button
    if (!event.target.classList.contains("button")) return;
    
    //number buttons
    if (event.target.classList.contains('number')){
        currentInput += clicked;
        updateDisplay(currentInput);
        console.log(currentInput)
    }
    //handle operators buttons(+, -, *, /)

    if (event.target.classList.contains("operator")){
        if(currentInput==="") return;
        operator = clicked;
        previousInput = currentInput;
        currentInput = "";
        console.log(currentInput);
    }
    if (clicked === "="){
        makeCalculation();
    }
     //reset calculator if "C" clicked
    if(clicked === "C"){
        resetCalculator();
    }
}
    function makeCalculation(){
        let total;
        const num1= parseFloat(previousInput);
        const num2 = parseFloat(currentInput);

        if(isNaN(num1) || isNaN(num2)) return;

        switch(operator){
            case "+":
                total =  num1 + num2
                break;
            case "-":
                total =  num1 - num2
                break;
            case "*":
                total =  num1 * num2
                break;
            case "/":
                total =  num2 != 0 ? num2 / num1 : Error; 
                 break;
            default:
                return;
        }

        updateDisplay(total);
            currentInput = total.toString();
            previousInput = "";
            operator = "";
        

   
    }
