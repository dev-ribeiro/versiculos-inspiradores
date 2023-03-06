import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    width: 100%;
    padding: 32px;
    justify-content: center;
    align-items: center;
`;

export const LoadingSpinner = styled.ActivityIndicator.attrs(({theme}) => ({
    size: 'large',
    color: theme.COLORS.BLUE_400,
}))``;
