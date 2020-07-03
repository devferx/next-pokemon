import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand">
            <img
              src="https://images.wikidexcdn.net/mwuploads/esssbwiki/thumb/7/77/latest/20111028181540/TituloUniversoPok%C3%A9mon.png/550px-TituloUniversoPok%C3%A9mon.png"
              height="30"
              className="d-inline-block align-center"
              alt=""
              loading="lazy"
            />{' '}
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
