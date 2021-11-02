import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { busca } from "../api";

const ListaApartamentos = ({ url }) => {
  const [apartamentos, setApartamentos] = useState([]);

  useEffect(() => {
    busca(url, setApartamentos);
  }, [url]);

  return(
    <section className="posts container">
      { 
       apartamentos.map((apartamentos)=> (
         <Link className="cartao-post" to={"/apartamentos"}>
           <article key={apartamentos.id}>
              <h3 className="cartao-post__titulo">
                {apartamentos.codigo_apartamento}
              </h3>
              <p>{apartamentos.quartos}</p>
              <p>{apartamentos.numero_banheiros}</p>
              <p>{apartamentos.numero_suites}</p>
              <p>{apartamentos.area_total}</p>
              <p>{apartamentos.id_predio}</p>
           </article> 
         </Link>
       ))
      }
    </section>
  );
};

export default ListaApartamentos;
