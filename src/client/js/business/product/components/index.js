import React from 'react';
import styled from 'react-emotion';
import Slider from '../../common/components/slider';

const requireContext = require.context('../../../../img/products/', true, /^\.\/.*\.jpg$/);
const items = requireContext.keys().map(requireContext);

const Container = styled('div')`
    max-width: 800px;
    margin: 50px auto 0;
`;

const Product = () =>
    (<Container>
        <Slider items={items} />
    </Container>);

export default Product;
