import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faBatteryEmpty, faSignal } from '@fortawesome/free-solid-svg-icons'


function Bar(){
    return (
        <>
        <div className='w-full h-9 flex bg-black justify-between items-center sf-semibold'>
            <div className='w-[22%] h-full flex justify-center items-center'>
                <p className='m-[0.3em] text-[0.85em]'>8:24</p>
                <FontAwesomeIcon className='text-[0.8rem]' icon={faMoon} />
            </div>
            <div className="w-[22%] h-full flex justify-center items-center">
                <FontAwesomeIcon className='text-[0.65rem] m-1' icon={faSignal} />
                <FontAwesomeIcon className='text-[1rem]' icon={faBatteryEmpty} />

            </div>
        </div>
        </>
    )
}
export default Bar;
