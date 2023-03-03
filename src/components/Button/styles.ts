import {TouchableOpacity} from 'react-native';
import styled, {css} from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
    width: 100%;
    align-items: center;
    padding: 12px 0;
    background-color: ${({theme}) => theme.COLORS.BLUE_400};
    border-radius: 8px;
`;

export const Content = styled.Text`
    ${({theme}) => css`
        color: ${theme.COLORS.WHITE};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.md}px;
    `};
`;
