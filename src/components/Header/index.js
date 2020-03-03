import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const Header = ({ title }) => (
  <div className={styles.headerContainer}>
    <p className={styles.headerContent}>{title}</p>
  </div>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;