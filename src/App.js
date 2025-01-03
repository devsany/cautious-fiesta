import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Routes,
} from "react-router-dom";
import Counter from "./practicsComponent/q1/Counter";
import Todo from "./practicsComponent/q2/Todo";
import DynamicForm from "./practicsComponent/q3/DynamicForm";
import FetchAPIData from "./practicsComponent/q4/FetchAPIData";
import Value from "./practicsComponent/q5/Value";
import HigherOrderComponent from "./practicsComponent/q6/HigherOrderComponent";
import LowerOrderComponent from "./practicsComponent/q6/lowerORderComponent";

const Home = () => <h1>Home Page</h1>;
const About = () => <h1>About Page</h1>;
const Contact = () => <h1>Contact Page</h1>;

const App = () => {
  return (
    // <Router>
    //   <nav>
    //     <ul>
    //       <li>
    //         <Link to="/">Home</Link>
    //       </li>
    //       <li>
    //         <Link to="/about">About</Link>
    //       </li>
    //       <li>
    //         <Link to="/contact">Contact</Link>
    //       </li>
    //     </ul>
    //   </nav>
    //   <Routes>
    //     <Route exact path="/" component={Home} />
    //     <Route path="/about" component={About} />
    //     <Route path="/contact" component={Contact} />
    //   </Routes>
    // </Router>
    <>
      <Counter />
      <Todo />
      <DynamicForm />
      <FetchAPIData />
      <Value />
      <LowerOrderComponent />
    </>
  );
};

export default App;
