import './Dice.css'


let number1 = 0 ,number2 = 2;
function Dice({num1,num2,animationState}) {
    switch (num1) {
        case 0:
            number1="one"
            break;
        case 1:
            number1="two"
            break;
        case 2:
            number1="three"
            break;
        case 3:
            number1="four"
            break;
        case 4:
            number1="five"
            break;
        case 5:
            number1="six"
            break;
    }
    switch (num2) {
        case 0:
            number2="one"
            break;
        case 1:
            number2="two"
            break;
        case 2:
            number2="three"
            break;
        case 3:
            number2="four"
            break;
        case 4:
            number2="five"
            break;
        case 5:
            number2="six"
            break;
    }
    const dice1 = `fa-solid fa-dice-${number1} dice ` + animationState
    const dice2 = `fa-solid fa-dice-${number2} dice ` + animationState
    return(
        <div className='Parent'>
            <i className={dice1}></i>
            <i className={dice2}></i>
        </div>
    )
}
export default Dice;