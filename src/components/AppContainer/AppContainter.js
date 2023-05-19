import { useAuth } from 'hooks/useAuth.js';
import css from './AppContainer.module.css';
import { Navigation } from 'components/Navigation/Navigation.js';
import { UserMenu } from 'components/UserMenu/UserMenu.js';
import { AuthNav } from 'components/AuthNav/AuthNav.js';

export const AppContainer = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
