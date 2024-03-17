const name = "Robert";

function displayMessage() {
  return "Wow!";
}

function Hello() {
  return <h1>Hello from component!{displayMessage() + name}</h1>;
}

export default Hello;
