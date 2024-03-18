import Fruits from "./components/Fruits";
import Hello from "./components/Hello";

function App() {
  const person = {
    name: "Robert",
    message: "Hello there!",
    emoji: "👋",
    seatNumbers: [1, 4, 7],
  };
  const fruits = ["apple", "banana", "mango", "orange", "grapes"];
  return (
    <div className="App">
      <Hello person={person} />
      <Fruits fruits={fruits} />
    </div>
  );
}

export default App;
