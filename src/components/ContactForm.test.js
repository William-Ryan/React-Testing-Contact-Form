import React from "react";
import { render, fireEvent, getByPlaceholderText, getByLabelText } from "@testing-library/react";
import ContactForm from "./ContactForm";

test('first Name, last Name and email inputs are rendered',  () => {
  //testing for all of our inputs are rendered
  const { getByPlaceholderText, getByTestId, getByLabelText } = render(<ContactForm />);
  getByLabelText(/First Name*/i);
  getByLabelText(/Last Name*/i);
  getByLabelText(/email*/i);
});

test ('form submit adds contacts to the list', () => {
  const { getByLabelText, getByTestId } = render(<ContactForm />);
  //querying for all the input nodes
    const firstNameInput = getByLabelText(/First Name*/i);
    const lastNameInput = getByLabelText(/Last Name*/i);
    const emailInput = getByLabelText(/email*/i);

    // use the change event to add text to each input

    fireEvent.change(firstNameInput, {target: {value: 'Test First'}});
    fireEvent.change(lastNameInput, {target: {value: 'Test Last'}});
    fireEvent.change(emailInput, {target: {value: 'email@email.com'}});

    expect(firstNameInput.value).toBe('Test First');
    expect(lastNameInput.value).toBe('Test Last');
    expect(emailInput.value).toBe('email@email.com');

//   //click on the button
    fireEvent.click(getByTestId(/submit/i));

//   assert
//   const nameText = getByLabelText(/Test First/i);
//   expect(nameText).toBeInTheDocument();

}); 