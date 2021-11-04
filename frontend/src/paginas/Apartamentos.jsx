import React from "react";
import ListaApartamentos from "../components/ListaApartamentos";

const Apartamentos = () => {
    return (
      <main>
        <div className="container">
          <h2 className="titulo-pagina">Apartamentos</h2>
        </div>
          <ListaApartamentos url={"/apartamentos"} />    
      </main>
    );
  };

export default Apartamentos;