export default function Fruit({ name, emoji, price, soldout }) {
  return (
    <>
      {/* {emoji} {name} ${price} */}
      {price > 0 ? (
        <li>
          {emoji} {name} ${price} {soldout ? "Sold Out" : ""}
        </li>
      ) : (
        ""
      )}
    </>
  );
}
