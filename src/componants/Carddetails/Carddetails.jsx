import './Carddetails.css'
import iconimg from '../../assets/images/icon-ellipsis.svg'
function Carddetails(params){
    
    return(
        <div id="card" style={{backgroundColor:params.cardcolor ,backgroundImage:`url(${params.cardlogo})`, backgroundRepeat:'no-repeat',backgroundPositionY:'top',backgroundPositionX:'right'}}>
            <div id='details'>
                <div id='cardname'>
                    <label id='name'>{params.cardname}</label>
                    <img src={iconimg}/>
                </div>
                <div id='timedate'>
                <h1 >{params.cardtime}</h1>
                <label id='date'>{params.carddate}</label>
                </div>
            </div>
        </div>
    )
}
export default Carddetails