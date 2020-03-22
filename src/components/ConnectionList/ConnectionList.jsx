import React from 'react';
import styles from './ConnectionList.module.sass';
import cn from 'classnames';

const ConnectionList = ({ items, onClick }) => {

  if (!items.length) {
    return null;
  }

  const renderItems = items.map(({ id, value, selected }) => {


    return (
      <div
        className={cn(styles.item, selected && styles.selected)}
        key={id}
        onClick={() => onClick(id)}
      >
        <span className={styles.itemLabel}>{value}</span>
      </div>
    );
  });

  return (
    <div className={styles.list}>
      {renderItems}
    </div>
  );
};

export default ConnectionList;
