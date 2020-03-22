import React from 'react';
import Icon from '../Icon';
import cn from 'classnames';

import styles from './Button.module.sass';

const Button = ({ icon, onlyIcon, mod, selected, children, onClick }) => {

  const ButtonIcon = () => {
    if (!icon) {
      return null;
    }
    return (
      <div className={styles.buttonIconBox}>
        <Icon content={icon} mix={styles.buttonIcon}/>
      </div>
    );
  };

  const ButtonText = () => {
    if (!children) {
      return null;
    }

    return <span className={styles.buttonText}>{children}</span>;
  };

  return (
    <button
      className={cn(styles.button, onlyIcon && styles.buttonOnlyIcon, mod && styles[mod], selected && styles.buttonSelected)}
      onClick={onClick}
    >
      <ButtonIcon/>
      <ButtonText/>
    </button>
  );
};

export default React.memo(Button);
