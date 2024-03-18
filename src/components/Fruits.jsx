export default function Fruits({ fruits }) {
  return (
    <div>
      {fruits.map((fruit) => (
        <ul>
          <li>{fruit}</li>
        </ul>
      ))}
    </div>
  );
}
