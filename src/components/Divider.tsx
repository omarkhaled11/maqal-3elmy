import React from 'react';

import styles from './Divider.module.scss';

const Divider = ({ text, size = 'big' }) => {
  return (
    <hr
      className={size === 'big' ? styles.divider_big : styles.divider_small}
      data-content={text}
    ></hr>
  );
};

export default Divider;
