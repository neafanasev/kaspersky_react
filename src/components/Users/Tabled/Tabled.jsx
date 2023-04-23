import React, { memo } from 'react';
import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';

const Tabled = ({ users }) => {
  console.log('render table');

  return (
    <TableContainer borderRadius={'lg'} w={'100%'}>
      <Table variant='simple'>
        <Thead size={'lg'}>
          <Tr>
            {
              [
                'Full name',
                'Group',
                'Email',
                'Phone',
                'City',
                'Salary',
              ].map(
                (text) => (<Th key={text}>{text}</Th>),
              )
            }
          </Tr>
        </Thead>
        <Tbody>
          {users.map(user => (
            <Tr key={user.id}
                transition={'all .3s ease-out'}
                borderColor={'gray.200'}
                borderTopWidth={2}
                _hover={{ background: 'gray.200' }}>
              <Td>{user.fullname}</Td>
              <Td>{user.group}</Td>
              <Td>{user.email}</Td>
              <Td>{user.phone}</Td>
              <Td>{user.city}</Td>
              <Td>{user.salary + ' Rub/month'}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default memo(Tabled);