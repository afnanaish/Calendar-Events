import { useMemo } from "react";

const useStyle = () => {
  const calendarClasses = useMemo(() => {
    return {
      mainContainer: {
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#163458c9",
      },
      form: {
        height: "20%",
        width: "30%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
      },
      calendarContainer: {
        width: "800px",
        height: "580px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        overflowY: "scroll",
        overflowX: "none",
        padding: "2px",
        border: "1px solid ",
        borderRadius: "20px",
        background: "#b3b8bf",
      },
      weekRow: {
        height: "52px",
      },
      addEventBtn: {
        border: "1px solid gray",
        borderRadius: "50px",
        background: "lightblue",
      },
    };
  }, []);
  return { calendarClasses };
};

export { useStyle };
