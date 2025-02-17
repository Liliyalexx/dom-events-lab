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
    } else if(event.target.innerText === '*' || event.target.innerText === '/' || event.target.innerText === '-' || event.target.innerText === '+'){
        console.log(event.target.innerText);
    } 
    
})



/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/
