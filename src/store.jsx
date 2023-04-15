import { React, useState ,createContext, useEffect }from 'react';


const Store = createContext()


export function StoreProvider({children}){
    const [clocks, setClocks] = useState([{location:"Baghdad",time:["4:30", "PM"],timeDifference:"Today, +0HRS"}])
    const [edit, setEdit] = useState(false)

    const toggleEdit = () => {  
        setEdit(!edit)
    }
    const addClock = (location, time, timeDifference) => {
        
        setClocks((prevState)=> [...prevState, {time, location, timeDifference}])
    }   
    const removeClock = (location) =>{
        setClocks(clocks.filter(clock=>clock.location!==location))
    }
    
    return (
        <Store.Provider  value={{clocks, addClock, removeClock,edit, toggleEdit}}> 
                {children}
        </Store.Provider>
    );
}


export default Store;
