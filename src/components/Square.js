function Square(props){
    if(props.className ==null)
   {
    if(props.onSquareClick == null)
    return(<button className="square">{props.value}</button>)
    else
    return(<button className="square" onClick={props.onSquareClick}>{props.value}</button>)

   }
        
else
{
    if(props.onSquareClick == null)
    return (<button className={props.className}>{props.value}</button>)
    else
    return (<button className={props.className} onClick={props.onSquareClick}>{props.value}</button>)
}
}

export default Square;