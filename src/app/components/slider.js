import React from 'react';
import PropTypes from 'prop-types';
import {pure} from 'recompose';
import styled, {css} from 'react-emotion';

const Ul = styled('ul')`
    position: relative;
    margin: 0;
    padding: 0;
    & li {    
        list-style: none;
        position: absolute;
        width: 100%;
        height: ${props => props.height}px;
    };
`;

const fadeIn = css`
    opacity: 1;
`;

const fadeOut = css`
    opacity: 0;
`;

const img = (className, src, transitionSpeed) => css`
    ${className};
    max-width: 100%;                                              
    transition: opacity ${transitionSpeed}s;
    background-image: url("${src}");
    background-size: cover;
    background-position: center center;
    height: 100%;
`;

class Slider extends React.Component {
    state = {
        current: 0,
    };

    componentDidMount() {
        // store intervalId in the state so it can be accessed later:
        this.onMount(intervalId => this.setState({intervalId}));
    }

    componentWillUnmount() {
        // use intervalId from the state to clear the interval
        clearInterval(this.state.intervalId);
    }

    onMount = callback => callback(setInterval(this.timer, this.props.speed));

    timer = () => {
        // setState method is used to update the state
        const {items} = this.props;
        const current = this.state.current === items.length - 1 ? 0 : this.state.current + 1;
        this.setState({current});
    };

    render() {
        const {items, transitionSpeed, height} = this.props;

        return (<Ul height={height}>
            {items.map((o, i) =>
                (<li key={o}>
                    <div className={img(this.state.current === i ? fadeIn : fadeOut, o, transitionSpeed)} />
                </li>),
            )}
        </Ul>);
    }
}

Slider.propTypes = {
    speed: PropTypes.number,
    items: PropTypes.arrayOf(PropTypes.string),
    transitionSpeed: PropTypes.number,
    height: PropTypes.number,
};

Slider.defaultProps = {
    speed: 3000,
    transitionSpeed: 0.7,
    items: [],
    height: 800,
};


export default pure(Slider);
