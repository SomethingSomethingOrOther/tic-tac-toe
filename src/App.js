import './App.css';
import {useState} from "react"


const initialBoard=Array(9).fill(null)


function App() {
  const [board,setBoard] =useState(initialBoard)
  const [currentPlayer,setCurrentPlayer] = useState("X")
  

  const handleClick=(index)=>{
    if (!board[index]){
      const newBoard = [...board]
      newBoard[index] = currentPlayer
      setBoard(newBoard)
      setCurrentPlayer(currentPlayer === "X" ? "O":"X")
    }
  }

  const renderCell=(index)=>{
    return (
     <div className='cell' onClick={()=>handleClick(index)}>
        { board[index]}
    </div>
    )
  }

  const checkWinner=()=>{
    const winningCombos=[
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ]

    for (const combo of winningCombos){
      const [a,b,c] =combo

       if (board[a] && board[a] === board[b] && board[a] === board[c]){
        return board[a]
       }
    }
    return null
  }
    const winner= checkWinner()


    const rematch=()=>{
      setBoard(initialBoard)
      setCurrentPlayer("")
    }

  return (
    <div className="App">
      <div>
        <h1>
          Tic-tac-toe
        </h1>
        <div>
          
          <button onClick={rematch}>Rematch</button>
        </div>
      <div className="board">
        {
          board.map((value,index)=> renderCell(index))
}
        <div>
          {
            winner ? <p>{winner}</p>:null
          }
        </div>
      </div>
        
      </div>
     </div>
  );
}





export default App;
