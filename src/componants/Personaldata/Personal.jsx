import './Personal.css'
import personalimg from '../../assets/images/image-jeremy.png'

function Personaldata(){
    return(
        <div id="personaldata">
            <div id="data">
                <img id='personalimg' src={personalimg}/>
                <label>Report for<br/><span>Jeremy<br/>Robson</span></label>
            </div>
            <div id='cardtime'>
            <label className='times'>Daily</label>
            <label className='times' id='weekly'>Weekly</label>
            <label className='times'>Monthly</label>
            </div>

        </div>
    )
}export default Personaldata