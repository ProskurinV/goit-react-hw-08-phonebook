import { useAuth } from 'hooks/useAuth';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Navigation } from 'components/Navigation/Navigation';
import { Box, Flex, Container } from '@chakra-ui/react';

export function AppBar() {
  const { isLoggedIn } = useAuth();

  return (
    <Box as="header" bgColor="lightskyblue">
      <Container>
        <Flex justifyContent="space-between">
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Flex>
      </Container>
    </Box>
  );
}
