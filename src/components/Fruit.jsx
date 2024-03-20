export default function Fruit({ name, emoji, price }) {
  return (
    <>
      {/* {emoji} {name} ${price} */}
      {price > 3 ? (
        <li>
          {emoji} {name} ${price}
        </li>
      ) : (
        ""
      )}
    </>
  );
}
