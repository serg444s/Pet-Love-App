import Hero from 'components/Hero/Hero';
import css from './HomePage.module.css';
import HeroImage from 'components/HeroImgContainer/HeroImgContainer';

const HomePage = () => {
  return (
    <section className={css.section}>
      <Hero />
      <HeroImage />
    </section>
  );
};

export default HomePage;
