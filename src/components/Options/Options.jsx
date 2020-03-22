import React, { useState } from 'react';
import Swiper from 'react-id-swiper';
import cn from 'classnames';
import { connect } from 'react-redux';

import Button from '../Button';
import styles from './Options.module.sass';
import 'swiper/css/swiper.css';
import { selectOption } from '../store/actions/optionsActions';


const Options = ({ options, selected, selectOption }) => {

  const [swiper, setSwiper] = useState(null);

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  if (!options.length) {
    return null;
  }

  const swiperParams = {
    wrapperClass: `${styles.swiperWrapper}`,
    freeMode: true,
    slidesPerView: 10,
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: `.${styles.swiperPrevBtn}`
    // },
  };

  const RenderOptions = () => options.map(item => {
    const { id, value, icon } = item;

    const isSelected = selected.find(option => option.id === id) ? true : false;

    return (
      <div className={cn(styles.listItem, 'swiper-slide', styles.swiperSlide)} key={id}>
        <Button icon={icon} mod="primaryRounded" onClick={() => selectOption(item)} selected={isSelected}>{value}</Button>
      </div>
    );
  });

  const AddButton = () => {
    return (
      <div className={cn(styles.listItem, styles.listItemAdd)}>
        <Button icon="plus" mod="primaryRounded">Add custom</Button>
      </div>
    );
  };

  return (
    <div className={styles.options}>
      <section className={styles.list}>
        <Swiper {...swiperParams}
                getSwiper={setSwiper}
                containerClass={cn('swiper-container', styles.swiper)}
                wrapperClass={styles.swiperWrapper}
        >
          <RenderOptions/>
        </Swiper>
        <button className={cn(styles.swiperBtn, styles.swiperBtnPrev)} onClick={goPrev}></button>
        <button className={cn(styles.swiperBtn, styles.swiperBtnNext)} onClick={goNext}></button>
        <AddButton/>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => ({
  options: state.options.list,
  selected: state.options.selected
});

export default connect(mapStateToProps, { selectOption })(React.memo(Options));

