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
    </div>
  );
}

export default App;
