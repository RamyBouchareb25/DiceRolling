import Dice from "./Dice.jsx";
import "./RollDice.css";
import { useState } from "react";

let number1 = 0,
  number2 = 1;
function RollDice() {
  const [Rolling, SetRolling] = useState("");
  let buttonText = "Roll Dice !!" 
  if (Rolling == "animate")buttonText = "Rolling ..." 
  else buttonText = "Roll Dice !!"
  
  return (
    <div className="rollDice">
      <Dice num1={number1} num2={number2} animationState={Rolling} />
      <button
        onClick={() => {if(Rolling == ""){
          setTimeout(() => {
            SetRolling("");
          }, 1000);
          SetRolling("animate");
          number1 = Math.floor(Math.random() * 6);
          number2 = Math.floor(Math.random() * 6);
        }}}
      >
        {buttonText}
      </button>
    </div>
  );
}
export default RollDice;
