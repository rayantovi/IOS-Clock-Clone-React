import { faPlus, faCircleMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import  React  from "react";
import Store from "../store";
import Colors from "../assets/Colors";



function Clock() {
  const { clocks, addClock, removeClock, edit, toggleEdit} = useContext(Store);
  // console.log(clocks)


  if(clocks.length>0){
  return clocks.map((clock, idx)=>{
    return (
        <React.Fragment key={clock.location+idx}>
        <div className={edit ? "clock edit" : "clock"}>
            {edit && (
              <FontAwesomeIcon
                className="circleMinus"
                icon={faCircleMinus}
                onClick={() => {
                    removeClock(clock.location)
                }}
              />
            )}
            <div className="w-[80%] flex flex-col justify-center ">
              <span className="text-gray text-[0.6em] ">{clock.timeDifference}</span>
              <p style={{fontSize: clock.fontSize}} className="sf-regular ">{clock.location}</p>
            </div>
            <div className={edit ? "clockRightEdit" : "clockRight"}>
              <p className="sf-thin text-[3.3em]">
                {clock.time[0]} 

                <span className="sf-thin"> {clock.time[1]} </span>
              </p>
            </div>
          </div>

          <hr />
        
        </ React.Fragment>
    )
  })}else{
    return (
    <p style={{color: Colors.gray, fontFamily:"SF", fontSize: "1.5em"}}>
      No World Clocks
    </p>
    )
  }
  


  }
  




export default function WorldClock() {
  const [timeip, setip] = useState(null)


  const { clocks, addClock, edit, toggleEdit} = useContext(Store);
  let length = clocks.length
  let time = new Date();
  time = time.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return (
    <>
      <div id="alarmHeader">
        <div id="alarmLeft" >
          {length ? <a
            onClick={() => {
              
              toggleEdit()
            }}
          >
            {
            edit ? "Done" : "Edit"
            }
          </a> : <a id="alarmLeft ">&nbsp;</a> }
          <p id="worldClockTitle" className="sf-semibold">World Clock</p>
        </div>

        <div id="alarmRight">
          <FontAwesomeIcon
            onClick={() => addClock("Erbil"+Math.floor(Math.random()*16), ["5:30","AM"], "Today, +0HRS")}
            icon={faPlus}
          />
        </div>
      </div>

      <div id="alarmBody" style={length < 1  ? {justifyContent:"center", alignItems: "center"} : null}>

        {length ? <hr /> : null}
        
         <Clock />

        
      </div>
    </>
  );
}
