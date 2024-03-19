import Code from "./Code";
import Welcome from "./Welcome";

export default function ConditionalComponent() {
  const display = true;
  let message;
  if (display === true) {
    message = <h1>true element</h1>;
  } else {
    message = <h1>false element</h1>;
  }
  return message;
}
