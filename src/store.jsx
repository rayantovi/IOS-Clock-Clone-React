import { React, useState, createContext, useEffect } from "react";

const Store = createContext();

export function StoreProvider({ children }) {
  
  useEffect(() => {
    const json = fetch("https://worldtimeapi.org/api/ip")
      .then((res) => res.json())
      .then((res) => {
        let time = new Date(res.datetime.split(".")[0]);
        time = time.toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        });
        time = time.split(" ");
        let location = res.timezone.split("/");
        let index = location.length - 1;
        let size = "1.6em";
        switch (true) {
          case location[index].length > 10: {
            size = "1.40em";
            break;
          }
          case location[index].length > 14: {
            size = "1em";
            break;
          }
        }
        setClocks([
          {
            location: location[index].replaceAll("_", " "),
            time: [time[0], time[1]],
            timeDifference: "Today, +0HRS",
            fontSize: size,
          },
        ]);
      });
  }, []);

  const [clocks, setClocks] = useState([
    {
      location: "Loading",
      time: ["1:11", "AM"],
      timeDifference: "Today, +0HRS",
      fontSize: "1.8em",
    },
  ]);
  const [edit, setEdit] = useState(false);

  const toggleEdit = () => {
    setEdit(!edit);
  };
  const addClock = (location, time, timeDifference, fontSize) => {
    setClocks((prevState) => [
      ...prevState,
      { time, location, timeDifference, fontSize },
    ]);
  };
  const removeClock = (location) => {
    setClocks(clocks.filter((clock) => clock.location !== location));
  };
 
  return (
    <Store.Provider value={{ clocks, addClock, removeClock, edit, toggleEdit}}>
      {children}
    </Store.Provider>
  );
}

export default Store;
