import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { Flex } from '@chakra-ui/react';

import Cards from './Cards/Cards';
import Tabled from './Tabled/Tabled';
import TrelloLike from './TrelloLike/TrelloLike';

const Users = ({ users }) => {
  const view = useSelector((state) => state.users.view);
  let Component;

  switch (view) {
    case 'table': {
      Component = <Tabled users={users} />;
      break;
    }
    case 'trellolike': {
      Component = <TrelloLike users={users} />;
      break;
    }
    default: {
      Component = <Cards users={users} />;
      break;
    }
  }

  return (
    <Flex px={0} py={8}>
      {Component}
    </Flex>
  );
};

export default memo(Users);