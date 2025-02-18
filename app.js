/*-------------------------------- Constants --------------------------------*/

//selecting numbers - Event Listener
// const buttons = document.querySelectorAll('.button');
// buttons.forEach((button) => {
//     button.addEventListener('click', (event) => {
//         console.log(event.target.innerText);
//     })
// })

//Event delegation
const calculator = document.querySelector('#calculator');
calculator.addEventListener('click', (event) =>{
    if(event.target.classList.contains('number')){
        console.log(event.target.innerText);
    } else if(event.target.innerText ){
        console.log(event.target.innerText);
    } 
    
})

//plan:
//1) Create Variables to store values- currentInput, previousInput, operator
//2) Handle Button Clicks
//3) Handle Operator Button Clicks
//4) Handle Equals (=) Button
//5) Handle Clear (C) Button
//6) Update Display

/*-------------------------------- Variables --------------------------------*/



/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/
