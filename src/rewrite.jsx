import React from "react";
import { useContext } from "react";

function Clock() {
  const { clocks, addClock, edit, toggleEdit } = useContext(Store);


  clocks.map(clock=>{
    
  })
  return (
    <>
      {clocks.map(clock => {
        <>
          <div className={edit ? "clock edit" : "clock"}>
            {edit && (
              <FontAwesomeIcon
                className="circleMinus"
                icon={faCircleMinus}
                onClick={() => {}}
              />
            )}
            <div className="clockLeft">
              <span>{clock.timeDifference}</span>
              <p>{clock.location}</p>
            </div>
            <div className={edit ? "clockRightEdit" : "clockRight"}>
              <p>
                {clock.time}

                <span> {clock.time} </span>
              </p>
            </div>
          </div>

          <hr />
        </>;
      })}
    </>
  );
}
