import Hello from "./components/Hello";

function App() {
  const seatNumbers = [1, 4, 7];
  return (
    <div className="App">
      <Hello
        name="Robert"
        message="Hello there!"
        emoji="👋"
        seatNumbers={seatNumbers}
      />
    </div>
  );
}

export default App;
