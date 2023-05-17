// Copyright (c) Meta Platforms, Inc. and affiliates.. All Rights Reserved.

// import {fireEvent, render} from '@testing-library/react';
// import TestElements from '../TestElements'

// it('TestElements changes the text after click', () => {
//   const {queryByLabelText, getByLabelText} = render(
//     <TestElements labelOn="On" labelOff="Off" />,
//   );

//   expect(queryByLabelText(/off/i)).toBeTruthy();

//   fireEvent.click(getByLabelText(/off/i));

//   expect(queryByLabelText(/on/i)).toBeTruthy();
// });

import { render, fireEvent, screen } from "@testing-library/react";
import TestElements from '../TestElements'

//test block
test("increments counter", () => {
// render the component on virtual dom
render(<TestElements />);

//select the elements you want to interact with
const counter = screen.getByTestId("counter");
const incrementBtn = screen.getByTestId("increment");

//interact with those elements
fireEvent.click(incrementBtn);

//assert the expected result
expect(counter).toHaveTextContent("1");
});