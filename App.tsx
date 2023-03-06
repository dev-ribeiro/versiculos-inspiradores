/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {Home} from './src/screens/Home';
import {defaultTheme} from './src/themes/default';

export default function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <StatusBar
                backgroundColor="transparent"
                translucent
                barStyle="dark-content"
            />
            <SafeAreaView
                style={{
                    flex: 1,
                }}>
                <Home />
            </SafeAreaView>
        </ThemeProvider>
    );
}
