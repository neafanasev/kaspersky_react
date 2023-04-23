import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ChakraProvider, extendTheme, } from '@chakra-ui/react';

import Header from './components/Header';
import AppRoutes from './AppRoutes';

import { initializeApp } from './features/users/usersSlice';

const theme = extendTheme({
  colors: {
    brand: {
      100: 'rgba(0,165,142,0.4)',
      200: 'rgba(0,165,142,0.6)',
      300: 'rgba(0,165,142,0.8)',
      400: '#00a58e',
    },
    brand2: {
      100: 'rgba(39,183,255,0.4)',
      200: 'rgba(39,183,255,0.6)',
      300: '#BDE0F5',
      400: '#27B7FF',
    },
  },
  fonts: {
    body: `"Poppins", sans-serif`,
  },
});


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeApp());
  }, []);

  const isInitialized = useSelector((state) => state.users.isInitialized);
  if (!isInitialized) return <></>;

  return (
    <ChakraProvider theme={theme}>
      <Header />
      <AppRoutes />
    </ChakraProvider>
  );
};

export default App;