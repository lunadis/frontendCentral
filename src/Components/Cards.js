import React from "react";
import styled from "styled-components";
import Logo from "../Resource/Logo.png";
import InputText from "../Components/InputText";
import ButtonSubmit from '../Components/ButtonSubmit'

const CardStyle = styled.div`
  background: #ffff;
  width: 300px;
  border-radius: 5%;
  box-shadow: 3px 7px 20px 1px #2531d680;
  position: relative;
`;

const Titulo = styled.div`
  font-size: 20px;
  text-align: center;
  height: 50px;
`;

const Label = styled.p`
font-weight: 600;
  font-size: 12px;
  margin: auto;
  margin-left: 3px;
`;

const Texto = styled.h4`
  padding: 17px;
  margin: 0;
`;

const Corpo = styled.div`
    display: grid;
    height: 100px;
`;

const Rodape = styled.div`
  display: flex;
  height: 60px;
`;

export const Card = () => {
  return (
    <CardStyle>
      <Titulo>
        <img
          src={Logo}
          alt="Logo tipo"
          style={{
            width: "40px",
            height: "40px",
            padding: "10px",
            position: "absolute",
            left: "0",
          }}
        />
        <Texto>Login</Texto>
      </Titulo>
      <Corpo>
        <div style={{margin: 'auto'}}>
          <Label>User</Label>
          <InputText />
        </div>
        <div style={{margin: 'auto'}}>
          <Label>Password</Label>
          <InputText />
        </div>
      </Corpo>
      <Rodape>
          <ButtonSubmit color={"#fd1"} title="Acessar"/>
      </Rodape>
    </CardStyle>
  );
};
