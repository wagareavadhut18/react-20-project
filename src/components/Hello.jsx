function Hello(props) {
  const { message, name } = props;
  return (
    <h1>
      {message} {name}
    </h1>
  );
}

export default Hello;
