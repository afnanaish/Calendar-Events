import randomColor from "randomcolor";
import { useEffect, useState } from "react";

const useCalender = () => {
  const [events, setEvents] = useState([]);

  const [date, setDate] = useState();
  const [details, setDetails] = useState();

  const sendDateValue = (e) => {
    console.log("event target date", e);
    setDate(e);
  };

  //;
  console.log("date", date);
  //***** */
  const sendDetailsValue = (e) => {
    console.log("event target details", e);
    setDetails(e);
  };
  //;
  console.log("details", details);
  //***** */
  const AddEvent = () => { if (date!=null && details!=null ){
    setEvents((prevEvents) => {
     
      const newEvent = {
        id: prevEvents.length + 1,
        color: randomColor(),
        from: `${date}T13:00:00+00:00`,
        to: `${date}T13:00:00+00:00`,
        title: `${details}`,
      };
      return [...prevEvents, newEvent];
    });}
  };

  useEffect(() => {
    return { events, sendDateValue }, console.log("use updated:");
  }, [events]);
  return { events, sendDateValue, sendDetailsValue, AddEvent };
};

export { useCalender };
