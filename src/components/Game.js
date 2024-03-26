import Board from "./Board";
import Square from "./Square";
import { useState } from "react";

function Game(){
    const [words,setWords] = useState(Array(25).fill(null))
    const [index,setIndex] = useState(0)

    function handleClick(value){
        const nextWords = words.slice()
        nextWords[index] = value
        const nextIndex = index + 1;
        setIndex(nextIndex)
        setWords(nextWords)
    }

    return(
        <div>
            <Board value={words}/>
            <br/>
            <div>

                <Square value="Q" onSquareClick={()=>handleClick('Q')}/>
                <Square value="W" onSquareClick={()=>handleClick('W')}/>
                <Square value="E" onSquareClick={()=>handleClick('E')}/>
                <Square value="R" onSquareClick={()=>handleClick('R')}/>
                <Square value="T" onSquareClick={()=>handleClick('T')}/>
                <Square value="Y" onSquareClick={()=>handleClick('Y')}/>
                <Square value="U" onSquareClick={()=>handleClick('U')}/>
                <Square value="I" onSquareClick={()=>handleClick('I')}/>
                <Square value="O" onSquareClick={()=>handleClick('O')}/>
                <Square value="P" onSquareClick={()=>handleClick('P')}/>

            </div>

            <div>

                <Square value="A" onSquareClick={()=>handleClick('A')}/>
                <Square value="S" onSquareClick={()=>handleClick('S')}/>
                <Square value="D" onSquareClick={()=>handleClick('D')}/>
                <Square value="F" onSquareClick={()=>handleClick('F')}/>
                <Square value="G" onSquareClick={()=>handleClick('G')}/>
                <Square value="H" onSquareClick={()=>handleClick('H')}/>
                <Square value="J" onSquareClick={()=>handleClick('J')}/>
                <Square value="K" onSquareClick={()=>handleClick('K')}/>
                <Square value="L" onSquareClick={()=>handleClick('L')}/>
                <Square className="clear" value="Clear"/>
              
            </div>

            <div>

                <Square value="Z" onSquareClick={()=>handleClick('Z')}/>
                <Square value="X" onSquareClick={()=>handleClick('X')}/>
                <Square value="C" onSquareClick={()=>handleClick('C')}/>
                <Square value="V" onSquareClick={()=>handleClick('V')}/>
                <Square value="B" onSquareClick={()=>handleClick('B')}/>
                <Square value="N" onSquareClick={()=>handleClick('N')}/>
                <Square value="M" onSquareClick={()=>handleClick('M')}/>
                <Square className="enter" value="Enter"/>
              
            </div>

        </div>
    )
}



export default Game;