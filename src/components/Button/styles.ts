import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
    width: 100%;
    align-items: center;
    padding: 12px 0;
    background-color: ${({theme}) => theme.COLORS.BLUE_400};
    border-radius: 8px;
`;

export const Content = styled.Text`
    color: ${({theme}) => theme.COLORS.WHITE};
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    font-size: 14px;
`;
