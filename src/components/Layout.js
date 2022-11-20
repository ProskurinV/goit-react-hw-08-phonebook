import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from './AppBar/AppBar';
import { Footer } from './Footer/Footer';
import { Box, Flex } from '@chakra-ui/react';

export function Layout() {
  return (
    <>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Box as="footer" bgColor="lightskyblue" height="48px" width="100%">
        <Flex justifyContent="center" pt="10px">
          <Footer />
        </Flex>
      </Box>

      <Toaster position="top-right" />
    </>
  );
}
