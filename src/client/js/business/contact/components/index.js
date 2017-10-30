import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'react-emotion';
import GoogleMapReact from 'google-map-react';

import {side} from '../../common/components/presentation';

import Pin from '../../../../img/map-pin-red-md.png';

const Container = styled('div')`
    width: 1000px;
    margin: 0 auto;
    font-size: 30px;
    text-align: center;
`;

const Phone = styled('div')`
    color: #353675;
    margin: 50px 0;
    font-size: 40px;
    font-weight: 600;
`;

const Address = styled('div')`
    color: #353675;
    margin: 50px 0;
    font-weight: 600;
`;

const Hours = styled('div')`
    font-size: 20px;
    margin: 50px 0;
`;

const Transport = styled('span')`
    margin: 50px 0;
`;

const Day = styled('span')`
    font-weight: 600;
`;

const MARKER_SIZE = 25;
const greatPlaceStyle = {
    position: 'absolute',
    width: MARKER_SIZE,
    height: MARKER_SIZE * 1.6,
    left: -MARKER_SIZE / 2,
    top: -MARKER_SIZE / 2,
};

const area = css`
    ${side};
    margin: 4%;
    width: 42%;
`;

const map = css`
    ${area};    
    height: 600px;
    padding-top: 50px;
`;

const bus = css`
    color: white;
    padding: 3px;
    font-size: 16px;
    font-weight: bold;
    display: inline-block;
    vertical-align: middle;
`;

const b123 = css`
    ${bus};
    background-color: rgb(0, 139, 90);;
`;

const b126 = css`    
    ${bus};
    color: black;
    background-color: rgb(135, 211, 223);
`;

const b175 = css`
    ${bus};
    background-color: rgb(0, 108, 184);
`;

const m9 = css`
    font-size: 20px;
    line-height: 28px;
    font-weight: bold;
    border-radius: 100%;
    width: 30px;
    height: 30px;
    display: inline-block;
    vertical-align: middle;
    color: black;
    background-color: rgb(213, 201, 0);
`;

const Marker = () => <img style={greatPlaceStyle} src={Pin} alt="Marker" />;

const Contact = ({lat, lng, center, bootstrapURLKeys}) =>
    (<Container>
        <div className={map}>
            <GoogleMapReact
                bootstrapURLKeys={bootstrapURLKeys}
                defaultCenter={center}
                defaultZoom={16}
            >
                <Marker lat={lat} lng={lng} />
            </GoogleMapReact>
        </div>
        <div className={area}>
            <Phone>01 46 21 32 07</Phone>
            <Address>
                {'2 rue Rouget de L\'isle'}
                <br />
                Boulogne-Billancourt, France
            </Address>

            <Hours>
                <h3>{'heures d\'ouvertures:'}</h3>
                <Day>Lundi</Day>: 8h-22h<br />
                <Day>Mardi</Day>: 8h-22h<br />
                <Day>Mercredi</Day>: 8h-23h<br />
                <Day>Jeudi</Day>: 8h-22h<br />
                <Day>Vendredi</Day>: 8-23h<br />
                <Day>Samedi</Day>: 7h-17h<br />
                <Day>Dimanche</Day>: Ferme<br />
            </Hours>

            <Transport>
                Transports : <span className={b123}>123</span>, <span className={b126}>126</span>, <span className={b175}>175</span> et Metro ligne <span className={m9}>9</span><br />Arrêt : Marcel Sembat
            </Transport>
        </div>
    </Container>);

Contact.propTypes = {
    lat: PropTypes.number,
    lng: PropTypes.number,
    center: PropTypes.shape({
        lat: PropTypes.number,
        lng: PropTypes.number,
    }),
    bootstrapURLKeys: PropTypes.shape({
        language: PropTypes.string,
    }),
};

Contact.defaultProps = {
    lat: 48.832449,
    lng: 2.241246,
    center: {lat: 48.832449, lng: 2.241246},
    bootstrapURLKeys: {
        language: 'fr',
    },
};

export default Contact;
