import React from 'react';
import styled from 'react-emotion';

const Container = styled('div')`
    width: 800px;
    margin: 0 auto;
    font-size: 30px;
    text-align: center;
`;

const Phone = styled('div')`
    color: #337ab7;
    margin: 50px 0;
    font-weight: 600;
`;

const Address = styled('div')`
    color: #337ab7;
    margin: 50px 0;
    font-weight: 600;
`;

const Hours = styled('div')`
    margin: 50px 0;
`;

const Map = styled('span')`
    margin: 50px 0;
`;

const Day = styled('span')`
    font-weight: 600;
`;

const Contact = props =>
    <Container>
        <Phone>01 46 21 32 07</Phone>
        <Address>
            2 rue Rouget de L'isle
            <br/>
            Boulogne-Billancourt, France
        </Address>

        <Hours>
            <h3>heures d'ouvertures:</h3>
            <Day>Lundi</Day>: 8h-22h<br/>
            <Day>Mardi</Day>: 8h-22h<br/>
            <Day>Mercredi</Day>: 8h-23h<br/>
            <Day>Jeudi</Day>: 8h-22h<br/>
            <Day>Vendredi</Day>: 8-23h<br/>
            <Day>Samedi</Day>: 7h-17h<br/>
            <Day>Dimanche</Day>: Ferme<br/>
        </Hours>

        <Map>
            Transports
            Bus: 123, 126, 175 et Metro ligne 9<br/> --> Arrêt: Marcel Sembat
        </Map>
    </Container>;

export default Contact;
