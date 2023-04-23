import React, { memo } from 'react';
import {
  Avatar,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay, Stack,
} from '@chakra-ui/react';
import { InfoText } from '../Cards/CardUser';

const ModalUser = ({ isOpen, onClose, user }) => {

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{user.fullname}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack spacing={3} textAlign={'start'}>
            <Avatar
              src={user.image_url}
              size={'2xl'}
              w={'100%'}
              bg={'brand2.100'}
              borderRadius='lg'
            />
            <InfoText text={'Email'} value={user.email} />
            <InfoText text={'Phone'} value={user.phone} />
            <InfoText text={'City'} value={user.city} />
            <InfoText text={'Salary'} value={user.salary + ' Rub/Month'} />
          </Stack>
        </ModalBody>

        <ModalFooter>
          <Button onClick={onClose}
                  background={'brand.400'}
                  color={'white'}
                  mr={3}
                  _hover={{ background: 'brand.200' }}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default memo(ModalUser);