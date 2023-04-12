import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faBatteryEmpty, faSignal } from '@fortawesome/free-solid-svg-icons'
import { createContext } from 'react';


const level = createContext(1)



function Bar(){
    return (
        <>
        <div id="statusBar">
            <div id="leftBar">
                <p>8:24</p>
                <FontAwesomeIcon icon={faMoon} />
            </div>
            <div id="rightBar">
                <FontAwesomeIcon icon={faSignal} />
                <FontAwesomeIcon icon={faBatteryEmpty} />

            </div>
        </div>
        </>
    )
}
export default Bar;