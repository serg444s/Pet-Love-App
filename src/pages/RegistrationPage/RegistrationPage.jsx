import css from './RegistrationPage.module.css';
// import AdvantagesSection from '../components/AdvantagesSection/AdvantagesSection';
// import SignUpForm from '../components/Auth/SignUpForm/SignUpForm';

const RegistrationPage = () => {
  return (
    <div className={css.signUpPageWrapper}>
      <div className={css.formWrapper}>{/* <SignUpForm /> */}</div>
      <div className={css.disabled}>{/* <AdvantagesSection /> */}</div>
    </div>
  );
};

export default RegistrationPage;
