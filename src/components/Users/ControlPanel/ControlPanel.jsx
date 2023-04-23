import React, { memo } from 'react';
import { Flex } from '@chakra-ui/react';

import ChangeView from './ChangeView';
import SelectButtonsBox from './SelectButtonsBox';

const ControlPanel = () => (
  <Flex w={'100%'} direction={'row'} justify={'space-between'}>
    <ChangeView />
    <SelectButtonsBox />
  </Flex>
);

export default memo(ControlPanel);