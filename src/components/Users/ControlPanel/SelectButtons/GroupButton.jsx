import React, { memo, useCallback } from 'react';
import { Menu, MenuItemOption, MenuList, MenuOptionGroup } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';

import getButtonValue from '../../../../utils/getButtonValue';
import { changeSelectedGroup } from '../../../../features/users/usersSlice';
import MenuButtonC from './MenuButtonC';

const GroupButton = () => {
  const dispatch = useDispatch();
  const selectedGroup = useSelector((state) => state.users.selectedGroup);

  const onGroupClick = useCallback((e) => {
    dispatch(changeSelectedGroup(getButtonValue(e)));
  }, []);

  return (
    <Menu closeOnSelect={false}>
      { <MenuButtonC text={'Group'}/> }
      <MenuList minWidth='240px' textAlign={'start'} defaultValue={'All'}>
        <MenuOptionGroup defaultValue={selectedGroup} type='radio'>
          {
            [
              'All',
              'HR',
              'CEO',
              'Developers',
              'Sales',
              'Teamleads',
              'Unmanaged',
              'Financials',
              'Managers',
            ].map((value) => (
              <MenuItemOption value={value} key={value} onClick={onGroupClick}>{value}</MenuItemOption>
            ))
          }
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};

export default memo(GroupButton);