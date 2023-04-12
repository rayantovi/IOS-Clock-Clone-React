import { Route, Routes, Link } from "react-router-dom";
import WorldClock from "./WorldClock";
import Alarm from "./Alarm";
import Stopwatch from "./Stopwatch";
import Timer from "./Timer";
import Colors from "./Colors";
import Icons from "./Icons";
import { useState } from "react";

function Tabs(){
    const [tabs, FocusTab] = useState([1,0,0,0]) 
   
    return (
        <>
        <section id="tabs">
            <Link className="tab" to="/" onClick={()=>FocusTab([1, 0, 0, 0])}>
            <Icons icon="globe" color={tabs[0] ? Colors.orange : Colors.gray} />
            <p style={{color: tabs[0] ? Colors.orange : Colors.gray}}>World Clock</p>
            </Link>
            <Link className="tab" to="/Alarm" onClick={()=>FocusTab([0, 1, 0, 0])}>
            <Icons icon="alarm" color={tabs[1] ? Colors.orange : Colors.gray} />
            <p style={{color: tabs[1] ? Colors.orange : Colors.gray}}> Alarm</p>
            </Link>
            <Link className="tab" to="/Stopwatch" onClick={()=>FocusTab([0, 0, 1, 0])}> 
            <Icons icon="stopwatch" color={tabs[2] ? Colors.orange : Colors.gray} />
            <p style={{color: tabs[2] ? Colors.orange : Colors.gray}}>Stopwatch</p>
            </Link>
            <Link className="tab" to="/Timer" onClick={()=>FocusTab([0, 0, 0, 1])}>
            <Icons icon="timer" color={tabs[3] ? Colors.orange : Colors.gray} />
            <p style={{color: tabs[3] ? Colors.orange : Colors.gray}}>Timer</p>
            </Link>

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