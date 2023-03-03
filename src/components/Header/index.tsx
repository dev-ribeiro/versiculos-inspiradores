import React from 'react';
import {Container, Icon, IconWrapper, Logo} from './styles';
import LogoImg from '../../assets/logo.png';

export function Header() {
    return (
        <Container>
            <Logo source={LogoImg} defaultSource={LogoImg} />
            <IconWrapper>
                <Icon />
            </IconWrapper>
        </Container>
    );
}
