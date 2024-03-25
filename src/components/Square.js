function Square(props){
    if(props.className == null)
    return (

        <button className="square">{props.value}</button>
)
else
return (
    <button className={props.className}>{props.value}</button>
)
}

export default Square;