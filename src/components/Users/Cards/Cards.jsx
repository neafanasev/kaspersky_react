import React, { memo } from 'react';
import { Flex, SimpleGrid } from '@chakra-ui/react';

import CardUser from './CardUser';

const Cards = ({ users }) => {
  console.log('render cards');

  return (
    <Flex maxW={'6xl'} justify={'center'} m={'auto'}>
      <SimpleGrid columns={4} spacing={6}>
        {users.map(user => (
          <CardUser key={user.id}
                    group={user.group}
                    fullname={user.fullname}
                    email={user.email}
                    phone={user.phone}
                    salary={user.salary}
                    city={user.city}
                    image_url={user.image_url}
          />
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default memo(Cards);