import React from 'react';
import cn from 'classnames';
import * as SwiperContainer from 'react-id-swiper';

import styles from '../Options/Options.module.sass';

const Swiper = ({items, params, children, ...props}) => {
  return (
    <SwiperContainer {...props} {...params}>
      <div>1</div>
    </SwiperContainer>
  );
};

export default Swiper;
