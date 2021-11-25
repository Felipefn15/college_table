import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';



// const tableBodyRowFirst = screen.getByTestId('tableBodyRow-0');
// const tableBodyCellFirsName = screen.getByTestId('tableBodyCellFirsName-0');
// const tableBodyCellLastName = screen.getByTestId('tableBodyCellLastName-0');
// const tableBodyCellDateBirth = screen.getByTestId('tableBodyCellDateBirth-0');
// const tableBodyCellCourse = screen.getByTestId('tableBodyCellCourse-0');
// const tableBodyCellHours = screen.getByTestId('tableBodyCellHours-0');
// const tableBodyCellPrice = screen.getByTestId('tableBodyCellPrice-0');
// const tableBodyCellEditButton = screen.getByTestId('tableBodyCellEditButton-0');
// const tableBodyCellDeleteButton = screen.getByTestId('tableBodyCellDeleteButton-0');

test('renders empty table', () => {
  render(<App />);
  const mainContainer = screen.getByTestId('mainContainer');
  const showModalButton = screen.getByTestId('showModalButton');
  const tableContainer = screen.getByTestId('tableContainer');
  const tableHead = screen.getByTestId('tableHead');
  const tableHeadRow = screen.getByTestId('tableHeadRow');
  const tableHeadCellFirstName = screen.getByTestId('tableHeadCellFirstName');
  const tableHeadCellLastName = screen.getByTestId('tableHeadCellLastName');
  const tableHeadCellDateBirth = screen.getByTestId('tableHeadCellDateBirth');
  const tableHeadCellCourse = screen.getByTestId('tableHeadCellCourse');
  const tableHeadCellHours = screen.getByTestId('tableHeadCellHours');
  const tableHeadCellPrice = screen.getByTestId('tableHeadCellPrice');
  const tableBody = screen.getByTestId('tableBody');
  expect(mainContainer).toBeInTheDocument();
  expect(showModalButton).toBeInTheDocument();
  expect(tableContainer).toBeInTheDocument();
  expect(tableHead).toBeInTheDocument();
  expect(tableHeadRow).toBeInTheDocument();
  expect(tableHeadCellFirstName).toBeInTheDocument();
  expect(tableHeadCellLastName).toBeInTheDocument();
  expect(tableHeadCellDateBirth).toBeInTheDocument();
  expect(tableHeadCellCourse).toBeInTheDocument();
  expect(tableHeadCellHours).toBeInTheDocument();
  expect(tableHeadCellPrice).toBeInTheDocument();
  expect(tableBody).toBeInTheDocument();
});

test('adding student', async () => {
  render(<App />);
  //Table 
  const tableBody = screen.getByTestId('tableBody');

  const showModalButton = screen.getByTestId('showModalButton');
  fireEvent.click(showModalButton)
  //Modal Container
  const modalContainer = screen.getByTestId('modalContainer');
  const formWrapper = screen.getByTestId('formWrapper');
  const titleModal = screen.getByTestId('titleModal');
  //Form Labels
  const inputsContainer = screen.getByTestId('inputsContainer');
  const firstNameLable = screen.getByTestId('firstNameLable');
  const lastNameLable = screen.getByTestId('lastNameLable');
  const dateBirthLable = screen.getByTestId('dateBirthLable');
  const courseLable = screen.getByTestId('courseLable');
  const hoursLable = screen.getByTestId('hoursLable');
  const priceLabel = screen.getByTestId('priceLabel');
  //Form Inputs
  const firstNameInput = screen.getByTestId('firstNameInput');
  const lastNameInput = screen.getByTestId('lastNameInput');
  const dateBirthInput = screen.getByTestId('dateBirthInput');
  const courseInput = screen.getByTestId('courseInput');
  const hoursInput = screen.getByTestId('hoursInput');
  const priceInput = screen.getByTestId('priceInput');
  const addStudentButton = screen.getByTestId('addStudentButton');
  fireEvent.change(firstNameInput, { target: { value: 'Felipe' } })
  fireEvent.change(lastNameInput, { target: { value: 'Franca' } })
  fireEvent.change(dateBirthInput, { target: { value: '1997-01-15' } })
  fireEvent.change(courseInput, { target: { value: 'Test Course' } })
  fireEvent.change(hoursInput, { target: { value: '75' } })
  fireEvent.change(priceInput, { target: { value: '850' } })
  fireEvent.click(addStudentButton)

  const tableBodyRowFirst = screen.getByTestId('tableBodyRow-0');
  const tableBodyCellFirsName = screen.getByTestId('tableBodyCellFirsName-0');
  const tableBodyCellLastName = screen.getByTestId('tableBodyCellLastName-0');
  const tableBodyCellDateBirth = screen.getByTestId('tableBodyCellDateBirth-0');
  const tableBodyCellCourse = screen.getByTestId('tableBodyCellCourse-0');
  const tableBodyCellHours = screen.getByTestId('tableBodyCellHours-0');
  const tableBodyCellPrice = screen.getByTestId('tableBodyCellPrice-0');
  const tableBodyCellEditButton = screen.getByTestId('tableBodyCellEditButton-0');
  const tableBodyCellDeleteButton = screen.getByTestId('tableBodyCellDeleteButton-0');

  expect(tableBodyCellFirsName.textContent).toBe('Felipe')
  expect(tableBodyCellLastName.textContent).toBe('Franca')
  expect(tableBodyCellDateBirth.textContent).toBe('1997-01-15')
  expect(tableBodyCellCourse.textContent).toBe('Test Course')
  expect(tableBodyCellHours.textContent).toBe('75')
  expect(tableBodyCellPrice.textContent).toBe('850')

  //Removing Row Process
  fireEvent.click(tableBodyCellDeleteButton)
  expect(tableBody.firstChild).toBeNull();

});
