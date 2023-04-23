import React, { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Menu, MenuDivider, MenuItemOption, MenuList, MenuOptionGroup } from '@chakra-ui/react';

import { changeSortColumn, changeSortOrder } from '../../../../features/users/usersSlice';
import getButtonValue from '../../../../utils/getButtonValue';
import MenuButtonC from './MenuButtonC';

const SortButton = () => {
  const dispatch = useDispatch();
  const selectedSortOrder = useSelector((state) => state.users.sortOrder);
  const selectedSortColumn = useSelector((state) => state.users.sortColumn);

  const onSortOrderClick = useCallback((e) => {
    dispatch(changeSortOrder(getButtonValue(e)));
  }, []);

  const onSortColumnClick = useCallback((e) => {
    dispatch(changeSortColumn(getButtonValue(e)));
  }, []);

  return (
    <Menu closeOnSelect={false}>
      { <MenuButtonC text={'Sort'}/> }
      <MenuList minWidth='240px' textAlign={'start'}>
        <MenuOptionGroup defaultValue={selectedSortOrder} title='Order' type='radio'>
          {
            [
              ['default', 'Default'],
              ['asc', 'Ascending'],
              ['desc', 'Descending'],
            ].map((item) => (
              <MenuItemOption key={item[0]} value={item[0]} onClick={onSortOrderClick}>{item[1]}</MenuItemOption>
            ))
          }
        </MenuOptionGroup>
        <MenuDivider />
        <MenuOptionGroup defaultValue={selectedSortColumn} title='Column' type='radio'>
          {
            [
              ['fullname', 'Full name'],
              ['group', 'Group'],
              ['email', 'Email'],
              ['phone', 'Phone'],
              ['city', 'City'],
              ['salary', 'Salary'],
            ].map((item) => (
              <MenuItemOption key={item[0]} value={item[0]} onClick={onSortColumnClick}>{item[1]}</MenuItemOption>
            ))
          }
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};
export default memo(SortButton);