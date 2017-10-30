import React from 'react';
import styled, {css} from 'react-emotion';

import {H1, side} from '../../common/components/presentation';

import slate from '../../../../img/slate.jpg';
import bg from '../../../../img/home/main3.jpg';


const Wrapper = styled('div')`
    margin: 30px auto 0;
    height: 100%;
    background-image: url("${bg}");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
`;

const Shade = styled('div')`
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
`;

const Container = styled('div')`    
    color: #fff;
    padding: 8% 15% 0;
    text-shadow: 3px 2px 3px #333;
`;

const Content = styled('div')`
    font-size: 24px;
    margin-top: 50px;    
    text-align: center;    
`;

const close = css`
    ${side}; 
    width: 350px;
    margin: 1%;     
`;

const card = css`
    margin-top: 10px;
    border: 3px solid #333;
    background-image: url("${slate}");
    background-position: center center;
    background-size: cover;
    color: #fff;
    padding: 10px;    
    text-align: center;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Amontillados';
    font-size: 80px;
    text-shadow: 3px 1px 1px black;
`;

const Ul = styled('ul')`
    margin: 10px 0 20px;
    padding-bottom: 20px;
    border-bottom: 1px dashed #353675;
    & li {                
        margin: 0 50px; 
        display: inline;
    }
`;

const Menu = props =>
    (<Wrapper>
        <Shade>
            <Container>
                <H1>Le Concept</H1>
                <Content>
                    <h3><i>Produits frais de saison variant tous les jours comprenant</i></h3>
                    <Ul>
                        <li>3 entrées</li>
                        <li>3 plats</li>
                        <li>un grand choix de desserts maison</li>
                    </Ul>
                    <div>
                        <div className={close}>
                            <h4>Formules à 13,00€</h4>
                            <div className={card}>
                                <div>
                                    Entrée + Plat<br /><i>ou</i><br />Plat + Dessert
                                </div>
                            </div>
                        </div>
                        <div className={close}>
                            <h4>Menu à 16,10€</h4>
                            <div className={card}>
                                <div>
                                    Entrée<br />Plat<br />Dessert<br />Boisson
                                </div>
                            </div>
                        </div>
                    </div>
                    <span>Plats à la carte à partir de 9,50€.</span>
                </Content>
            </Container>
        </Shade>
    </Wrapper>);

export default Menu;
