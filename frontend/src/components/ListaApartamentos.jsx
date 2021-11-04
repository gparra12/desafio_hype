import React, { useEffect, useState } from "react";
import { busca, deletaApartamento } from "../api";
import { Box } from "./UI";
import imagem_banheiro from "../assets/img/shower.svg";
import imagem_quarto from "../assets/img/bed.svg";
import area_total from "../assets/img/ruler.svg";
import apartment from "../assets/img/apartment.svg";
import styled from "styled-components";
import { Button } from "@material-ui/core";

const ContainerIcons = styled.div`
  display: grid;
  grid-gap: 1 rem;
  grid-auto-flow: column;
`;

const ContainerInformacoes = styled.div`
  align-items: center;
  height: auto;
  width: 12 vw;
  padding: 1 rem 0;
`;

const DivBotoes = styled.div`
  padding: 0 12 vw;
  display: grid;
  grid-auto-flow: column;
  align-content: center;
`;

const Titulo = styled.h3`
  font-size: 1.5rem;
`;

const BoxPrincipal = styled.div`
  flex-direction: row;
  padding: 0px 27vw;
`;

const ListaApartamentos = ({ url }) => {
  const [apartamentos, setApartamentos] = useState([]);

  useEffect(() => {
    busca(url, setApartamentos);
  }, [url]);

  return (
    <BoxPrincipal>
      <section>
        {apartamentos.map((apartamentos) => (
          <Box>
            <article className="article-principal" key={apartamentos.id}>
              <Titulo>{apartamentos.codigo_apartamento}</Titulo>
              <ContainerIcons>
                <ContainerInformacoes>
                  <div>
                    <img
                      src={imagem_quarto}
                      alt="Ícone para indicar o número de quartos"
                    />
                  </div>
                  <div>
                    <p>{apartamentos.numero_quartos}</p>
                  </div>
                </ContainerInformacoes>
                <ContainerInformacoes>
                  <div>
                    <img
                      src={imagem_banheiro}
                      alt="Ícone para indicar o número de banheiros."
                    />
                  </div>
                  <div>
                    <p>{apartamentos.numero_banheiros}</p>
                  </div>
                </ContainerInformacoes>
                <ContainerInformacoes>
                  <div>
                    <img
                      src={area_total}
                      alt="Ícone para indicar a área total."
                    />
                  </div>
                  <div>
                    <p>{apartamentos.area_total} m²</p>
                  </div>
                </ContainerInformacoes>
                <ContainerInformacoes>
                  <div>
                    <img
                      src={apartment}
                      alt="Ícone para indicar qual prédio pertence"
                    />
                  </div>
                  <div>
                    <p>{apartamentos.id_predio}</p>
                  </div>
                </ContainerInformacoes>
              </ContainerIcons>
            </article>
            <Button
              onClick={() => {
                const newUrl = `${url}/${apartamentos.id}`;
                deletaApartamento(newUrl);
                console.log(`foi`)
              }}
              variant="outlined"
            >
              Apagar
            </Button>
          </Box>
        ))}
      </section>
    </BoxPrincipal>
  );
};

export default ListaApartamentos;
