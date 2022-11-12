import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export function Layout() {
  return;
  <>
    <AppBar />
    <Suspense fallback={null}>
      <Outlet />
    </Suspense>
    <Toaster position="top-right" />
  </>;
}
