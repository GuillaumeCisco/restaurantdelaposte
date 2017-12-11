import styled, {css} from 'react-emotion';

export const H1 = styled('h1')`
    position: relative;
    font-size: 32px;
    font-family: 'ShadedLarch';
    &:after {
        content: '';
        left: -20px;
        bottom: -25px;
        position: absolute;
        width: 100px;
        height: 4px;
        background-color: #353675;
    }
`;

export const Accroche = styled('span')`
    font-size: 70px;
    left: -25px;
    margin-right: -25px;
    position: relative;
`;

export const Inlinep = styled('p')`
    display: inline;
`;

export const side = css`
    display: inline-block;
    vertical-align: top;
    width: 50%;
`;
