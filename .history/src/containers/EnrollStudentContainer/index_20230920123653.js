import React, { useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import {fetchStudentData} from "@/lib/fetchData"

const LoadingContainer = styled.div`
  width: 100%;
  padding: 30px;
`;

const ErrorContainer = styled.div`
  width: 100%;
  padding: 30px;
  color: red;
`;

const FilterableTableContainer = styled.div`
  width: 100%; /* Ensure the container spans the full width */
  padding: 30px;
`;

const Input = styled.input`
width: 100%;
  padding: 5px;
margin-right: 130px;

`;

const Table = styled.table`
  width: 100%; /* Make the table span the full width */
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  background-color: #f2f2f2;
`;

const Th = styled.th`
  padding: 10px;
  text-align: left;
`;

const Td = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const DeletePopup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 999;
  display: ${({ show }) => (show ? 'block' : 'none')};
`;

const DeleteButton = styled.button`
  background-color: red;
  color: #fff;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
`;

const DangerButton = styled.button`
  background-color: red;
  border: none;
  padding: 10px;
  margin-bottom: 10px;
  color: white;
  cursor: pointer;
`

const Select = styled.select`
padding: 6px;
`;

function FilterableTable() {
  const { data: fakeStudents, isLoading, isError, error } = useQuery('studentData', fetchStudentData);
  const [filter, setFilter] = useState({
      name: "",
      gender: "",
      ageGroup: "",
      status: "",
      studentId: "",
      dob: "",
      mother: { "email": "", "number": "" },
      father: { "email": "", "number": "" }
  });
  const [selectedRows, setSelectedRows] = useState([]);
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({
      ...filter,
      [name]: value,
    });
  };

  const handleCheckboxChange = (studentName) => {
    if (selectedRows.includes(studentName)) {
      setSelectedRows(selectedRows.filter((name) => name !== studentName));
    } else {
      setSelectedRows([...selectedRows, studentName]);
    }
  };

  const handleDeleteClick = () => {
    setSelectedRows([]);
    setShowDeletePopup(false);
  };

  const filteredCourses = fakeStudents
    ? fakeStudents.filter((student) => {
        return (
          student.status.toLowerCase().startsWith(filter.status.toString().toLowerCase()) &&
          student.gender.toString().toLowerCase().startsWith(filter.gender.toString().toLowerCase()) 
        );
      })
      : [];
      
      return (
        <FilterableTableContainer>
          <h1>Students</h1>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: "10px" }}>
              <Input
                type="text"
                placeholder="Filter by Course Name"
                name="courseName"
                value={filter.courseName}
                onChange={handleFilterChange}
              />

              <Select name="status" value={filter.status} onChange={handleFilterChange}>
                <option value="">All Status</option>
                <option value="Active">Active</option>
                <option value="New">New</option>
                <option value="Waitlisted">Waitlisted</option>
              </Select>

              <Select name="classType" value={filter.classType} onChange={handleFilterChange}>
                <option value="">All Class Types</option>
                <option value="One to one">One to one</option>
                <option value="Group">Group</option>
                {/* Add more options as needed */}
              </Select>
              <Select name="branches" value={filter.branches} onChange={handleFilterChange}>
                <option value="">All Branches</option>
                <option value="Main">Main</option>
                <option value="Other">Other</option>
                {/* Add more options as needed */}
              </Select>
            </div>
      {isLoading && <LoadingContainer>Loading...</LoadingContainer>}
      {isError && <ErrorContainer>Error: {error.message}</ErrorContainer>}
      {!isLoading && !isError && (
        <>
          <DeletePopup show={showDeletePopup}>
            <p>Are you sure you want to delete the selected row(s)?</p>
            <DeleteButton onClick={handleDeleteClick}>Delete</DeleteButton>
          </DeletePopup>
          {selectedRows.length > 0 && <DangerButton onClick={() => setShowDeletePopup(true)}>Delete Selected</DangerButton>}
          <Table>
            <TableHead>
              <tr>
                <Th>Select</Th> {/* Checkbox column */}
                <Th>Course Name</Th>
                <Th>Class Type</Th>
                <Th>Category</Th>
                <Th>Pricing Option</Th>
                <Th>Branches</Th>
                <Th>Action</Th>
              </tr>
            </TableHead>
            <tbody>
              {filteredCourses.map((course, index) => (
                <tr key={index}>
                  <Td>
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(course.courseName)}
                      onChange={() => handleCheckboxChange(course.courseName)}
                    />
                  </Td>
                  <Td>{course.courseName}</Td>
                  <Td>{course.classType}</Td>
                  <Td>{course.category}</Td>
                  <Td>{course.pricingOption}</Td>
                  <Td>{course.branches}</Td>
                  <Td>
                  </Td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </FilterableTableContainer>
  );
}

export default FilterableTable;
