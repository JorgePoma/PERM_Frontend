import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';


function ListUnsave() {
    const { user, isAuthenticated } = useAuth0();
    const [Motos, setMotos] = useState([]);
    //const {Email, setEmail} = useState();
    let Mot = {};
    let e = {};
    //obtener valores de URL
    let { search } = useLocation();

    //setEmail(user.email);
    //console.log(Email)

    const loadMotos = async (correo) => {
        let email = user.email;
        const response = await fetch(`http://localhost:4000/listsave-moto/${email}`);
        const data = await response.json()
        console.log(data)
        setMotos(data);
    }
/*
    const loadMotosType = async () => {
        const response = await fetch(`http://localhost:4000/get-motos/type/${type}`)
        const data = await response.json()
        setMotos(data);
        console.log(data);
    }

    const loadMotosBrand = async () => {
        const response = await fetch(`http://localhost:4000/get-motos/mark/${mark}`)
        const data = await response.json()
        setMotos(data);
        console.log(data);
    }
*/
    const UnsaveMotoUsuario = async (correo, model) => {
        console.log(correo, model);
        Mot = { correo: correo ,model: model};
        const response = await fetch(`http://localhost:4000/unsave-moto`, {
            method: "POST",
            body: JSON.stringify(Mot),
            headers: { "Content-Type": "application/json" },
        });
        const data = await response.json()
        console.log(data);
    }
    
    const selectResult = () => {
        loadMotos(user.email);
        return true;
    }
    
    useEffect(() => {
        selectResult();
    },[Motos])

    return (

        <Container >
            <>
                {Motos.map((moto, index) => (
                    <Content key={index}>
                        <Wrap>
                            <img src={moto.img} />
                        </Wrap>
                        <Description>
                            <h3>{moto.model}</h3>
                            <br />
                            <h5>{moto.description}</h5>
                            <Button>{isAuthenticated && (<Add onClick={() => {
                                UnsaveMotoUsuario(user.email, moto.model)}}>Delete</Add>)}
                            </Button>
                        </Description>
                    </Content>
                ))}
            </>
        </Container>
    )
}

export default ListUnsave;

const Container = styled.div`
    margin-bottom: 30px;
    display: grid;
    padding: 36px;
    grid-gap: 36px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    @media(max-width: 820px){
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
`
const Content = styled.div`
    background-color: white;
    display: grid;
    padding: 0px 0px 26px;
    grid-gap: 25px;
    grid-template-columns: repeat(2, minmax(0, 1fr)); 
    border-radius: 10px;
    cursor: pointer;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0/69%) 0px 26px 30px -10px,
    rgb(0 0 0/33%) 0px 13px 10px -15px;
    //transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    //&:hover {
    //    box-shadow: rgb(0 0 0 / 80%) 0px 40px 50px -16px,
    //    rgb(0 0 0 / 72%) 0px 30px 22px -16px;
    //    transform: scale(1.05);
    //    border-color: rgba(249, 249, 249, 0.8);
    //}
    @media(max-width: 600px){
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
`
const Wrap = styled.div`
    img {
        margin-top: 1vh;
        width: 40vh;
        height: 100%;
        //object-fit: cover;
        padding: 0vh;
    }
`
const Description = styled.div`
    padding: 4vh;    
    //padding-top: 8vh;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
`

const Add = styled.button`
    background-color: #DA5757;
    height: 40px;
    width: 76px;
    color white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    //margin: 8px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 50px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -16px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
    }
`

const Button = styled.div`
    color rgba(0.0.0.0 .1);
    display: flex;
    justify-content: center;
    align-items: center;
    //bottom: 0;
    grid-column: 1;
    grid-row: 5;
`