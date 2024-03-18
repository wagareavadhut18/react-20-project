function Hello({ message, name, emoji, seatNumbers }) {
  return (
    <h1>
      {message} {emoji} {name} {seatNumbers}
    </h1>
  );
}

export default Hello;
