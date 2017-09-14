import React from 'react';
import {keyframes, css} from 'emotion';
import styled from 'react-emotion';
import Slider from '../../common/components/slider';

import {Accroche, inlineP, H1, side} from '../../common/components/presentation';
import Bg from '../../../../img/bg.jpg';

const requireContext = require.context('../../../../img/home/', true, /^\.\/.*\.jpg$/);
const items = requireContext.keys().map(requireContext);

const fade = keyframes`
  0% {opacity: 0} 
  100% {opacity: 1}
`;

const Container = styled('div')`
    width: 100%;
`;

const Content = styled('div')`
    margin-top: 70px;
    margin-left: 10px;
    font-size: 20px;
    text-align: justify;
    text-justify: inter-word;
`;

const img = css`
    width: 100%;    
`;

const animatedImg = css`
    composes: ${img};
    animation: ${fade} 0.7s;
`;

const hiddenImg = css`
    composes: ${img};
    visibility: hidden;
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

class Home extends React.Component {
    state = {
        imgLoaded: false,
    };
    onImgLoad = ({target: img}) => {
        this.setState({imgLoaded: true});
    };

    render() {
        return <Container>
            <img className={this.state.imgLoaded && typeof window !== 'undefined' ? animatedImg : hiddenImg} src={Bg}
                 alt="bg" onLoad={this.onImgLoad}/>
            {this.state.imgLoaded && <div className={wrapper}>
                <div className={left}>
                    <Slider items={items} height={500}/>
                </div>
                <div className={right}>
                    <H1>Le Restaurant de la Poste <br/>« Chez Robert »</H1>
                    <Content>
                        <Accroche>U</Accroche>
                        <inlineP>ne table traditionnelle renommée à Boulogne-Billancourt.
                            Installé depuis 30 ans en face du marché Billancourt (Marcel Sembat), Jean-Philippe et son
                            équipe vous accueillent pour déjeuner tous les midis et le soir autour d’un verre accompagné
                            de petits toast au bar.
                        </inlineP>

                        <p>En salle, la convivialité et la rapidité sont de mise, le chef prépare une cuisine
                            traditionnelle recherchée selon les produits frais de saison qu’il se procure au marché.
                            Les plats sont copieux, simples et raffinés.
                        </p>
                        <p>Depuis toujours, anciens ou nouveaux clients adeptes du concept « Chez Robert » se retrouvent
                            en ce lieu, pour partager l’amitié et la douceur d’un art de vivre lors d’un déjeuner.
                        </p>
                    </Content>
                </div>
            </div>
            }
        </Container>;
    }
}

export default Home;
