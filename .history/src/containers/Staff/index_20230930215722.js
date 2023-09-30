/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useMemo } from 'react';
import { useErrorBoundary } from 'react-error-boundary';
import { useTable } from 'react-table';
import styled from 'styled-components';
import useFetchStaff from '@/hooks/useFetchStaff';
import SlidingWindow from '@/containers/AddStaff';

const Container = styled.div`
  width: 100%;
  padding: 30px;
`;

const Table = styled.table`
  width: 100%;
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

const Tr = styled.tr`
  &:hover {
    background-color: lightblue;
  }
`;

const Button = styled.button`
  border: none;
  padding: 20px;
  background-color: lightblue;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: blue;
  }
`;

function Index() {
  const { fakeStaffs, isLoading, isError, error } = useFetchStaff();
  if (isLoading) {
    // Loading state, you can render a loading spinner or message here
    return <div>Loading...</div>;
  }

  if (isError) {
    // Error state, you can render an error message here
    return <div>Error: {error.message}</div>;
  }

  if (!fakeStaffs) {
    // Data not available yet
    return null;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const data = useMemo(() => fakeStaffs, [fakeStaffs]);
  console.log(fakeStaffs);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const columns = useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Phone',
        accessor: 'phone',
      },
      {
        Header: 'Designation',
        accessor: 'designation',
      },
      {
        Header: 'Location',
        accessor: 'location',
      },
      {
        Header: 'Role',
        accessor: 'role',
      },
      {
        Header: 'Billing',
        accessor: 'billing',
      },
    ],
    [],
  );

  const { showBoundary } = useErrorBoundary();
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  const [showSlidingWindow, setShowSlidingWindow] = useState(false);

  const openSlidingWindow = () => {
    setShowSlidingWindow(true);
  };

  return (
    <Container>
      <SlidingWindow
        open={showSlidingWindow}
        onClose={() => setShowSlidingWindow(false)}
      />
      <Button onClick={openSlidingWindow}>Add staff</Button>
      {!isLoading && !isError && (
        <Table {...getTableProps()}>
          {error && showBoundary(error)}
          <TableHead>
            {headerGroups.map((headerGroup) => (
              <Tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <Th key={column.id} {...column.getHeaderProps()}>
                    {column.render('Header')}
                  </Th>
                ))}
              </Tr>
            ))}
          </TableHead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <Tr key={row.id} {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <Td key={row.cells.id} {...cell.getCellProps()}>
                        {cell.render('Cell')}
                      </Td>
                    );
                  })}
                </Tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </Container>
  );
}

export default Index;
