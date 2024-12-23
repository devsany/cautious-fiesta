import { useEffect, useState } from "react";
import "./App.css";
// import ComplexForm from "./components/complexform/ComplexForm";

function Show() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 500);
  });
  return (
    <div className="App">
      {/* <ComplexForm /> */}
      {show ? (
        <div>
          <button>Strat learning</button>
        </div>
      ) : (
        <div>
          <button onClick={() => setShow(true)}>Login</button>
        </div>
      )}
    </div>
  );
}

export default Show;
