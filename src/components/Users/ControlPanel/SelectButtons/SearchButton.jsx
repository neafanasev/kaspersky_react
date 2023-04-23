import React, { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Menu, MenuItemOption, MenuList, MenuOptionGroup } from '@chakra-ui/react';

import { changeSearchColumn } from '../../../../features/users/usersSlice';

import getButtonValue from '../../../../utils/getButtonValue';
import MenuButtonC from './MenuButtonC';

const SearchButton = () => {
  const dispatch = useDispatch();
  const selectedSearchField = useSelector((state) => state.users.searchField);

  const onSearchFieldClick = useCallback((e) => {
    dispatch(changeSearchColumn(getButtonValue(e)));
  }, []);

  return (
    <Menu closeOnSelect={false}>
      { <MenuButtonC text={'Search by'}/> }
      <MenuList minWidth='240px' textAlign={'start'} defaultValue={'All'}>
        <MenuOptionGroup defaultValue={selectedSearchField} type='radio'>
          {
            [
              ['everywhere', 'Everywhere'],
              ['fullname', 'Full name'],
              ['group', 'Group'],
              ['email', 'Email'],
              ['phone', 'Phone'],
              ['city', 'City'],
              ['salary', 'Salary'],
            ].map((item) => (
              <MenuItemOption key={item[0]} value={item[0]} onClick={onSearchFieldClick}>{item[1]}</MenuItemOption>
            ))
          }
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};

export default memo(SearchButton);