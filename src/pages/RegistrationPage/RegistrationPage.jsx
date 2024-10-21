import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import css from './RegistrationPage.module.css';
import PetBlock from 'components/PetBlock/PetBlock';
// import AdvantagesSection from '../components/AdvantagesSection/AdvantagesSection';
// import SignUpForm from '../components/Auth/SignUpForm/SignUpForm';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const RegistrationPage = () => {
  const log = useSelector(selectIsLoggedIn);
  console.log(log);

  return (
    <div className={css.page}>
      <PetBlock />
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
