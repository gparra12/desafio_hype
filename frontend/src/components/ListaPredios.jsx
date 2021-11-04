import React, { useEffect, useState } from "react";
import { busca, deletaPredio } from "../api";
import { Box } from "./UI";
import image_endereco from "../assets/img/address.svg";
import imagem_cidade from "../assets/img/city.svg";
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
  padding: 1.5rem 1.5rem;
`;

const Titulo = styled.h3`
  font-size: 1.5rem;
`;

const BoxPrincipal = styled.div`
  flex-direction: column;
  padding: 0px 27vw;
`;

const ListaPredio = ({ url }) => {
  const [predios, setPredios] = useState([]);

  useEffect(() => {
    busca(url, setPredios);
  }, [url]);

  return (
    <BoxPrincipal>
      <section>
        {predios.map((predios) => (
          <Box>
            <article key={predios.id}>
              <Titulo>{predios.nome}</Titulo>
              <ContainerIcons>
                <ContainerInformacoes>
                  <div>
                    <img
                      src={image_endereco}
                      alt="Ícone para indicar o endereço."
                    />
                  </div>
                  <div>
                    <p>{predios.endereco}</p>
                  </div>
                </ContainerInformacoes>
                <ContainerInformacoes>
                  <div>
                    <img
                      src={imagem_cidade}
                      alt="Ícone para indicar a cidade."
                    />
                  </div>
                  <div>
                    <p>{predios.cidade}</p>
                  </div>
                </ContainerInformacoes>
                <ContainerInformacoes>
                  <div>
                    <img src={imagem_cidade} alt="Ícone para indicar o estado." />
                  </div>
                  <div>
                    <p>{predios.estado}</p>
                  </div>
                </ContainerInformacoes>
                <ContainerInformacoes>
                  <div>
                    <p>{predios.sigla}</p>
                  </div>
                </ContainerInformacoes>
              </ContainerIcons>
            </article>
            <Button
              onClick={() => {
                const newUrl = `predio/${predios.id}`;
                deletaPredio(newUrl);
                console.log(`foi`);
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

export default ListaPredio;
