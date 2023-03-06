import React from 'react';
import {TouchableOpacityProps} from 'react-native/Libraries/Components/Touchable/TouchableOpacity';
import {Container, Content} from './styles';

type Props = TouchableOpacityProps & {
    content: string;
};

export function Button({content, ...props}: Props) {
    return (
        <Container {...props}>
            <Content>{content}</Content>
        </Container>
    );
}
