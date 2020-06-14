import React from 'react';

import styles from './Divider.module.scss';

const Divider = ({ text }) => {
  return <hr className={styles.divider} data-content={text}></hr>;
};

export default Divider;
