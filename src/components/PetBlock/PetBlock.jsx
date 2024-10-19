import css from './PetBlock.module.css';

const PetBlock = () => {
  // function srcForImg(type) {
  //   if (type === 'register') {
  //     return '../../assets/img/petblock/register.png';
  //   }
  //   if (type === 'login') {
  //     return '../../assets/img/petblock/login.png';
  //   } else {
  //     return '../../assets/img/petblock/addpet.png';
  //   }
  // }

  return (
    <div className={css.block}>
      <img
        src="../../assets/img/petblock/login.png"
        alt="pet"
        className={css.img}
      />
    </div>
  );
};

export default PetBlock;
