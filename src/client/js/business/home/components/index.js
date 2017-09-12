import React from 'react';
import {css} from 'emotion';
import styled from 'react-emotion';
import Slider from 'react-slick';

import {Accroche, inlineP, H1, side} from '../../common/components/presentation';

import Bg from '!!file-loader!../../../../img/bg.jpg';

import Bar from '!!file-loader!../../../../img/home/bar.jpg';
import Main from '!!file-loader!../../../../img/home/main.jpg';
import Main2 from '!!file-loader!../../../../img/home/main2.jpg';
import Main3 from '!!file-loader!../../../../img/home/main3.jpg';
import Terasse from '!!file-loader!../../../../img/home/terasse.jpg';
import Terasse2 from '!!file-loader!../../../../img/home/terasse2.jpg';
import PetiteSalle from '!!file-loader!../../../../img/home/petite_salle.jpg';
import PetiteSalle2 from '!!file-loader!../../../../img/home/petite_salle2.jpg';
import PetiteSalle3 from '!!file-loader!../../../../img/home/petite_salle3.jpg';
import Tableau from '!!file-loader!../../../../img/home/tableau.jpg';

const Container = styled('div')`
    width: 100%;
`;

const Content = styled('div')`
    margin-top: 70px;
    margin-left: 10px;
    font-size: 20px;
    justify-content: center; 
`;

const img = css`
    width: 100%;
`;

const wrapper = css`
    margin: 30px auto;
    width: 80%;
`;

const left = css`
    composes: ${side};
    padding: 10px 2% 0;
    width: 46%;   
`;

const right = css`
    composes: ${side};
    padding: 0 4%;
    width: 42%;
`;

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    swipe: false,
    arrows: false,
};

const Home = props =>
    <Container>
        <img className={img} src={Bg} alt="bg"/>
        <div className={wrapper}>
            <div className={left}>
                <Slider {...settings}>
                    <img className={img} src={Bar} alt="bar"/>
                    <img className={img} src={Main} alt="main"/>
                    <img className={img} src={Main2} alt="main 2"/>
                    <img className={img} src={Main3} alt="main 3"/>
                    <img className={img} src={Terasse} alt="terasse"/>
                    <img className={img} src={Terasse2} alt="terasse 2"/>
                    <img className={img} src={PetiteSalle} alt="petite salle"/>
                    <img className={img} src={PetiteSalle2} alt="petite salle 2"/>
                    <img className={img} src={PetiteSalle3} alt="petite salle 3"/>
                    <img className={img} src={Tableau} alt="Tableau"/>
                </Slider>
            </div>
            <div className={right}>
                <H1>LE RESTAURANT DE LA POSTE <br/>« Chez Robert »</H1>
                <Content>
                    <Accroche>U</Accroche>
                    <inlineP>ne table traditionnelle renommée à Boulogne-Billancourt.
                        Installé depuis 30 ans en face du marché Billancourt (Marcel Sembat), Jean-Philippe et son
                        équipe
                        vous accueillent pour déjeuner tous les midis et le soir autour d’un verre accompagné de petits
                        toast au bar.</inlineP>

                    <p>En salle, la convivialité et la rapidité sont de mise, le chef prépare une cuisine
                        traditionnelle recherchée selon les produits frais de saison qu’il se procure au marché.
                        Les plats sont copieux, simples et raffinés.
                    </p>
                    <p>Depuis toujours, anciens ou nouveaux clients adeptes du concept « Chez Robert » se retrouvent en
                        ce lieu, pour partager l’amitié et la douceur d’un art de vivre lors d’un déjeuner.
                    </p>
                </Content>
            </div>
        </div>
    </Container>;

export default Home;
