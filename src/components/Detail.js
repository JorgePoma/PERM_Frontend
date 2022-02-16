import React, { useEffect, useState } from 'react';
import styled from  'styled-components';
import Brands from './Brands';
import List from './List';
import Footer from "./Footer";
import { useLocation } from 'react-router-dom';

function Detail() {

  const [aux, setAux] = useState([]);

  let {search} = useLocation();
    let query = new URLSearchParams(search);
    let type = query.get("type");
    let mark = query.get("brand");

    const title = () =>{
      if (type != null && mark == null) {
        setAux("Modelos "+ type.toUpperCase());
      } 
      else if (mark != null && type == null){
        setAux("Modelos "+mark.toUpperCase());
      }
      else if ((type && mark) == null){
        setAux("Todos los Modelos Disponibles");
      }
    }

    useEffect(() => {
      title()
    })

  return ( 
  <Container>
    <Imag></Imag>
      <Title1>Marcas Disponibles</Title1>
        <Brands />
      <Title3>{aux}</Title3>
        <List />
        <Footer/>
  </Container>
  )
}

export default Detail

const Title1 = styled.h3`
@media(max-width: 768px){
  display: none;
}
`
const Title3 = styled.h2`
  padding-top: 5vh;
}
`
const Container = styled.div`
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