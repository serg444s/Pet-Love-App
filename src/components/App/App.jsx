import { lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage.jsx';
import { fetchCampers } from '../../redux/camper/operations.js';
import { useDispatch, useSelector } from 'react-redux';
import { selectPage } from '../../redux/camper/selectors.js';
import { changeFilter } from '../../redux/camper/filtersSlice.js';
import Layout from 'components/Layout/Layout';
import Header from 'components/Header/Header.jsx';
import RestrictedRoute from '../../RestrictedRoute.jsx';
import PrivateRoute from 'PrivateRoute.jsx';

const Home = lazy(() => import('../../pages/HomePage/HomePage.jsx'));
const News = lazy(() => import('../../pages/NewsPage/NewsPage.jsx'));
const Notices = lazy(() => import('../../pages/NoticesPage/NoticesPage.jsx'));
const Friends = lazy(() => import('../../pages/FriendsPage/FriendsPage.jsx'));
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage.jsx'));
const RegistrationPage = lazy(() =>
  import('../../pages/RegistrationPage/RegistrationPage.jsx')
);
const ProfilePage = lazy(() =>
  import('../../pages/ProfilePage/ProfilePage.jsx')
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
            <RestrictedRoute redirectTo="/" component={<RegistrationPage />} />
          }
        />
        <Route
          path="/login"
          element={<RestrictedRoute redirectTo="/" component={<LoginPage />} />}
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute redirectTo="/profile" component={<ProfilePage />} />
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
