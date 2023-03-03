import {Quotes} from 'phosphor-react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
    padding: 0 24px;
    padding-bottom: 42px;
    flex: 1;
    justify-content: space-between;
    background-color: ${({theme}) => theme.COLORS.GRAY_100};
`;

export const Wrapper = styled.View`
    justify-content: flex-start;
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.COLORS.BLUE_400};
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    font-size: 18px;
    width: 100%;
    text-align: center;
`;

export const VerseContainer = styled.View``;

export const QuoteIcon = styled(Quotes).attrs(({theme}) => ({
    size: 32,
    color: theme.COLORS.BLUE_400,
}))`
    margin: 8px 0;
`;

export const Verse = styled.Text`
    font-family: ${({theme}) => theme.FONT_FAMILY.ITALIC};
    font-size: 16px;
    text-align: justify;
`;

export const Reference = styled.Text`
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    font-size: 14px;
    width: 100%;
    text-align: center;
`;
