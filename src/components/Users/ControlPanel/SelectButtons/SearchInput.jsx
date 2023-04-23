import React, { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from '@chakra-ui/react';

import { changeSearchValue } from '../../../../features/users/usersSlice';

const SearchInput = () => {
  const dispatch = useDispatch();
  const selectedSearchValue = useSelector((state) => state.users.searchValue);

  const onSearchInputChange = useCallback((e) => {
    dispatch(changeSearchValue(e.target.value));
  }, []);

  return (
    <Input
      onChange={onSearchInputChange}
      value={selectedSearchValue}
      placeholder='Search'
      size='md'
      variant='outline'
    />
  );
};

export default memo(SearchInput);