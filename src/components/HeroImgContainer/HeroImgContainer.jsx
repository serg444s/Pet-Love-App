import css from './HeroImgContainer.module.css';
import heroImgMobile from '../../assets/img/mobile.png';
import heroImgTablet from '../../assets/img/tab.png';
import heroImgDesktop from '../../assets/img/desc.png';

const HeroImage = () => {
  return (
    <div className={css.container}>
      <picture>
        <source
          media="(min-width: 1280px)"
          srcSet={heroImgDesktop}
          type="image/webp"
        />
        <source
          media="(min-width: 768px)"
          srcSet={heroImgTablet}
          type="image/webp"
        />
        <source
          media="(max-width: 767.98px)"
          srcSet={heroImgMobile}
          type="image/webp"
        />
        <img
          src={heroImgMobile}
          alt="Girl which loves her dog"
          loading="lazy"
        />
      </picture>
    </div>
  );
};

export default HeroImage;
