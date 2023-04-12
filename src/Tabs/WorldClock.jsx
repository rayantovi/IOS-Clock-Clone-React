import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function WorldClock() {
  let time = new Date();
  time = time.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return (
    <>
      <div id="alarmHeader">
        <div id="alarmLeft">
          <p>Edit</p>
          <p id="worldClockTitle">World Clock</p>
        </div>

        <div id="alarmRight">
          <FontAwesomeIcon icon={faPlus} />
        </div>
      </div>

      <div id="alarmBody">
        <hr />
        {Clock({
          location: "Baghdad",
          time: time,
          timeDifference: "Today, +0HRS",
        })}
        {Clock({
          location: "Baghdad",
          time: time,
          timeDifference: "Today, +0HRS",
        })}
        {Clock({
          location: "Baghdad",
          time: time,
          timeDifference: "Today, +0HRS",
        })}
      </div>
    </>
  );
}

function Clock(props) {
  let location = props.location;
  let timee = props.time;
  let timeDifference = props.timeDifference;

  timee = timee.split(" ");
  return (
    <>
      <div className="clock">
        <div className="clockLeft">
          <span>{timeDifference}</span>
          <p>{location}</p>
        </div>
        <div className="clockRight">
          <p>{timee[0]} 
          
          <span> {timee[1]} </span>
          </p>
        </div>
      </div>

      <hr />
    </>
  );
}
