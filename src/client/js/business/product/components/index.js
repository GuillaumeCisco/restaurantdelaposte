import React from 'react';
import {css} from 'emotion';
import styled from 'react-emotion';
import Slider from 'react-slick';

import Seize from '!!file-loader!../../../../img/products/1664.jpg';
import Ananas from '!!file-loader!../../../../img/products/ananas.jpg';
import Antipasti from '!!file-loader!../../../../img/products/antipasti.jpg';
import Baba from '!!file-loader!../../../../img/products/baba.jpg';
import Biere from '!!file-loader!../../../../img/products/biere_terasse.jpg';
import Biere2 from '!!file-loader!../../../../img/products/biere_terasse2.jpg';
import Capuccino from '!!file-loader!../../../../img/products/capuccino.jpg';
import CotesRhone from '!!file-loader!../../../../img/products/cotes-du_rhone.jpg';
import Poulet from '!!file-loader!../../../../img/products/poulet.jpg';
import Celeri from '!!file-loader!../../../../img/products/celeri.jpg';
import Colin from '!!file-loader!../../../../img/products/colin.jpg';
import Hareng from '!!file-loader!../../../../img/products/hareng.jpg';
import Canard from '!!file-loader!../../../../img/products/canard.jpg';
import Flan from '!!file-loader!../../../../img/products/abricot.jpg';
import Mousse from '!!file-loader!../../../../img/products/mousse.jpg';
import Paris from '!!file-loader!../../../../img/products/paris.jpg';
import Poireaux from '!!file-loader!../../../../img/products/poireaux.jpg';
import Riz from '!!file-loader!../../../../img/products/riz.jpg';
import Roti from '!!file-loader!../../../../img/products/roti.jpg';
import Dinde from '!!file-loader!../../../../img/products/dinde.jpg';
import Sirop from '!!file-loader!../../../../img/products/sirop.jpg';
import Taboule from '!!file-loader!../../../../img/products/taboule.jpg';
import Taggliatelle from '!!file-loader!../../../../img/products/taggliatelle.jpg';
import Tarte from '!!file-loader!../../../../img/products/tarte.jpg';
import the from '!!file-loader!../../../../img/products/the.jpg';
import Tiramisu from '!!file-loader!../../../../img/products/tiramisu.jpg';
import Tomate from '!!file-loader!../../../../img/products/tomate.jpg';
import Ile from '!!file-loader!../../../../img/products/ile.jpg';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    swipe: false,
    //arrows: false,
};

const img = css`
    width: 100%;
`;

const Container = styled('div')`
    padding: 50px 200px 10px;
`;

const Home = props =>
    <Container>
        <Slider {...settings}>
            <img className={img} src={Seize} alt="1664"/>
            <img className={img} src={Ananas} alt="Ananas frais"/>
            <img className={img} src={Antipasti} alt="Anti-pasti fait maison"/>
            <img className={img} src={Baba} alt="Baba au rhum, fait maison"/>
            <img className={img} src={Biere} alt="biere"/>
            <img className={img} src={Biere2} alt="biere 2"/>
            <img className={img} src={Capuccino} alt="capuccino"/>
            <img className={img} src={CotesRhone} alt="cote du rhone"/>
            <img className={img} src={Poulet} alt="Cuisse de Poulet Fermier du marché, fait maison"/>
            <img className={img} src={Celeri}
                 alt="Céleri remoulade, Rôti de Veau farci aux champignons des bois, Salades d'agrumes fraîche, Le tout fait maison"/>
            <img className={img} src={Colin}
                 alt="Filet de Colin et ses pommes de terre - choufleur, beurre blanc, fait maison"/>
            <img className={img} src={Hareng} alt="Filet de Hareng et ses pommes de terre à l'huile fait maison"/>
            <img className={img} src={Canard}
                 alt="Filet de Magret de Canard au miel et au thin et sa purée,Le tout fait maison"/>
            <img className={img} src={Flan} alt="Flan à l'abricot fait maison"/>
            <img className={img} src={Mousse} alt="Mousse au chocolat, faite maison"/>
            <img className={img} src={Paris} alt="Paris-Brest fait maison"/>
            {/*<img className={img} src={Poireaux} alt="Poireaux vinaigrette fait maison"/>*/}
            <img className={img} src={Paris} alt="Paris-Brest fait maison"/>
            <img className={img} src={Riz} alt="Riz au lait façon grand-mère fait maison"/>
            <img className={img} src={Paris} alt="Paris-Brest fait maison"/>
            {/*<img className={img} src={Roti} alt="Rôti de Porc sauce poivre et ses pommes sauté, fait maison"/>*/}
            {/*<img className={img} src={Dinde} alt="Sauté de Dinde et sa sauce provençale faite maison"/>*/}
            <img className={img} src={Sirop} alt="Sirop"/>
            {/*<img className={img} src={Taboule} alt="Taboulé, fait maison"/>*/}
            <img className={img} src={Taggliatelle} alt="Taggliatelle Sauce Carbornara fait maison"/>
            <img className={img} src={Tarte} alt="Tarte au Citron Meringué faite maison"/>
            <img className={img} src={the} alt="The"/>
            {/*<img className={img} src={Tiramisu} alt="Tiramitsu aux fruits rouge, fait maison"/>*/}
            <img className={img} src={Tomate} alt="Tomate Feta et son pesto fait maison"/>
            <img className={img} src={Ile} alt="Île Flotante, fait maison"/>
        </Slider>
    </Container>;

export default Home;
