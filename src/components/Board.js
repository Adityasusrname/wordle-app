import Square from "./Square";

function Board(props){
     var words=props.value
    return (
        <div className="board">

            <div className="boardRow">
                <Square value={words[0]}/>
                <Square value={words[1]}/>
                <Square value={words[2]}/>
                <Square value={words[3]}/>
                <Square  value={words[4]}/>
            </div>

            <div className="boardRow">
                <Square value={words[5]}/>
                <Square value={words[6]}/>
                <Square value={words[7]}/>
                <Square value={words[8]}/>
                <Square  value={words[9]}/>
            </div>

            <div className="boardRow">
                <Square value={words[10]}/>
                <Square value={words[11]}/>
                <Square value={words[12]}/>
                <Square value={words[13]}/>
                <Square  value={words[14]}/>
            </div>
          
            <div className="boardRow">
               <Square value={words[15]}/>
                <Square value={words[16]}/>
                <Square value={words[17]}/>
                <Square value={words[18]}/>
                <Square  value={words[19]}/>
            </div>

            <div className="boardRow">
                <Square value={words[20]}/>
                <Square value={words[21]}/>
                <Square value={words[22]}/>
                <Square value={words[23]}/>
                <Square  value={words[24]}/>
            </div>

           
        </div>
    )
}

export default Board;