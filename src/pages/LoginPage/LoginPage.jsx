// import AdvantagesSection from '../components/AdvantagesSection/AdvantagesSection';
// import SignInForm from '../components/Auth/SignInForm/SignInForm';
import PetBlock from 'components/PetBlock/PetBlock';
import css from './LoginPage.module.css';
import LoginForm from 'components/LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <div className={css.page}>
      <PetBlock />
      <LoginForm />
    </div>
  );
};

export default LoginPage;
