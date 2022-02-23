import React, { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import EventForm from "./EventForm";
import reducer from "../reducers/index";
import Events from "./Events";

import AppContext from "../contexts/AppContext";

function App() {
  const initialState = {
    events: [],
    operatinLogs: []
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={ { state, dispatch}}>
      <div className="container-fluid">
        <EventForm/>
        <Events/>
      </div>
    </AppContext.Provider>
  );
}

export default App;
