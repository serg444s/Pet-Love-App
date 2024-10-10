import { lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage.jsx';
import { fetchCampers } from '../../redux/operations.js';
import { useDispatch, useSelector } from 'react-redux';
import { selectPage } from '../../redux/selectors.js';
import { changeFilter } from '../../redux/filtersSlice.js';
import Layout from 'components/Layout/Layout';
import Header from 'components/Header/Header.jsx';
import RestrictedRoute from '../../RestrictedRoute.jsx';

const Home = lazy(() => import('../../pages/HomePage/HomePage.jsx'));
const News = lazy(() => import('../../pages/NewsPage/NewsPage.jsx'));
const Notices = lazy(() => import('../../pages/NoticesPage/NoticesPage.jsx'));
const Friends = lazy(() => import('../../pages/FriendsPage/FriendsPage.jsx'));
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage.jsx'));
const RegistrationPage = lazy(() =>
  import('../../pages/RegistrationPage/RegistrationPage.jsx')
);

function App() {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);

  useEffect(() => {
    if (page > 1) {
      dispatch(fetchCampers(page));

      dispatch(
        changeFilter({
          location: '',
          airConditioner: false,
          automatic: false,
          kitchen: false,
          TV: false,
          shower: false,
          type: '',
        })
      );
    }
  }, [dispatch, page]);

  return (
    <Layout>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/tracker"
              component={<RegistrationPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/tracker" component={<LoginPage />} />
          }
        />
        <Route path="/news" element={<News />} />
        <Route path="/notices" element={<Notices />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
