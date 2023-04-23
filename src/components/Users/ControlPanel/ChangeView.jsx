import React, { memo, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Flex } from '@chakra-ui/react';

import { setView } from '../../../features/users/usersSlice';

const ChangeView = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState('cards');

  const onCardsButtonClick = useCallback((e) => {
    const value = e.target.value;
    setActive(value);
    dispatch(setView(value));
  }, []);

  return (
    <Flex direction={'row'}
          bg={'brand2.300'}
          borderRadius={'full'}
          m={4}>
      {
        [
          'Cards',
          'Table',
          'TrelloLike',
        ].map((value) => {
          const valueLower = value.toLowerCase();
          return (
            <Button key={valueLower}
                    onClick={onCardsButtonClick}
                    value={valueLower}
                    fontSize={'3xl'}
                    fontWeight={'400'}
                    borderRadius={'full'}
                    p={8}
                    bg={valueLower === active ? 'brand2.400' : 'none'}
                    _hover={{ background: 'none' }}
            >{value}</Button>
          );
        })
      }
    </Flex>
  );
};

export default memo(ChangeView);