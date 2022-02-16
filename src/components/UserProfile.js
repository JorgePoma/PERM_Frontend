import React from 'react'
import styled from 'styled-components'
import { useAuth0 } from '@auth0/auth0-react'
import ListUnsave from './ListUnsave';


function UserProfile() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <Cont>
      <Imag></Imag>
    <Container>
      <Data>
        <Imagen>
          <h3>Foto de perfil</h3>
          <img src={user.picture}></img>
        </Imagen>
        <Account>
        <h3>Nombre de usuario</h3>
        <h4>{user.nickname}</h4>
        <h3>Correo Electrónico:</h3>
        <h4>{user.email}</h4>
        <h3>Numero de teléfono:</h3>
        <h4 defaultValue={
          ""
        }>{user.phone_number}</h4>
      </Account>
      </Data>
      <Save>
        <Title>Lista de Reservas</Title>
        <ListUnsave/>
      </Save>
    </Container>
    </Cont>
  )
}

export default UserProfile

const Cont = styled.div`
  margin-top: 5vh;
  background-image: url("https://res.cloudinary.com/djw9lea2q/image/upload/v1644779426/mm/thumb-1920-36024_i62uob.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
  z-index: 0
`

const Imag = styled.div`
    content:'';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(255, 255, 255, .8);
    z-index: -1;
`

const Container = styled.div`
  margin-bottom: 30px;
  display: grid;
  padding: 1vh;
  grid-gap: 4vh;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  @media(max-width: 820px){
      grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`
const Data = styled.div`
  background-color: white;
  margin-top: 3vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: 80%;
  padding-top: 4vh;
  alight-items:center;
  position: fixed;
  display: grid;
  grid-gap: 36px;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  box-shadow: rgb(0 0 0/29%) 0px 16px 30px -10px,
    rgb(0 0 0/13%) 0px 23px 20px -15px;
  @media(max-width: 1110px){
      display: none;
  }
`
const Save = styled.div`
  background-color: rgba(0.0.0.0 .1);
  margin-top: 1vh;
  //object-fit: cover;
  display: grid;
  grid-column: 2 / 5;
  grid-row: 2;
  @media(max-width: 1110px){
    grid-column: 5 / 1;
}
`
const Imagen = styled.div`
    img {
        margin-top: 4vh;
        width: 20vh;
        height: 20vh;
        //object-fit: cover;
        padding: 0vh;
        border-radius: 45%;
        box-shadow: rgb(0 0 0/29%) 0px 16px 30px -10px,
        rgb(0 0 0/13%) 0px 23px 20px -15px;
    }
    h3{
      color: white;
    }
    background-color: #DA5757;
    margin: 0vh;
    padding: 5vh;
    //border: 3px solid rgba(0, 0, 0, 0.2);
`

const Title = styled.h1`  
  //margin-top: 6vh;
  padding: 1vh;
  bottom: 0;
  left: 20%;
  right: 0;
  background-color: rgba(57, 60, 65, .8);
  font-size: 2vh;
  height: 4vh;
  color: white;
  alight-items:center;
  position: fixed;
  display: grid;
  grid-gap: 36px;
  z-index: 1;
  @media(max-width: 1110px){
    left: 0;
}
`
const Account = styled.div`
    height: 46vh;
    padding-top: 7vh;
    display: grid;
    grid-gap: 0px;
    padding-bottom: 7vh;
`