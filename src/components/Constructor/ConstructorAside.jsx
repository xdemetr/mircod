import React from 'react';
import styles from './Constructor.module.sass';
import Icon from '../Icon/Icon';

const ConstructorAside = ({selected}) => {

  const RenderItems = () => {
    if (!selected.length) return <span>empty...</span>;

    return selected.map(({id, icon, value}) =>  {
      return (
        <div className={styles.chosenItem} key={id} title={value}>
          <Icon content={icon} mix={styles.chosenItemIcon}/>
        </div>
      )
    })
  }

  return (
    <aside className={styles.constructorAside}>
      <span>Chosen <b>options:</b></span>
      <RenderItems/>
    </aside>
  );
};

export default ConstructorAside;
