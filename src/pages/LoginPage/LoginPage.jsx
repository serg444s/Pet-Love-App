// import AdvantagesSection from '../components/AdvantagesSection/AdvantagesSection';
// import SignInForm from '../components/Auth/SignInForm/SignInForm';
import css from './LoginPage.module.css';

const LoginPage = () => {
  return (
    <div className={css.signInPageWrapper}>
      <div className={css.formWrapper}>{/* <SignInForm /> */}</div>
      <div className={css.disabled}>{/* <AdvantagesSection /> */}</div>
      LoginPage
    </div>
  );
};

export default LoginPage;
