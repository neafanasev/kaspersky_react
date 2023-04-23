import React, { memo } from 'react';
import { Flex } from '@chakra-ui/react';

import SearchInput from './SelectButtons/SearchInput';
import SearchButton from './SelectButtons/SearchButton';
import GroupButton from './SelectButtons/GroupButton';
import SortButton from './SelectButtons/SortButton';

const SelectButtonsBox = () => (
  <Flex direction={'row'}
        w={'max'}
        alignSelf={'center'}
  >
    <SearchInput />
    <SearchButton />
    <GroupButton />
    <SortButton />
  </Flex>
);

export default memo(SelectButtonsBox);