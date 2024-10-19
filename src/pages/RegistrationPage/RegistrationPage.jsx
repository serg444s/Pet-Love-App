import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import css from './RegistrationPage.module.css';
import PetBlock from 'components/PetBlock/PetBlock';
// import AdvantagesSection from '../components/AdvantagesSection/AdvantagesSection';
// import SignUpForm from '../components/Auth/SignUpForm/SignUpForm';

const RegistrationPage = () => {
  return (
    <div className={css.page}>
      <PetBlock />
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
