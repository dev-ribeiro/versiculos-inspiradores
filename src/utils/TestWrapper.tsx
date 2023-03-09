import React from 'react';
import {ReactNode} from 'react';
import {ThemeProvider} from 'styled-components/native';
import {defaultTheme} from '../themes/default';

type Props = {
    children: ReactNode;
};

export function TestWrapper({children}: Props) {
    return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
}
