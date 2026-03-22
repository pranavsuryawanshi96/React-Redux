function Random() {
  let number = Math.random() * 100;
  return (
    <h3 style={{ "background-color": "#776691" }}>
      Random number is:{Math.floor(number)}
    </h3>
  );
}
export default Random;
