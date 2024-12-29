import css from './Hero.module.css';

const Hero = () => {
  return (
    <div className={css.container}>
      <h1>
        Take good <strong>care</strong> of your small pets
      </h1>
      <p>
        Choosing a pet for your home is a choice that is meant to enrich your
        life with immeasurable joy and tenderness.
      </p>
    </div>
  );
};

export default Hero;
