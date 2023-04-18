import { Route, Routes, Link } from "react-router-dom";
import WorldClock from "./Tabs/WorldClock";
import Alarm from "./Tabs/Alarm";
import Stopwatch from "./Tabs/Stopwatch";
import Timer from "./Tabs/Timer";
import Colors from "./assets/Colors";
import Icons from "./assets/Icons";
import { useId, useState } from "react";

function Tabs(){
    const [tabs, FocusTab] = useState([1,0,0,0]) 

    let icons = ["globe", "alarm", "stopwatch", "timer"]
    let classes = "w-full flex flex-col text-center items-center"
    let routes = ["/", "/Alarm", "/Stopwatch", "/Timer"]
    let focuses = [[1,0,0,0], [0,1,0,0], [0,0,1,0], [0,0,0,1]]
    let labels = ["World Clock", "Alarm","Stopwatch", "Timer"]
    
    return (
        <>

        

        <section id="tabs" className="w-full h-[5em] bg-black absolute bottom-0 flex justify-around text-[0.60rem]">

        {
        routes.map((route, idx) => {
        return (
        <Link key={route+idx} className={classes} to={route} onClick={()=>FocusTab(focuses[idx])}>
            <Icons icon={icons[idx]} color={tabs[idx] ? Colors.orange : Colors.gray} />
            <p style={{color: tabs[idx] ? Colors.orange : Colors.gray}}>{labels[idx]}</p>
        </Link> 
        )
    })
        }


            {/* <Link className="w-full flex flex-col text-center items-center" to="/" onClick={()=>FocusTab([1, 0, 0, 0])}>
           

            
            <Icons icon="alarm" color={tabs[1] ? Colors.orange : Colors.gray} />
            <p style={{color: tabs[1] ? Colors.orange : Colors.gray}}> Alarm</p>
            </Link>

            <Link className="tw-full flex flex-col text-center items-center" to="/Stopwatch" onClick={()=>FocusTab([0, 0, 1, 0])}> 
            <Icons icon="stopwatch" color={tabs[2] ? Colors.orange : Colors.gray} />
            <p style={{color: tabs[2] ? Colors.orange : Colors.gray}}>Stopwatch</p>
            </Link>

            <Link className="tw-full flex flex-col text-center items-center" to="/Timer" onClick={()=>FocusTab([0, 0, 0, 1])}> 
            <Icons icon="timer" color={tabs[3] ? Colors.orange : Colors.gray} />
            <p style={{color: tabs[3] ? Colors.orange : Colors.gray}}>Timer</p>
            </Link> */}

            
    
        </section>
        <Routes>
            <Route path="/" element={ <WorldClock/> } />
            <Route path="/Alarm" element={ <Alarm/> } />
            <Route path="/Stopwatch" element={ <Stopwatch/> } />
            <Route path="/Timer" element={ <Timer/> } />
        </Routes>
        </>
    )
}

export default Tabs;