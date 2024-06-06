// User click + , number should increase by one
const increaseButtonEl = document.querySelector('.counter__button--increase')
const decreaseButtonEl = document.querySelector('.counter__button--decrease')
const counterValueEl = document.querySelector('.counter__value')
const resetButtonEl = document.querySelector('.counter__reset-button')
const counterEl = document.querySelector('.counter')
const couterTitleEl = document.querySelector('.counter__title')



const incrementCounter = ()  =>{
    
    //get current value of counter
    const cureentValue = counterValueEl.textContent;

    //convert value to number type
    const currentValueAsNumvber = +cureentValue

    // incremet by 1 
    let newValue = currentValueAsNumvber + 1

    //check if new value is greater than 5
    if(newValue > 5){
        //if it is, force it to be 5 instead
        newValue = 5;
        
        //give visual indicator that limt has been reached
        counterEl.classList.add('counter-color') 

        //update counter title to say limit
        couterTitleEl.innerHTML = 'Limit! Buy <b>Pro</b> for > 5 '

        // disable increase and decrease buttons
        increaseButtonEl.disabled = true
        decreaseButtonEl.disabled = true
    }

    // set counter element with new value
    counterValueEl.textContent = newValue

    //unfocus(blur) reset button
    increaseButtonEl.blur()
}



const decrementCounter = () => {
    // Get the current value of counter
    const currentValue = counterValueEl.textContent
    console.log(currentValue);

    // convert value to number type
    const currentValueAsNumber = +currentValue;

    //decrement by 1
    let newValue = currentValueAsNumber - 1

    //check if new value is less than 0
    if(newValue < 0 ){
        //if it is, force it to be 0 instead
        newValue = 0
    }

    //update counter value with new value
    counterValueEl.textContent = newValue;

    //unfocus(blur) reset button
    decreaseButtonEl.blur()
}

const resetbtn = () => {
    // set counter value to 0
    counterValueEl.textContent = 0;

    // reset backbround color
    counterEl.classList.remove('counter-color')

    //reset counter title
    couterTitleEl.textContent = 'Fancy Counter'

    //enable increase and decrease buttons
    increaseButtonEl.disabled = false;
    decreaseButtonEl.disabled = false;

    //unfocus(blur) reset button
    resetButtonEl.blur()
}



resetButtonEl.addEventListener('click', resetbtn)
increaseButtonEl.addEventListener('click', incrementCounter)
increaseButtonEl.addEventListener('keydown', incrementCounter)
decreaseButtonEl.addEventListener('click', decrementCounter)
decreaseButtonEl.addEventListener('keydown', decrementCounter)