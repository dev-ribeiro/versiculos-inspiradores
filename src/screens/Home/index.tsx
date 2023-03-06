/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {API_URL, SECRET_KEY} from '@env';
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
import {Loading} from '../../components/Loading';

type Data = {
    selectedBook: string;
    selectedChapterNumber: string;
    selectedVerseNumber: string;
    selectedVerse: string;
};

export function Home() {
    const [data, setData] = useState({} as Data);
    const [loading, setLoading] = useState(false);

    async function fetchData() {
        setLoading(true);
        try {
            fetch(`${API_URL}/verses/random`, {headers: {key: SECRET_KEY}})
                .then(response => response.json())
                .then(chapter => setData(chapter));
        } catch (error: any) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Container>
            <Wrapper>
                <Header />
                <Title>Mensagem de Deus para você...</Title>
                {loading ? (
                    <Loading />
                ) : (
                    <VerseContainer>
                        <QuoteIcon style={{alignSelf: 'flex-start'}} />
                        <Verse>{data.selectedVerse}</Verse>
                        <QuoteIcon style={{alignSelf: 'flex-end'}} />
                        <Reference>{`${data.selectedBook} ${data.selectedChapterNumber}:${data.selectedVerseNumber}`}</Reference>
                    </VerseContainer>
                )}
            </Wrapper>
            <Button content="Buscar nova mensagem" onPress={fetchData} />
        </Container>
    );
}
