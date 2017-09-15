import React from 'react';
import {css} from 'emotion';
import styled from 'react-emotion';
import Link from 'redux-first-router-link';
import {connect} from 'react-redux';

const Container = styled('div')`
    text-align: center;
    padding-top: 60px;
`;

const Ul = styled('ul')`
    border-top: 1px solid #ccc;
    margin-top: 30px;
    padding-top: 15px;
    & li {                
        margin: 0 5%; 
        display: inline-block;
        font-size: 16px;
    }
`;

const base = css`
        text-decoration: none;
        color: #444257;
    `;

const link = css`        
        composes: ${base};
        font-family: 'ShadedLarch';
        padding: 8px 0;
        font-size: 44px;
        font-weight: 200;
        border: 2px solid #ccc;        
        border-width: 2px 0;
    `;

class Nav extends React.Component {
    link = (route) => css`
        composes: ${base};
        color: ${this.props.location.type === route ? '#03070e' : '#444257'};
    `;

    render() {
        return <Container>
            <h1>
                <Link to='/' className={link}>
                    Restaurant de la Poste
                </Link>
            </h1>
            <Ul>
                <li>
                    <Link to='/menu' className={this.link('MENU')}>
                        La carte
                    </Link>
                </li>
                <li>
                    <Link to='/products' className={this.link('PRODUCTS')}>
                        Galerie
                    </Link>
                </li>
                <li>
                    <Link to='/events' className={this.link('EVENTS')}>
                        Evenements
                    </Link>
                </li>
                <li>
                    <Link to='/contact' className={this.link('CONTACT')}>
                        Informations pratiques
                    </Link>
                </li>
            </Ul>
        </Container>;
    }
}

const mapStateToProps = ({location}, ownProps) => ({location, ...ownProps});

export default connect(mapStateToProps)(Nav);
