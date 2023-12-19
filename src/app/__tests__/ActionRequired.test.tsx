import ActionRequired from "../_components_assignments/ActionRequired";
import { render, screen } from '@testing-library/react';

describe('Action is Required Component', () => {
    it('Checks component when action is required', () => {
        render(<ActionRequired action={true} />);
        screen.getByText(/Action required/i);
        screen.getByRole('button');
    });
    it('Checks component when NO action is required', () => {
        render(<ActionRequired action={false} />);
        screen.getByText(/No action is required/i);
    })
})