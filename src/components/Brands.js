import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Brands() {
    const motos= ["suzuki", "yamaha", "honda", "ktm" ,"harley-davidson" ]
  return(
    <Container>
        <Wrap>
        <Link to ={`/details?brand=${motos[0]}`}>
        <img src="https://res.cloudinary.com/djw9lea2q/image/upload/v1644779029/mm/banners/Suzuki-logo-2_w0g7vt.jpg" alt=''/></Link>   
        </Wrap>
        <Wrap>
        <Link to ={`/details?brand=${motos[1]}`} >
            <img src="https://res.cloudinary.com/djw9lea2q/image/upload/v1644779046/mm/banners/257-2576667_yamaha-transparent-png-yamaha-logo-black-png_mmtwlp.jpg" alt=''/></Link>
        </Wrap>
        <Wrap>
        <Link to ={`/details?brand=${motos[2]}`} >
            <img src="https://res.cloudinary.com/djw9lea2q/image/upload/v1644779068/mm/banners/images_qhtctx.png" alt=''/></Link>
        </Wrap>
        <Wrap>
        <Link to ={`/details?brand=${motos[3]}`} >   
            <img src="https://res.cloudinary.com/djw9lea2q/image/upload/v1644779089/mm/banners/ktm-racing-1_uwxwff.svg" alt=''/></Link>
        </Wrap>
        <Wrap>
        <Link to ={`/details?brand=${motos[4]}`} >
            <img src="https://res.cloudinary.com/djw9lea2q/image/upload/v1644779115/mm/banners/isologo-harley_qubq7k.png" alt=''/></Link>
        </Wrap>
    </Container>
  ) 
}

export default Brands;
//configuracion para la lista de marcas
const Container = styled.div`
    margin-top: 30px;
    margin-bottom: 30px;
    display: grid;
    padding: 0px 0px 26px;
    grid-gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    @media(max-width: 768px){
        display: none;
    }

`
const Wrap = styled.div`
    border-radius: 10px;
    cursor: pointer;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0/69%) 0px 26px 30px -10px,
    rgb(0 0 0/33%) 0px 13px 10px -15px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 50px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -16px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
    }
`