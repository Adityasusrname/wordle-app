import Square from "./Square";

function Keyboard(){
    return(
        <div>
            <div>

                <Square value="Q"/>
                <Square value="W"/>
                <Square value="E"/>
                <Square value="R"/>
                <Square value="T"/>
                <Square value="Y"/>
                <Square value="U"/>
                <Square value="I"/>
                <Square value="O"/>
                <Square value="P"/>

            </div>

            <div>

                <Square value="A"/>
                <Square value="S"/>
                <Square value="D"/>
                <Square value="F"/>
                <Square value="G"/>
                <Square value="H"/>
                <Square value="J"/>
                <Square value="K"/>
                <Square value="L"/>
                <Square className="clear" value="Clear"/>
              
            </div>

            <div>

                <Square value="Z"/>
                <Square value="X"/>
                <Square value="C"/>
                <Square value="V"/>
                <Square value="B"/>
                <Square value="N"/>
                <Square value="M"/>
                <Square className="enter" value="Enter"/>
              
            </div>

        </div>
    )
}

export default Keyboard;