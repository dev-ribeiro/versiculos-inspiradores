import {Quotes} from 'phosphor-react-native';
import styled, {css} from 'styled-components/native';

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
    ${({theme}) => css`
        color: ${theme.COLORS.BLUE_400};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE['2xl']}px;
    `}
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
    ${({theme}) => css`
        font-family: ${theme.FONT_FAMILY.ITALIC};
        font-size: ${theme.FONT_SIZE.xl}px;
    `}
    text-align: justify;
`;

export const Reference = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.md}px;
    `};
    width: 100%;
    text-align: center;
`;
