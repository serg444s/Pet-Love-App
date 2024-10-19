import { useDispatch, useSelector } from 'react-redux';
import CamperList from '../../components/CamperList/CamperList';
import css from './NewsPage.module.css';

// import {
//   getCampersError,
//   getCampersStatus,
//   selectFilteredCampers,
//   selectPage,
//   selectLastPage,
// } from '../../redux/camper/selectors';
import { useEffect } from 'react';
import { getStartCampers } from '../../redux/camper/operations';
import { LoadMoreBtn } from '../../components/LoadMoreBtn/LoadMoreBtn';
import FilterForm from '../../components/FilterForm/FilterForm';
// import { incrementPage } from '../../redux/campersSlice';
// import { changeFilter } from '../../redux/camper/filtersSlice';

const NewsPage = () => {
  // const loading = useSelector(getCampersStatus);
  // const error = useSelector(getCampersError);
  // const items = useSelector(selectFilteredCampers);
  // const visible = items.length > 0;
  // const lastPage = useSelector(selectLastPage);
  const dispatch = useDispatch();
  // const page = useSelector(selectPage);

  // useEffect(() => {
  //   if (page === 1) {
  //     dispatch(getStartCampers());
  //     dispatch(
  //       changeFilter({
  //         location: '',
  //         airConditioner: false,
  //         automatic: false,
  //         kitchen: false,
  //         TV: false,
  //         shower: false,
  //         type: '',
  //       })
  //     );
  //   }
  // }, [dispatch, page]);

  const initialFilterValues = {
    location: '',
    airConditioner: false,
    automatic: false,
    kitchen: false,
    TV: false,
    shower: false,
    type: '',
  };

  // const onLoadMore = () => {
  //   dispatch(incrementPage());
  //   dispatch(changeFilter(initialFilterValues));
  // };

  return (
    <div className={css.container}>
      <FilterForm />
      <CamperList items={[]} />
    </div>
  );
};
export default NewsPage;
