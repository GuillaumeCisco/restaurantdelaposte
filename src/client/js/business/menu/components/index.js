import React from 'react';
import styled from 'react-emotion';
import {css} from 'emotion';

import {Accroche, inlineP, H1, side} from '../../common/components/presentation';

const Container = styled('div')`
    margin: 30px auto 0;
    width: 1000px;
`;

const Content = styled('div')`
    margin-top: 50px;
    font-size: 26px;
    text-align: center;
`;

const close = css`
    composes: ${side}; 
    width: 300px;
    margin: 1%;     
`;

const card = css`
    margin-top: 10px;
    border-radius: 10px;
    border: 1px solid #ccc;
    background-color: #222;
    color: #fff;
    padding: 10px;    
    text-align: center;
    height: 150px;
`;

const Ul = styled('ul')`
    margin: 10px 0 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #ccc;
    & li {                
        margin: 0 50px; 
        display: inline;
    }
`;

const Menu = props =>
    <Container>
        <H1>Le concept</H1>
        <Content>
            <h3>Produits frais de saison variant tous les jours comprenant</h3>
            <Ul>
                <li>3 entrées</li>
                <li>3 plats</li>
                <li>un grand choix de desserts maison</li>
            </Ul>
            <div>
                <div className={close}>
                    <h4>Formules à 13,00€</h4>
                    <div className={card}>
                        entrée + plat<br/>OU<br/>plat + dessert
                    </div>
                </div>
                <div className={close}>
                    <h4>Menu à 16,10€</h4>
                    <div className={card}>
                        entrée<br/>plat<br/>dessert<br/>boisson
                    </div>
                </div>
            </div>
            <span>Plats à la carte à partir de 9,50€.</span>
        </Content>

    </Container>;

export default Menu;
