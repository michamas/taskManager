import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppContainer } from './AppContainer/AppContainter.js';

export const Layout = () => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <AppContainer />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};

// return <main className={css.container}>{children}</main>;
