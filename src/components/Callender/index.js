import React, { useEffect } from "react";
import { useStyle } from "./style";
import Calendar from 'react-awesome-calendar';
//import { Header } from "../Header";
import { useCalender } from "./useCalender";


const MyCalendar = () => {
  const { calendarClasses } = useStyle();
  const {events , sendDateValue ,sendDetailsValue ,AddEvent} = useCalender();
  useEffect(() => {   
    console.log("index updated:", events)
  }, [events]);
  console.log(events);
  return (
    <div style={calendarClasses.mainContainer}>
      <div style={calendarClasses.form}>
        <input type="date" placeholder="Event Date"  onChange={(e) =>{sendDateValue(e.target.value)}} required />
        <input type="text" placeholder="Event Details"  onChange={(e) =>{sendDetailsValue(e.target.value)}} required />
        <button style={calendarClasses.addEventBtn} onClick={() =>{AddEvent()}}>Add Event</button>
      </div>
      <div style={calendarClasses.calendarContainer}>

      <Calendar
                events={events}
               // header={<Header />}
            />
      </div>
    </div>
  );
};

export { MyCalendar };
