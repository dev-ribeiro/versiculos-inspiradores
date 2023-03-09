import React from 'react';
import {render} from '@testing-library/react-native';
import {Button} from '../';
import {TestWrapper} from '../../../utils/TestWrapper';

describe('Button', () => {
    it('the component rendered', () => {
        render(
            <TestWrapper>
                <Button content="TESTE" />
            </TestWrapper>,
        );
    });

    it('check content exists in component', () => {
        const {getByText} = render(
            <TestWrapper>
                <Button content="TESTE" />
            </TestWrapper>,
        );

        const content = getByText('TESTE');

        expect(content).toBeTruthy();
    });
});
