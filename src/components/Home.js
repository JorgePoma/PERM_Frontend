import React from 'react';
import styled from "styled-components";
import Section from "./Section";

import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";

function Home() {
    
    const cld = new Cloudinary({
        cloud: {
          cloudName: 'djw9lea2q'
        }
      });

    return (
        <Container>
            <Section 
                title="Modelos Deportivos"
                description="Modelos profesionales de pista"
                backgroundImg='https://res.cloudinary.com/djw9lea2q/image/upload/v1644777367/mm/Honda-Rebel-300-e1621200645713_pu3sn6.jpg'  
                leftBtnText="Ordena Ya"
                rightBtnText="Inventario Disponible"
            />
            <Section 
                title="Modelos Urbanos"
                description="Modelos profesionales de eléctricos"
                backgroundImg="https://res.cloudinary.com/djw9lea2q/image/upload/v1644777388/mm/20190712-HARLEY-DAVIDSON-LIVEWIRE-PRIMER-MOTO-ELECTRICA-01_y7h7mp.jpg"
                leftBtnText="Ordena Ya"
                rightBtnText="Inventario Disponible"
            />
            <Section 
                title="Modelos Motocross"
                description="Modelos estilo motocross"
                backgroundImg="https://res.cloudinary.com/djw9lea2q/image/upload/v1644777407/mm/motocross-2549359_1280_lcbc40.jpg"
                leftBtnText="Ordena Ya"
                rightBtnText="Inventario Disponible"
            />
            <Section 
                title="Modelos Clasicos"
                description="Modelos clásicos y elegantes"
                backgroundImg="https://res.cloudinary.com/djw9lea2q/image/upload/v1644777425/mm/motos-clasicas-triumph-bonneville_iqyrdo.jpg"
                leftBtnText="Ordena Ya"
                rightBtnText="Inventario Disponible"
            />
        </Container>
    )
}

export default Home;

const Container = styled.div`
    height: 100vh;
    z-index: 10;
`