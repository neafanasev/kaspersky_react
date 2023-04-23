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

      <Text ml={0} as={'b'} fontSize={'md'}>{'const aboutProject = {'}</Text>

      <Text ml={8} as={'b'} fontSize={'md'}>{'stack: {'}</Text>
      <Text ml={16} as={'b'} fontSize={'md'}>{'frontend: [\'react\', \'redux\', \'chackra-ui]\','}</Text>
      <Text ml={16} as={'b'} fontSize={'md'}>{'backend: [\'express\']'}</Text>
      <Text ml={8} as={'b'} fontSize={'md'}>{'},'}</Text>

      <Text ml={8} as={'b'} fontSize={'md'}>{'timeComplexity: {'}</Text>
      <Text ml={16} as={'b'} fontSize={'md'}>{'groupping: \'O(1)\'\','}</Text>
      <Text ml={16} as={'b'} fontSize={'md'}>{'search: \'O(n)\''}</Text>
      <Text ml={16} as={'b'} fontSize={'md'}>{'sort: \'O(n log n)\''}</Text>
      <Text ml={8} as={'b'} fontSize={'md'}>{'},'}</Text>


      <Text ml={8} as={'b'} fontSize={'md'}>{'contacts: {'}</Text>
      <Text ml={16} as={'b'} fontSize={'md'}>{'fullName: \'Nikita Afanasev\','}</Text>
      <Text ml={16} as={'b'} fontSize={'md'}>{'email: \'niktin242003@gmail.com\','}</Text>
      <Text ml={16} as={'b'} fontSize={'md'}>{'phone: \'+79221824676\','}</Text>
      <Text ml={16} as={'b'} fontSize={'md'}>
        {'telegram: '}
        <Link href={'https://webk.telegram.org/#@n1ko1337'} isExternal>
          {'\''}@n1ko1337{'\''},
        </Link>
      </Text>
      <Text ml={8} as={'b'} fontSize={'md'}>{'},'}</Text>


      <Text ml={8} as={'b'} fontSize={'md'}>{'github: {'}</Text>
      <Text ml={16} as={'b'} fontSize={'md'}>
        {'frontend: '}
        <Link href={'https://github.com/neafanasev/kaspersky_react'} isExternal>
          {'\''}https://github.com/neafanasev/kaspersky_react{'\''},
        </Link>
      </Text>
      <Text ml={16} as={'b'} fontSize={'md'}>
        {'backend: '}
        <Link href={'https://github.com/neafanasev/kaspersky_nodejs'} isExternal>
          {'\''}https://github.com/neafanasev/kaspersky_nodejs{'\''}
        </Link>
      </Text>

      <Text ml={8} as={'b'} fontSize={'md'}>{'}'}</Text>
      <Text ml={0} as={'b'} fontSize={'md'}>{'}'}</Text>


    </Flex>
  </Flex>
);

export default Welcome;