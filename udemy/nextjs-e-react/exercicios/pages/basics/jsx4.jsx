export default function jsx4() {
  const subtitle = "I'm on Javascript!";
  const h3 = <h3>{3 * 3}</h3>;

  return (
    <div>
      <h1>Integração JS e JSX</h1>
      <h2>{subtitle}</h2>
      {h3}
      <h4>{Math.max(13, 20)}</h4>
      <h5>39.9 is between 20 and 40 ? {isBetween(39.9, 20, 40)}</h5>
    </div>
  );
}

function isBetween(val, min, max) {
  return min <= val && val <= max ? "yes" : "no";
}
