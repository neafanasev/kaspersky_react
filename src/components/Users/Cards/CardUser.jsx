import React, { memo } from 'react';
import { Box, Card, CardBody, Heading, Stack, Text, Avatar } from '@chakra-ui/react';

export const InfoText = ({ text, value }) => (
  <Box>
    <Text lineHeight={'none'} size={'sm'} as={'b'}>{text}</Text>
    <Text lineHeight={'shorter'} size={'sm'} noOfLines={1}>{value}</Text>
  </Box>
);

const CardUser = ({ group, fullname, email, phone, salary, city, image_url }) => (
  <Card maxW='xl'
        boxShadow={'lg'}
        transition={'all .3s ease-out'}
        _hover={{ transform: 'scale(1.015)' }}
  >
    <CardBody p={3}>
      <Heading size={'md'}
               textAlign={'center'}
               noOfLines={1}
      >{fullname}</Heading>

      <Text size='sm'
            color={'gray.500'}
            mb={'3'}
            textAlign={'center'}
      >{group}</Text>

      <Stack spacing={3} textAlign={'start'}>
        <Avatar
          src={image_url}
          size={'2xl'}
          w={'100%'}
          bg={'brand2.100'}
          borderRadius='lg'
        />
        <InfoText text={'Email'} value={email} />
        <InfoText text={'Phone'} value={phone} />
        <InfoText text={'City'} value={city} />
        <InfoText text={'Salary'} value={salary + ' Rub/Month'} />
      </Stack>
    </CardBody>
  </Card>
);

export default memo(CardUser);