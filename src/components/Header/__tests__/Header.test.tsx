import React from 'react';
import {Header} from '../';
import {render} from '@testing-library/react-native';
import {TestWrapper} from '../../../utils/TestWrapper';

describe('Header', () => {
    test('the component rendered', () => {
        render(
            <TestWrapper>
                <Header />
            </TestWrapper>,
        );
    });
});
