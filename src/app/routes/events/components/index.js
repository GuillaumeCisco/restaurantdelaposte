import React from 'react';
import styled from 'react-emotion';

import {Accroche, Inlinep, H1} from '../../common/components/presentation';

const Container = styled('div')`
    width: 800px;
    margin: 30px auto 0;
`;

const Content = styled('div')`
    margin-top: 70px;
    margin-left: 10px;
    font-size: 20px;
    justify-content: center; 
`;

const Home = props =>
    (<Container>
        <H1>Evenements</H1>
        <Content>
            <Accroche>D</Accroche>
            <Inlinep>e nombreux evenements sont organises regulierement.</Inlinep>
            <p>{'N\'hesitez pas a vous renseigner au restaurant.'}</p>
        </Content>
    </Container>);

export default Home;
