import React, { useState } from 'react'
import './RPSComponent.css'

function RPSComponent() {
    const [userChoice,setUserChoice] = useState('User\'s Choice');
    const [compChoice,setCompChoice] = useState('Computer\'s Choice');
    const [winner,setWinner] = useState('None');
    const [computerWins,setComputerWins] = useState(0);
    const [userWins,setUserWins] = useState(0);

    const ChoiceHandler = (e) => {
        // console.log("inside function");
        if(e.target.value === 'rock'){
            setUserChoice("rock")
        }
        else if(e.target.value === 'paper'){
            setUserChoice("paper")
        }
        else if(e.target.value === 'scissors'){
            setUserChoice("scissors")
        }
        ComputerChoice();
        result();
    }

    const ComputerChoice = () => {
        const randomNumber = Math.floor(Math.random() * 3);
        if(randomNumber === 0){
            setCompChoice("rock")
        }
        else if(randomNumber === 1){
            setCompChoice("paper")
        }
        else if(randomNumber === 2){
            setCompChoice("scissors")
        }
        
    }

    const result = () =>{
        console.log("inside result");
        if(userChoice === 'rock' && compChoice === 'paper'){
            setWinner('Computer wins');
            setComputerWins(computerWins + 1);
        }
        else if(userChoice === 'paper' && compChoice ==='scissors'){
            setWinner('Computer wins');
            setComputerWins(computerWins + 1);
        }
        else if(userChoice ==='scissors' && compChoice === 'rock'){
            setWinner('Computer wins');
            setComputerWins(computerWins + 1);
        }
        else if(userChoice === 'rock' && compChoice === 'scissors'){
            setWinner('User wins');
            setUserWins(userWins + 1);
        }
        else if(userChoice === 'paper' && compChoice === 'rock'){
            setWinner('User wins');
            setUserWins(userWins + 1);
        }
        else if(userChoice ==='scissors' && compChoice === 'paper'){
            setWinner('User wins');
            setUserWins(userWins + 1);
        }
        else if(userChoice === compChoice){
            setWinner('Draw')
        }
    }

  return (
    <React.Fragment>
        <div className='score'>
            <p>User wins:{userWins}</p>
            <p>Computer wins:{computerWins}</p><br/>
        </div>
        <div className='computer'>
            <h1>Computer side</h1>
            <p>{compChoice}</p>
        </div>



        <div className='user'>
            <h1>User side</h1>
            <div className='user-display'>
                <p>{userChoice}</p>
            </div>
            <div className='user-choice'>
                <button onClick={ChoiceHandler} value={'rock'}>Rock</button>
                <button onClick={ChoiceHandler} value={'paper'}>Paper</button>
                <button onClick={ChoiceHandler} value={'scissors'}>Scissors</button>
            </div>
        </div>
        <div className='result'>
            <h3>{winner}</h3>
        </div>
    </React.Fragment>
  )
}

export default RPSComponent