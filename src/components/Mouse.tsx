
import MouseContainer from '../assets/mouse_container.svg';
import MouseButton from '../assets/mouse_button.svg'
import "../css/Mouse.css"

export const Mouse=()=>{
    return <div id={"mouse_container"}>
        <img src={MouseContainer}>
        </img>
        <img id={"mouse_button"} style={{position:'absolute'}} src={MouseButton}/>
    </div>
}
