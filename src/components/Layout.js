import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from './AppBar/AppBar';
import { Footer } from './Footer/Footer';
import { Box, Flex } from '@chakra-ui/react';

export function Layout() {
  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Box as="footer" bgColor="lightskyblue" width="100%">
        <Flex justifyContent="center" pt="10px" height="48px">
          <Footer />
        </Flex>
      </Box>
    </Box>
  );
}
