function CardComponent({ collar }) {
  return (
    <div className="card m-5" style={{ width: "18rem" }}>
      <img
        src={collar.image}
        className="card-img-top"
        alt="..."
        style={{ width: "100%" }}
      />
      <div className="card-body">
        <h3> {collar.name}</h3>
        <p className="card-text">{collar.price}</p>
      </div>
    </div>
  );
}

export default CardComponent;

{
  /* <a href={collar.name} target="_blank" rel="noopener noreferrer">
{collar.name}
</a> */
}
