import Loader from 'components/Loader/Loader';
import { Suspense } from 'react';

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </div>
  );
};

export default Layout;
