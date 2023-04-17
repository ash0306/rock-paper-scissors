import React, { useState } from 'react'
import './RPSComponent.css'
import { FaHandRock, FaHandPaper, FaHandScissors } from 'react-icons';

function RPSComponent() {
    const [userChoice,setUserChoice] = useState('User\'s Choice');
    const [compChoice,setCompChoice] = useState('Computer\'s Choice');
    const [winner,setWinner] = useState('None');
    const [computerWins,setComputerWins] = useState(0);
    const [userWins,setUserWins] = useState(0);
    const [userImage, setUserImage] = useState('user.png');
    const [compImage, setCompImage] = useState('computer.png');

    const ChoiceHandler = (e) => {
        // console.log("inside function");
        if(e.target.value === 'rock'){
            setUserChoice("rock")
            setUserImage("rock.png");
        }
        else if(e.target.value === 'paper'){
            setUserChoice("paper")
            setUserImage("paper.png");
        }
        else if(e.target.value === 'scissors'){
            setUserChoice("scissors")
            setUserImage("scissors.png");
        }
        ComputerChoice();
        result();
    }

    const ComputerChoice = () => {
        const randomNumber = Math.floor(Math.random() * 3);
        if(randomNumber === 0){
            setCompChoice("rock")
            setCompImage("rock.png");
        }
        else if(randomNumber === 1){
            setCompChoice("paper")
            setCompImage("paper.png");
        }
        else if(randomNumber === 2){
            setCompChoice("scissors")
            setCompImage("scissors.png");
        }
        
    }

    const result = () =>{
        console.log("inside result");
        if(userChoice === 'rock' && compChoice === 'paper'){
            setWinner('COMPUTER WINS');
            setComputerWins(computerWins + 1);
        }
        else if(userChoice === 'paper' && compChoice ==='scissors'){
            setWinner('COMPUTER WINS');
            setComputerWins(computerWins + 1);
        }
        else if(userChoice ==='scissors' && compChoice === 'rock'){
            setWinner('COMPUTER WINS');
            setComputerWins(computerWins + 1);
        }
        else if(userChoice === 'rock' && compChoice === 'scissors'){
            setWinner('USER WINS');
            setUserWins(userWins + 1);
        }
        else if(userChoice === 'paper' && compChoice === 'rock'){
            setWinner('USER WINS');
            setUserWins(userWins + 1);
        }
        else if(userChoice ==='scissors' && compChoice === 'paper'){
            setWinner('USER WINS');
            setUserWins(userWins + 1);
        }
        else if(userChoice === compChoice){
            setWinner('DRAW')
        }
    }

  return (
    <React.Fragment>
        <div className='score'>
            <p>User wins:{userWins}</p>
            <p>Computer wins:{computerWins}</p><br/>
            <hr/>
        </div>
        <div className='computer'>
            <h1>COMPUTER</h1>
            <p>{compChoice}</p>
            <img src={compImage} alt='computer'/>
        </div>



        <div className='user'>
            <h1>USER</h1>
            <div className='user-display'>
                <p>{userChoice}</p>
                <img src={userImage} alt='user'/>
            </div>
            <div className='user-choice'>
                <button onClick={ChoiceHandler} value={'rock'}>Rock</button>
                <button onClick={ChoiceHandler} value={'paper'}>Paper</button>
                <button onClick={ChoiceHandler} value={'scissors'}>Scissors</button>
            </div>
        </div>
        <div className='result'>
            <h1>{winner}</h1>
        </div>
    </React.Fragment>
  )
}

export default RPSComponent