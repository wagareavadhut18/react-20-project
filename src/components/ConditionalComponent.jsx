export default function ConditionalComponent() {
  const display = true;
  if (display === true) {
    return <h1>This is true statement jsx.</h1>;
  } else {
    return <h1>This is false statement jsx</h1>;
  }
}
