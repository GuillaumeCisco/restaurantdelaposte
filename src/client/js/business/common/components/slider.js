import React from 'react';
import {pure} from 'recompose';
import styled from 'react-emotion';
import {css} from 'emotion';

const Ul = styled('ul')`
    position: relative;
    margin: 0;
    padding: 0;
    & li {    
        list-style: none;
        position: absolute;
        width: 100%;
        height: ${props => props.height};
    };
`;

const fadeIn = css`
    opacity: 1;
`;

const fadeOut = css`
    opacity: 0;
`;

const img = (className, src) =>  css`
    composes: ${className};
    max-width: 100%;                                              
    transition: opacity 0.7s;
    background-image: url("${src}");
    background-size: cover;
    background-position: center center;
    height: 100%;
`;

class C extends React.Component {
    state = {
        current: 0,
    };

    componentDidMount() {
        const intervalId = setInterval(this.timer, this.props.speed);
        // store intervalId in the state so it can be accessed later:
        this.setState({intervalId: intervalId});
    }

    componentWillUnmount() {
        // use intervalId from the state to clear the interval
        clearInterval(this.state.intervalId);
    }

    timer = () => {
        // setState method is used to update the state
        const {items} = this.props;
        const current = this.state.current === items.length - 1 ? 0 : this.state.current + 1;
        this.setState({current});
    };

    render() {
        const {items, transitionSpeed, height} = this.props;

        return <Ul transitionSpeed={transitionSpeed} height={height}>
            {items.map((o, i) =>
                <li key={o}>
                    <div className={img(this.state.current === i ? fadeIn : fadeOut, o)}/>
                </li>,
            )}
        </Ul>;
    }
}

C.defaultProps = {
    speed: 3000,
    transitionSpeed: 0.7,
    items: [],
    height: 800,
};


export default pure(C);
