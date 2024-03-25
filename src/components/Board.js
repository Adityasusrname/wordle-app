import Square from "./Square";

function Board(){
    return (
        <div className="board">

            <div>
                <Square/>
                <Square/>
                <Square/>
                <Square/>
                <Square/>
            </div>

            <div>
                <Square/>
                <Square/>
                <Square/>
                <Square/>
                <Square/>
            </div>

            <div>
                <Square/>
                <Square/>
                <Square/>
                <Square/>
                <Square/>
            </div>
          
            <div>
                <Square/>
                <Square/>
                <Square/>
                <Square/>
                <Square/>
            </div>

            <div>
                <Square/>
                <Square/>
                <Square/>
                <Square/>
                <Square/>
            </div>

           
        </div>
    )
}

export default Board;