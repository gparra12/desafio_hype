import React from "react";
import { Link } from "react-router-dom";
import ListaApartamentos from "../components/ListaApartamentos";

const Home = () => {
  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">Home</h2>
      </div>
      <div>
          <ListaApartamentos url={'/apartamentos'}/>
      </div>
    </main>
  );
};

export default Home;
