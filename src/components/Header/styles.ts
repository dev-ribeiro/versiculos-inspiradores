import {Image} from 'react-native';
import {Question} from 'phosphor-react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled(Image)`
    width: 100px;
    height: 100px;
`;

export const IconWrapper = styled.View``;

export const Icon = styled(Question)``;
