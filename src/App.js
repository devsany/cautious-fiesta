import "./App.css";
import TodoList from "./components/q22/TodoList";
import SearchBar from "./components/q25/SearchBar";
import StarRating from "./components/q35/StarRating";
// import ComplexForm from "./components/complexform/ComplexForm";

function App() {
  const items = [{ name: "apple" }, { name: "banana" }, { name: "orange" }];

  return (
    <div className="App">
      {/* <ComplexForm /> */}
      {/* <SearchBar items={items} /> */}
      <StarRating />
    </div>
  );
}

export default App;
