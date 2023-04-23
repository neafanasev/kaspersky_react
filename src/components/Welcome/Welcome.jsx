import React from 'react';
import { Flex, Text, Link } from '@chakra-ui/react';

const Welcome = () => (
  <Flex direction={'column'}
        justify={'center'}
        align={'center'}
        w={'100%'}
        mt={6}
  >
    <Flex direction={'column'}
          bg={'gray.100'}
          borderRadius={'xl'} w={'4xl'}
          px={8}
          py={4}
    >

      <Text ml={0} as={'b'} fontSize={'xl'}>{'const aboutProject = {'}</Text>

      <Text ml={8} as={'b'} fontSize={'xl'}>{'stack: {'}</Text>
      <Text ml={16} as={'b'} fontSize={'xl'}>{'frontend: [\'react\', \'redux\', \'chackra-ui]\','}</Text>
      <Text ml={16} as={'b'} fontSize={'xl'}>{'backend: [\'express\']'}</Text>
      <Text ml={8} as={'b'} fontSize={'xl'}>{'},'}</Text>

      <Text ml={8} as={'b'} fontSize={'xl'}>{'timeComplexity: {'}</Text>
      <Text ml={16} as={'b'} fontSize={'xl'}>{'groupping: \'O(1)\'\','}</Text>
      <Text ml={16} as={'b'} fontSize={'xl'}>{'search: \'O(n)\''}</Text>
      <Text ml={16} as={'b'} fontSize={'xl'}>{'sort: \'O(n log n)\''}</Text>
      <Text ml={8} as={'b'} fontSize={'xl'}>{'},'}</Text>


      <Text ml={8} as={'b'} fontSize={'xl'}>{'contacts: {'}</Text>
      <Text ml={16} as={'b'} fontSize={'xl'}>{'fullName: \'Nikita Afanasev\','}</Text>
      <Text ml={16} as={'b'} fontSize={'xl'}>{'email: \'niktin242003@gmail.com\','}</Text>
      <Text ml={16} as={'b'} fontSize={'xl'}>{'phone: \'+79221824676\','}</Text>
      <Text ml={16} as={'b'} fontSize={'xl'}>
        {'telegram: '}
        <Link href={'https://webk.telegram.org/#@n1ko1337'} isExternal>
          {'\''}@n1ko1337{'\''},
        </Link>
      </Text>
      <Text ml={8} as={'b'} fontSize={'xl'}>{'},'}</Text>


      <Text ml={8} as={'b'} fontSize={'xl'}>{'github: {'}</Text>
      <Text ml={16} as={'b'} fontSize={'xl'}>
        {'frontend: '}
        <Link href={'https://github.com/neafanasev/kaspersky_react'} isExternal>
          {'\''}https://github.com/neafanasev/kaspersky_react{'\''},
        </Link>
      </Text>
      <Text ml={16} as={'b'} fontSize={'xl'}>
        {'backend: '}
        <Link href={'https://github.com/neafanasev/kaspersky_nodejs'} isExternal>
          {'\''}https://github.com/neafanasev/kaspersky_nodejs{'\''}
        </Link>
      </Text>

      <Text ml={8} as={'b'} fontSize={'2xl'}>{'}'}</Text>
      <Text ml={0} as={'b'} fontSize={'2xl'}>{'}'}</Text>


    </Flex>
  </Flex>
);

export default Welcome;