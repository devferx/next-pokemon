export default function Card({nombre, numero}) {
  return (
    <div className="card" style={{ width: 250 }}>
      <div className="card-body">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            numero && numero > 0 && numero < 807
              ? numero
              : 1
          }.png`}
          height="200px"
        />
        <h5 className="card-title text-center">{nombre}</h5>
      </div>
    </div>
  );
}
