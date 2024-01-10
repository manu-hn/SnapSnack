import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import About from '../components/nav-component/About';

test('should have h1 tag', () => { 
    render(<About />);

    const h1=screen.getAllByRole('heading');

    expect(h1.length).toBe(2);
 })