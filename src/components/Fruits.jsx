export default function Fruits() {
  const fruits = [
    { name: "Apple", price: 5, emoji: "🍎" },
    { name: "Banana", price: 2, emoji: "🍌" },
    { name: "Mango", price: 7, emoji: "🥭" },
    { name: "Orange", price: 4, emoji: "🍊" },
    { name: "Grapes", price: 3, emoji: "🍇" },
  ];

  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.name}>
            {fruit.emoji} {fruit.name} ${fruit.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
