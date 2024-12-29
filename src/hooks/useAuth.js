import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectIsLoading,
  selectFavoritesNotices,
  selectViewedNotices,
  selectPets,
} from '../redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoading = useSelector(selectIsLoading);
  const user = useSelector(selectUser);
  const favoritesNotices = useSelector(selectFavoritesNotices);
  const viewedNotices = useSelector(selectViewedNotices);
  const pets = useSelector(selectPets);

  return {
    isLoggedIn,
    isRefreshing,
    isLoading,
    user,
    favoritesNotices,
    viewedNotices,
    pets,
  };
};
