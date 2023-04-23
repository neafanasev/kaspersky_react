import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Flex, Image, Text } from '@chakra-ui/react';

import Logo from '../logo-wide-white.svg';
import { ColorModeSwitcher } from './ColorModeSwitcher';

const Header = () => (
  <Box as='header' boxShadow={'lg'} bg={'brand.400'}>
    <Flex justify={'space-between'} p={4}>
      <Flex width={'max-content'}>
        <NavLink to={'/'}>
          <Image src={Logo}
                 alt={'logo'}
                 objectFit={'contain'}
                 w={'100%'}
                 h={'100%'}
          />
        </NavLink>

        {
          [
            ['_home', '/'],
            ['_users', '/users/cards'],
          ].map((item) => (
            <Box alignSelf={'center'} key={item[0]}>
              <NavLink to={item[1]}>
                <Text color={'white'}
                      pl={16}
                      fontSize={'5xl'}
                      fontWeight={'bold'}
                >
                  {item[0]}
                </Text>
              </NavLink>
            </Box>
          ))
        }

      </Flex>
      <ColorModeSwitcher justifySelf='flex-end' alignSelf={'center'} />
    </Flex>
  </Box>
);

export default memo(Header);