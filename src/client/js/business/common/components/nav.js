import React from 'react';
import {css} from 'emotion';
import styled from 'react-emotion'
import Link from 'redux-first-router-link';
import {connect} from 'react-redux';

const Container = styled('div')`
    text-align: center;
    margin-bottom: 30px;
`;

const Ul = styled('ul')`
    border-top: 1px solid #ccc;
    margin-top: 30px;
    padding-top: 15px;
    & li {                
        margin: 0 50px; 
        display: inline;
        font-size: 16px;
    }
`;

class Nav extends React.Component {
    base = css`
        text-decoration: none;
        color: #444257;
    `;

    link = (route) => css`
        composes: ${this.base};
        color: ${this.props.location.type === route ? '#03070e' : '#444257'};
    `;
    h1 = css`
        composes: ${this.base};
        padding: 8px 0;
        font-size: 44px;
        font-weight: 200;
        border: 2px solid #ccc;        
        border-width: 2px 0;
    `;

    render() {
        return <Container>
            <h1>
                <Link to='/'  className={this.h1}>
                    Restaurant de la Poste
                </Link>
            </h1>
            <Ul>
                <li>
                    <Link to='/menu' className={this.link('MENU')}>
                        Menu
                    </Link>
                </li>
                <li>
                    <Link to='/products' className={this.link('PRODUCTS')}>
                        Produits
                    </Link>
                </li>
                <li>
                    <Link to='/contact' className={this.link('CONTACT')}>
                        Contact
                    </Link>
                </li>
                <li>
                    <Link to='/events' className={this.link('EVENTS')}>
                        Evenements
                    </Link>
                </li>
            </Ul>
        </Container>;
    }
}

const mapStateToProps = ({location}, ownProps) => ({location, ...ownProps});

export default connect(mapStateToProps)(Nav);
