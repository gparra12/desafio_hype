import React from "react";
import styled from "styled-components";

import "../assets/css/components/header.css";

import { Link } from "react-router-dom";

const StyledHeader = styled.nav`
  background-color: #353e52;
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 5rem;
  width: 70vw;
  align-items: center;
`;

const Logo = styled.img`
  height: 3.5rem;
  cursor: pointer;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <Logo
          src="https://hypeempreendimentos.com.br/img/icons/icon2.png"
          alt="Logo Hype"
        />
      </Link>
      <div>
        <Link className="btn_cabecalho" to="/predios">
          Predios
        </Link>
        <Link className="btn_cabecalho" to="/apartamentos">
          Apartamentos
        </Link>
      </div>
    </StyledHeader>
  );
};

export default Header;
