import React, { memo } from 'react';
import { Box, Flex } from '@chakra-ui/react';

import ControlPanel from './ControlPanel/ControlPanel';
import UsersCalculate from './UsersCalculate';

const UsersPage = () => {
  console.log('render users')

  return (
    <Flex p={3}
          direction={'column'}
          m={'auto'}
          w={'8xl'}
    >
      <ControlPanel />
      <Box w={'100%'} h={'2px'} bg={'gray.300'}></Box>
      <UsersCalculate />
    </Flex>
  )
};

export default memo(UsersPage);