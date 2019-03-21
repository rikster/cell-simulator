import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Simulator from '../Simulator';

afterEach(() => {
	cleanup();
});

test('<Simulator />', () => {
	render(<Simulator />);
});