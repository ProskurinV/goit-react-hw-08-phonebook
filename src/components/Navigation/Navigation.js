import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

export function Navigation() {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <NavLink>Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
  );
}