import React, { useState, useEffect } from 'react';
import { MainContainer, ButtonContainer, TableWrapper, ModalContainer, FormWrapper, ItemWrapper, Title, Label, ItemsContainer, ButtonWrapper, ActionButton, CloseButton } from './style.js';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Modal, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';


interface Student {
  firstName: string;
  lastName: string;
  dateBirth: string;
  course: string;
  hours: string;
  price: number;
}

function App() {
  const [showModal, setShowModal] = useState(false)
  const [students, setStudents] = useState<Student[]>([])
  const [studentEdit, setStudentEdit] = useState<Student>({
    firstName: "",
    lastName: "",
    dateBirth: "",
    course: "",
    hours: "",
    price: 0
  })
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#F9FAFB",
      color: "#828282",
      fontSize: 12,
      borderColor: "#E5E7EB",
      borderWidth: 1,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      color: "#828282",
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: "#FFFFFF",
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  const insertStudent = (student: Student) => {

    setStudents([...students, student])
    setShowModal(false)
  }

  const setDeleteStudent = (index: number) => {
    const newStudents = [...students]
    newStudents.splice(index, 1)
    setStudents(newStudents)
  }

  const studentModal = () => {
    let student: Student = studentEdit.firstName !== "" ? studentEdit : {
      firstName: "",
      lastName: "",
      dateBirth: "",
      course: "",
      hours: "",
      price: 0
    };
    return (
      <Modal
        open={showModal}
      >
        <ModalContainer data-testid="modalContainer">
          <FormWrapper data-testid="formWrapper">
            <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
              <Title data-testid="titleModal">Add Student</Title>
              <CloseButton onClick={() => setShowModal(false)}>X</CloseButton>
            </div>
            <ItemsContainer data-testid="inputsContainer">
              <ItemWrapper>
                <Label data-testid="firstNameLable">
                  First Name
                </Label>
                <TextField inputProps={{ "data-testid": "firstNameInput" }} defaultValue={student.firstName} type="text" id="firstNameInput" variant="outlined" style={{ borderRadius: "6px" }} onChange={(e) => { student.firstName = e.target.value }} />
              </ItemWrapper>
              <ItemWrapper>
                <Label data-testid="lastNameLable">
                  Last Name
                </Label>
                <TextField inputProps={{ "data-testid": "lastNameInput" }} defaultValue={student.lastName} type="text" id="lastNameInput" variant="outlined" style={{ borderRadius: "6px" }} onChange={(e) => { student.lastName = e.target.value }} />
              </ItemWrapper>
              <ItemWrapper>
                <Label data-testid="dateBirthLable">
                  Date of Birth
                </Label>
                <TextField inputProps={{ "data-testid": "dateBirthInput" }} defaultValue={student.dateBirth} type="date" id="dateBirthInput" variant="outlined" style={{ borderRadius: "6px" }} onChange={(e) => { student.dateBirth = e.target.value }} />

              </ItemWrapper>
              <ItemWrapper>
                <Label data-testid="courseLable">
                  Course Name
                </Label>
                <TextField inputProps={{ "data-testid": "courseInput" }} defaultValue={student.course} type="text" id="courseNameInput" variant="outlined" style={{ borderRadius: "6px" }} onChange={(e) => { student.course = e.target.value }} />
              </ItemWrapper>
              <ItemWrapper>
                <Label data-testid="hoursLable">
                  Hours
                </Label>
                <TextField inputProps={{ "data-testid": "hoursInput" }} defaultValue={student.hours} type="number" id="hoursInput" variant="outlined" style={{ borderRadius: "6px" }} onChange={(e) => { student.hours = e.target.value }} />
              </ItemWrapper>
              <ItemWrapper>
                <Label data-testid="priceLabel">
                  Price €
                </Label>
                <TextField inputProps={{ "data-testid": "priceInput" }} defaultValue={student.price} type="number" id="priceInput" variant="outlined" style={{ borderRadius: "6px" }} onChange={(e) => { student.price = parseFloat(e.target.value) }} />
              </ItemWrapper>
            </ItemsContainer>
          </FormWrapper>
          <ButtonWrapper>
            <Button data-testid="addStudentButton" variant="contained" onClick={() => studentEdit.firstName !== "" ? setShowModal(false) : insertStudent(student)}>Save</Button>
          </ButtonWrapper>
        </ModalContainer>
      </Modal >
    )
  }

  return (
    <MainContainer data-testid="mainContainer">
      <ButtonContainer>
        <Button variant="contained" onClick={() => setShowModal(!showModal)} data-testid="showModalButton">Add Student</Button>
      </ButtonContainer>
      <TableWrapper>
        <TableContainer component={Paper} data-testid="tableContainer">
          <Table aria-label="simple table">
            <TableHead data-testid="tableHead">
              <StyledTableRow data-testid="tableHeadRow">
                <StyledTableCell data-testid="tableHeadCellFirstName">FIRST NAME</StyledTableCell>
                <StyledTableCell data-testid="tableHeadCellLastName">LAST NAME</StyledTableCell>
                <StyledTableCell data-testid="tableHeadCellDateBirth">DATE OF BIRTH</StyledTableCell>
                <StyledTableCell data-testid="tableHeadCellCourse">COURSE</StyledTableCell>
                <StyledTableCell data-testid="tableHeadCellHours">HOURS</StyledTableCell>
                <StyledTableCell data-testid="tableHeadCellPrice">PRICE</StyledTableCell>
                <StyledTableCell></StyledTableCell>
                <StyledTableCell></StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody data-testid="tableBody">
              {students.map((student, index) => (
                <StyledTableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  data-testid={`tableBodyRow-${index}`}
                >
                  <StyledTableCell data-testid={`tableBodyCellFirsName-${index}`}>
                    {student.firstName}
                  </StyledTableCell>
                  <StyledTableCell data-testid={`tableBodyCellLastName-${index}`}>
                    {student.lastName}
                  </StyledTableCell>
                  <StyledTableCell data-testid={`tableBodyCellDateBirth-${index}`}>{student.dateBirth}</StyledTableCell>
                  <StyledTableCell data-testid={`tableBodyCellCourse-${index}`}>{student.course}</StyledTableCell>
                  <StyledTableCell data-testid={`tableBodyCellHours-${index}`}>{student.hours}</StyledTableCell>
                  <StyledTableCell data-testid={`tableBodyCellPrice-${index}`}>{student.price}</StyledTableCell>
                  <StyledTableCell data-testid={`tableBodyCellEditButton-${index}`}><ActionButton onClick={() => {
                    setStudentEdit(student)
                    setShowModal(true)
                  }}>Edit</ActionButton></StyledTableCell>
                  <StyledTableCell><ActionButton data-testid={`tableBodyCellDeleteButton-${index}`} onClick={() => setDeleteStudent(index)}>Delete</ActionButton></StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TableWrapper>
      {showModal && studentModal()}
    </MainContainer>
  );
}

export default App;
