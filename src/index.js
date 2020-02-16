import React from "react";
import ReactDOM from "react-dom";
import Snackbar from "./Snackbar";

import Button from "./button";

import "./styles.css";

function App() {
  const [status, setStatusBase] = React.useState("");

  const setStatus = msg => setStatusBase({ msg, date: new Date() });
  return (
    <div className="App">
      <h1>Hello SnackBar</h1>
      <Button setStatus={setStatus} />
      {status ? <Snackbar key={status.date} status={status.msg} /> : null}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
