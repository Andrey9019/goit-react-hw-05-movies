import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '../Loader/Loader';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import BackgroundCircles from 'components/BackgroundCircles/BackgroundCircles';

const SharedLayout = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen relative">
        <BackgroundCircles />

        <Header />
        <main className="flex-grow">
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default SharedLayout;
