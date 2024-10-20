import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import css from './LoginForm.module.css';
import { Link } from 'react-router-dom';
import { logIn } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

const LoginForm = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email is required')
      .matches(
        /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
        'Invalid email format'
      ),
    password: Yup.string()
      .required('Password is required')
      .min(7, 'Password must be at least 7 characters'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async ({ email, password }) => {
    try {
      const response = await dispatch(logIn({ email, password }));
      console.log(response);

      if (response.error) {
        toast.error(response.payload.response.data.message || 'Login failed');
      }
    } catch (error) {
      toast.error('Something went wrong');
    }
  };

  return (
    <div className={css.form}>
      <h2 className={css.title}>Log in</h2>
      <p className={css.text}>
        Welcome! Please enter your credentials to login to the platform:
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            {...register('email')}
            placeholder="Email"
            className={css.input}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <input
            type="password"
            {...register('password')}
            placeholder="Password"
            className={css.input}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        <button type="submit" className={css.btn}>
          Log In
        </button>
        <p className={css.subtext}>
          Don’t have an account?
          <Link to="/register" className={css.login}>
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
