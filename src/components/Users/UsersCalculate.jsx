import React, { memo } from 'react';

import useSelectUsers from '../../hooks/useSelectUsers';
import Users from './Users';

const UsersCalculate = () => {
  const users = useSelectUsers();
  console.log('calculating users');
  console.log(users);

  return (
    <Users users={users} />
  );
};

export default memo(UsersCalculate);