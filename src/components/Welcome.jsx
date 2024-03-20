export default function Welcome() {
  function handleClick() {
    console.log("handle clicked");
  }
  return (
    <div>
      <h2>Welcome component</h2>
      <button onClick={handleClick}>Ckick Me</button>
    </div>
  );
}
