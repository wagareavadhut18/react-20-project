import Fruit from "./Fruit";

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
          <Fruit
            key={fruit.name}
            name={fruit.name}
            emoji={fruit.emoji}
            price={fruit.price}
          />
        ))}
      </ul>
    </div>
  );
}
