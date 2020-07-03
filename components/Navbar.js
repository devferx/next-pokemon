import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand">
            <img
              src="https://pokeapi.co/static/pokeapi_256.888baca4.png"
              height="30"
              className="d-inline-block align-center"
              alt=""
              loading="lazy"
            />
            {" "}
            PokeApp
          </a>
        </Link>
        <div className="d-flex">
          <Link href="/crear">
            <a className="btn btn-outline-success">Crear</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
