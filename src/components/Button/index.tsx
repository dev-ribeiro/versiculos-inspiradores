import React from 'react';
import {Container, Content} from './styles';

type Props = {
    content: string;
};

export function Button({content}: Props) {
    return (
        <Container>
            <Content>{content}</Content>
        </Container>
    );
}
