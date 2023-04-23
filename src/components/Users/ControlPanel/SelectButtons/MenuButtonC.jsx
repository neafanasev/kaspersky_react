import React, { memo } from 'react';
import { Button, MenuButton } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

const MenuButtonC = ({ text }) => (
  <MenuButton as={Button}
              rightIcon={<ChevronDownIcon />}
              minW={'max'}
              ml={4}
  >{text}</MenuButton>
)

export default memo(MenuButtonC)