import React from 'react';

import { Container } from './Styles';

export const ReactLayout = (props) => {
    const {
        color = '#fff',
    } = props;

    return (
        <Container color={color}>
            react-layout
        </Container>
    );
};
