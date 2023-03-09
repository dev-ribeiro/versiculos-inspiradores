import React from 'react';
import {Header} from '../';
import {render} from '@testing-library/react-native';

describe('Header', () => {
    test('the component rendered', () => {
        render(<Header />);
    });
});
