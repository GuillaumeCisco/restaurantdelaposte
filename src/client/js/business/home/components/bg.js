import React from 'react';
import PropTypes from 'prop-types';
import {keyframes, css} from 'emotion';
import {onlyUpdateForKeys} from 'recompose';
import Bg from '../../../../img/bg.jpg';

const fade = keyframes`
  0% {opacity: 0} 
  100% {opacity: 1}
`;

const img = css`
    width: 100%;    
`;

const animatedImg = css`
    ${img};
    animation: ${fade} 0.3s;
`;

const hiddenImg = css`
    ${img};
    visibility: hidden;
`;

class Background extends React.Component {
    // handle server side rendering if image loaded before javascript handler
    componentDidMount() {
        if (this.img.complete) {
            this.props.onLoad();
        }
    }

    render() {
        const {loaded, onLoad} = this.props;
        return (<img
            className={loaded && typeof window !== 'undefined' ? animatedImg : hiddenImg}
            ref={(o) => {
                this.img = o;
            }}
            src={Bg}
            alt="bg"
            onLoad={onLoad}
        />);
    }
}

Background.propTypes = {
    loaded: PropTypes.bool.isRequired,
    onLoad: PropTypes.func.isRequired,
};

export default onlyUpdateForKeys(['loaded'])(Background);
