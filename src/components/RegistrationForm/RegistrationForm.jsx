import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import css from './RegistrationForm.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { registerUser } from '../../redux/auth/operations';

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .required('Email is required')
      .matches(
        /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
        'Invalid email format'
      ),
    password: Yup.string()
      .required('Password is required')
      .min(7, 'Password must be at least 7 characters'),
    confirmPassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password')], 'Passwords must match'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async ({ name, email, password }) => {
    console.log('onSubmit', name, email, password);
    try {
      const response = await dispatch(registerUser({ name, email, password }));

      if (response.error) {
        toast.error(
          response.payload.response.data.message || 'Registration failed'
        );
      }
    } catch (error) {
      toast.error('Something went wrong');
    }
  };

  return (
    <div className={css.form}>
      <h2 className={css.title}>Registration</h2>
      <p className={css.text}>Thank you for your interest in our platform. </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            {...register('name')}
            placeholder="Name"
            className={css.input}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>

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

        <div>
          <input
            type="password"
            {...register('confirmPassword')}
            placeholder="Confirm Password"
            className={css.input}
          />
          {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        </div>

        <button type="submit" className={css.btn}>
          Register
        </button>
        <p className={css.subtext}>
          Already have an account?
          <Link to="/login" className={css.login}>
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegistrationForm;
