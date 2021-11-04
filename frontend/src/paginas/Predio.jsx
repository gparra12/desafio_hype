import React from "react";
import ListaPredio from "../components/ListaPredios";
import { Box } from "../components/UI";

const Predio = () => {
  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">Predios</h2>
      </div>
        <ListaPredio url={"/predios"} />    
    </main>
  );
};

export default Predio;
