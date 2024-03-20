import ConditionalComponent from "./components/ConditionalComponent";
import Counter from "./components/Counter";
import Fruits from "./components/Fruits";
import Hello from "./components/Hello";

function App() {
  const person = {
    name: "Robert",
    message: "Hello there!",
    emoji: "👋",
    seatNumbers: [1, 4, 7],
  };
  return (
    <div className="App">
      <Hello person={person} />
      <Fruits />
      <ConditionalComponent />
      <Counter />
    </div>
  );
}

export default App;
