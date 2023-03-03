/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Button} from '../../components/Button';
import {Header} from '../../components/Header';
import {
    Container,
    QuoteIcon,
    Reference,
    Title,
    Verse,
    VerseContainer,
    Wrapper,
} from './styles';

export function Home() {
    return (
        <Container>
            <Wrapper>
                <Header />
                <Title>Mensagem de Deus para você...</Title>
                <VerseContainer>
                    <QuoteIcon style={{alignSelf: 'flex-start'}} />
                    <Verse>
                        Oro também para que os olhos do coração de vocês sejam
                        iluminados, a fim de que vocês conheçam a esperança para
                        a qual ele os chamou, as riquezas da gloriosa herança
                        dele nos santos.
                    </Verse>
                    <QuoteIcon style={{alignSelf: 'flex-end'}} />
                    <Reference>Efésios 1:18</Reference>
                </VerseContainer>
            </Wrapper>
            <Button content="Buscar nova mensagem" />
        </Container>
    );
}
