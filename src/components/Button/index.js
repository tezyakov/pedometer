import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const Button = ({ onClick, title }) => (
  <button className={styles.gridButton} onClick={onClick}>{title}</button>
)

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

export default Button;
