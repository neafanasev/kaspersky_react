import React, { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, Card, CardBody, HStack, Text, useDisclosure } from '@chakra-ui/react';

import ModalUser from './ModalUser';

const TrelloLike = ({ users }) => {
  console.log('render trello');
  const selectedGroup = useSelector((state) => state.users.selectedGroup);

  let usersNew = {};

  if (selectedGroup === 'All') {
    usersNew = users.reduce((obj, user) => {
      const group = user.group;

      if (Object.keys(obj).includes(group)) {
        obj[group].push(user);
      } else {
        obj[group] = [user];
      }

      return obj;
    }, {});
  } else {
    usersNew[selectedGroup] = users;
  }


  const { isOpen, onOpen, onClose } = useDisclosure();
  const [userToOpen, setUserToOpen] = useState({});

  const handleUserClick = (newUser) => {
    setUserToOpen(newUser);
    onOpen();
  };

  return (<>
    <HStack spacing={8} align={'start'} overflowX={'scroll'} pb={4}>
      {Object.keys(usersNew).map((group) => (
        <Box key={group}
             borderRadius={'lg'}
             p={3}
             bg={'gray.100'}
        >

          <Text w={'2xs'}
                fontSize={'xl'}
                pl={3}
                fontWeight={'bold'}
          >{group}</Text>

          <Box>
            {usersNew[group].map((user) => (
                <Card key={user.id}
                      my={4}
                      onClick={() => handleUserClick(user)}
                      cursor={'pointer'}
                >
                  <CardBody py={2} px={4}>
                    <Text fontSize={'lg'} lineHeight={'shorter'}>{user.fullname}</Text>
                    <Text fontSize={'md'} lineHeight={'shorter'} color={'gray.400'}>{user.city}</Text>
                  </CardBody>
                </Card>
              ),
            )}
          </Box>

        </Box>
      ))}
    </HStack>
    <ModalUser isOpen={isOpen} onClose={onClose} user={userToOpen} />
  </>);
};

export default memo(TrelloLike);