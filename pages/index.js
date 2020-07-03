import { useState, useEffect } from 'react';
import axios from 'axios';
import Wrapper from '../components/Wrapper';
import Navbar from '../components/Navbar';
import Card from '../components/Card';

export default function Home() {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    axios
      .get('https://piedra-papel-y-tijera.firebaseio.com/pokemons.json')
      .then((data) => {
        const resultados = data.data;
        if (!resultados) {
          setAllData([]);
          return;
        }
        const datos = Object.keys(resultados).map((a) => {
          return {
            key: a,
            ...resultados[a],
          };
        });
        setAllData(datos);
      });
  }, []);

  return (
    <Wrapper>
      <Navbar></Navbar>
      <div className="container mt-5">
        <div className="card-columns">
          {allData.length === 0 ? (
            <h3> aun no hay datos :(</h3>
          ) : (
            allData.map((dato) => (
              <Card key={dato.key} nombre={dato.nombre} numero={dato.numero} />
            ))
          )}
        </div>
      </div>
    </Wrapper>
  );
}
