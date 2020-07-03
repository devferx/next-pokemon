import { useState } from 'react';
import Link from 'next/link';
import Wrapper from '../components/Wrapper';
import Navbar from '../components/Navbar';
import Card from '../components/Card';

export default function crear() {
  const [data, setData] = useState({
    nombre: '',
    numero: 1,
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Wrapper>
      <Navbar></Navbar>
      <div className="container mt-2">
        <Link href="/">
          <a className="btn btn-outline-danger">volver</a>
        </Link>
        <div className="row">
          <div className="col-md-6 col-12 mb-5">
            <h3 className="mt-3">Ingresa los datos UwU</h3>
            <form className="form">
              <div className="mb-3">
                <label className="form-label" htmlFor="nombre">
                  Nombre:
                </label>
                <input
                  type="text"
                  name="nombre"
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Nombre"
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="numero">
                  Ingresa un numero:
                </label>
                <input
                  type="number"
                  onChange={handleChange}
                  name="numero"
                  className="form-control"
                  placeholder="numero del 1 al 807"
                />
              </div>
              <button
                type="submit"
                className="btn btn-outline-success btn-block mt-2"
              >
                Enviar
              </button>
            </form>
          </div>

          <div className="col-md-6 col-12 contenedor">
            <Card nombre={data.nombre} numero={data.numero} />
          </div>
        </div>
      </div>

      <style jsx>{`
        .contenedor {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </Wrapper>
  );
}
